// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import { PublicApiRenderer } from '@kiwicom/react-native-app-relay';
import moment from 'moment';

import HotelDetailScreen from './HotelDetailScreen';
import type { Image } from '../gallery/GalleryGrid';
import type { singleHotelQueryResponse } from './__generated__/singleHotelQuery.graphql';

type RoomsChildrenConfiguration = {|
  age: number,
|};

type RoomsConfiguration = {|
  adultsCount: number,
  children: RoomsChildrenConfiguration[],
|};

type AvailableHotelSearchInput = {|
  hotelId: string,
  checkin: Date,
  checkout: Date,
  roomsConfiguration: RoomsConfiguration[],
|};

type ContainerProps = {|
  search: AvailableHotelSearchInput,
  onGoToHotelGallery: (hotelName: string, images: Image[]) => void,
|};

export default class SingleHotelContainer extends React.Component<
  ContainerProps,
> {
  renderInnerComponent = ({ availableHotel }: singleHotelQueryResponse) => (
    <HotelDetailScreen
      openGallery={this.props.onGoToHotelGallery}
      availableHotel={availableHotel}
    />
  );

  render() {
    const { search } = this.props;
    return (
      <PublicApiRenderer
        query={graphql`
          query singleHotelQuery($search: AvailableHotelSearchInput!) {
            availableHotel(search: $search) {
              ...HotelDetailScreen_availableHotel
            }
          }
        `}
        variables={{
          search: {
            ...search,
            checkin: moment(search.checkin).format('YYYY-MM-DD'),
            checkout: moment(search.checkout).format('YYYY-MM-DD'),
          },
        }}
        render={this.renderInnerComponent}
      />
    );
  }
}
