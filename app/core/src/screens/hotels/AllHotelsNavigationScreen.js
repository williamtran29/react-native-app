// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { AllHotels } from '@kiwicom/react-native-app-hotels';
import { Ionicons } from '@expo/vector-icons';

import type { Navigation } from '../../types/Navigation';

type Props = {|
  navigation: Navigation,
|};

class AllHotelsNavigationScreen extends React.Component<Props> {
  static navigationOptions = (props: Props) => {
    function goToAllHotelsMap() {
      props.navigation.navigate('AllHotelsMap');
    }

    return {
      headerTitle: 'Hotels',
      headerRight: (
        <TouchableOpacity
          style={{ marginHorizontal: 10 }}
          onPress={goToAllHotelsMap}
        >
          <Ionicons name="md-map" size={30} color="#fff" />
        </TouchableOpacity>
      ),
    };
  };

  openSingleHotel = (id: string) =>
    this.props.navigation.navigate('SingleHotel', { hotelId: id });

  render = () => (
    <AllHotels
      hotelsFilter={this.props.hotelsFilter}
      openSingleHotel={this.openSingleHotel}
      onFilterChange={this.props.onFilterChange}
    />
  );
}

const mapStateToProps = state => ({
  hotelsFilter: state.hotelsFilter.filter,
});

const mapDispatchToProps = dispatch => ({
  onFilterChange: filter =>
    dispatch({
      type: 'setHotelFilters',
      filter,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  AllHotelsNavigationScreen,
);
