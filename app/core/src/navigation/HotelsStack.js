// @flow

import * as React from 'react';
import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import { SingleHotel, GalleryGrid } from '@kiwicom/react-native-app-hotels';

import AllHotelsNavigationScreen from '../screens/hotels/AllHotelsNavigationScreen';
import AllHotelsMapNavigationScreen from '../screens/hotels/AllHotelsMapNavigationScreen';
import type { Navigation } from '../types/Navigation';

type Props = {|
  navigation: Navigation,
|};

type InjectorProps = {|
  navigation: Navigation,
  WrappedComponent: React.ElementType,
|};

export default {
  AllHotels: {
    screen: AllHotelsNavigationScreen,
  },
  AllHotelsMap: {
    screen: AllHotelsMapNavigationScreen,
    navigationOptions: {
      headerTitle: 'Map',
    },
  },
  SingleHotel: {
    screen: withMappedProps(function SingleHotelNavigationScreen(
      props: Props & {| hotelId: string |},
    ) {
      function goToGalleryGrid(hotelName, images) {
        props.navigation.navigate('GalleryGrid', {
          hotelName,
          images,
        });
      }
      return (
        <SingleHotel
          onGoToHotelGallery={goToGalleryGrid}
          // hotelId={props.hotelId}
          hotelId="aG90ZWw6MjUyMTU=" // FIXME: we need to refactor this - it's not possible to fetch hotel just by simple ID here
        />
      );
    }),
    navigationOptions: {
      headerTitle: 'Detail',
    },
  },
  GalleryGrid: {
    screen: withMappedProps(
      GalleryGrid,
      class AdditionalPropsInjecter extends React.Component<InjectorProps> {
        goToGalleryStripe = (hotelName, highResImages, imageIndex) => {
          this.props.navigation.navigate('GalleryStripe', {
            hotelName,
            imageUrls: highResImages,
            index: imageIndex,
          });
        };

        render = () => {
          const { WrappedComponent } = this.props;
          return (
            <WrappedComponent
              {...this.props}
              onGoToGalleryStripe={this.goToGalleryStripe}
            />
          );
        };
      },
    ),
    navigationOptions: {
      headerTitle: 'Photos',
    },
  },
};
