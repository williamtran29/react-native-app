// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { AllHotelsMap } from '@kiwicom/react-native-app-hotels';
import type { Navigation } from '../../types/Navigation';

type Props = {|
  navigation: Navigation,
|};

function AllHotelsMapNavigationScreen(props: Props) {
  function goToHotel() {
    props.navigation.navigate('SingleHotel');
  }

  return (
    <AllHotelsMap
      onGoToSingleHotel={goToHotel}
      onFilterChange={props.onFilterChange}
      hotelsFilter={props.hotelsFilter}
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
  AllHotelsMapNavigationScreen,
);
