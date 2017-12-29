// @flow

import type { ReduxState, ReduxActions } from '../../../types/Redux';

type HotelsFilterState = $PropertyType<ReduxState, 'hotelsFilter'>;

const InitialHotelsFilterState: HotelsFilterState = {
  filter: {
    latitude: 50.08,
    longitude: 14.44,
    checkin: null,
    checkout: null,
    roomsConfiguration: {
      adultsCount: 1,
      children: [],
    },
  },
};

export default (
  state: HotelsFilterState = InitialHotelsFilterState,
  action: ReduxActions,
): HotelsFilterState => {
  switch (action.type) {
    case 'setHotelFilters':
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
};
