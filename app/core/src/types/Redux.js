// @flow

export type HotelsFilter = {
  latitude: number,
  longitude: number,
  checkin: string | null,
  checkout: string | null,
  roomsConfiguration: {
    adultsCount: number,
    children: [],
  },
};

export type ReduxState = {|
  user:
    | {|
        logged: true,
        accessToken: string,
      |}
    | {|
        logged: false,
        accessToken: null,
      |},
  search: {
    // we may have more fields than just "from" and "to" because of multi-city
    fields: {|
      [identifier: string]: string, // identifier: value
    |},
    // this is identifier of the last used field during search
    lastFocusedField: string,
    // this is what our system suggests for 'userTyped' field
    systemSuggested: string,
  },
  hotelsFilter: {
    filter: HotelsFilter,
  },
|};

export type ReduxActions =
  // user actions
  | {| type: 'login', accessToken: string |}
  | {| type: 'logout' |}
  // search actions
  | {| type: 'updateFieldValue', identifier: string, value: string |}
  // hotel filters actions
  | {| type: 'setHotelFilters', filter: HotelsFilter |};
