// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import { PublicApiRenderer } from '@kiwicom/react-native-app-relay';

import MapView from './MapScreen';

import type { AllHotelsMapQueryResponse } from './__generated__/AllHotelsMapQuery.graphql';

type Props = {|
  onGoToSingleHotel: string => void,
|};

class AllHotelsMap extends React.Component<Props> {
  renderInnerComponent = (props: AllHotelsMapQueryResponse) => (
    <MapView data={props.allAvailableHotels} />
  );

  render = () => {
    return (
      <PublicApiRenderer
        query={graphql`
          query AllHotelsMapQuery($search: HotelsSearchInput!) {
            allAvailableHotels(search: $search) {
              ...MapScreen
            }
          }
        `}
        variables={{
          search: this.props.hotelsFilter,
        }}
        render={this.renderInnerComponent}
        cacheConfig={{ force: true }}
      />
    );
  };
}

export default AllHotelsMap;
