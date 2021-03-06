/**
 * @flow
 * @relayHash 46cf3dc1aeaa46274268ae58eb92af89
 */

/* eslint-disable */

import type { ConcreteBatch } from 'relay-runtime';
export type AllBookingsQueryResponse = {| |};

/*
query AllBookingsQuery {
  ...AllBookingsList_bookings
}

fragment AllBookingsList_bookings on RootQuery {
  allBookings {
    edges {
      cursor
      node {
        assets {
          ...AllBookingsAssetsDownloader
        }
        arrival {
          localTime
        }
        ...AllBookingsListNode
        id
      }
    }
  }
}

fragment AllBookingsAssetsDownloader on BookingAssets {
  ticketUrl
  invoiceUrl
}

fragment AllBookingsListNode on Booking {
  id
  databaseId
  ...OverviewRow_node
}

fragment OverviewRow_node on Booking {
  departure {
    localTime
    ...RouteStop
  }
  arrival {
    localTime
    ...RouteStop
  }
}

fragment RouteStop on RouteStop {
  airport {
    ...Airport
  }
}

fragment Airport on Location {
  locationId
  city {
    name
  }
}
*/

const node: ConcreteBatch = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AllBookingsQuery",
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "AllBookingsList_bookings",
        "args": null
      }
    ],
    "type": "RootQuery"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AllBookingsQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "AllBookingsQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "BookingConnection",
        "name": "allBookings",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "BookingEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "cursor",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Booking",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "BookingAssets",
                    "name": "assets",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "ticketUrl",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "invoiceUrl",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "name": "arrival",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "localTime",
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "Location",
                        "name": "airport",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "locationId",
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "args": null,
                            "concreteType": "LocationArea",
                            "name": "city",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "name",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "databaseId",
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "name": "departure",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "localTime",
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "Location",
                        "name": "airport",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "locationId",
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "args": null,
                            "concreteType": "LocationArea",
                            "name": "city",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "name",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query AllBookingsQuery {\n  ...AllBookingsList_bookings\n}\n\nfragment AllBookingsList_bookings on RootQuery {\n  allBookings {\n    edges {\n      cursor\n      node {\n        assets {\n          ...AllBookingsAssetsDownloader\n        }\n        arrival {\n          localTime\n        }\n        ...AllBookingsListNode\n        id\n      }\n    }\n  }\n}\n\nfragment AllBookingsAssetsDownloader on BookingAssets {\n  ticketUrl\n  invoiceUrl\n}\n\nfragment AllBookingsListNode on Booking {\n  id\n  databaseId\n  ...OverviewRow_node\n}\n\nfragment OverviewRow_node on Booking {\n  departure {\n    localTime\n    ...RouteStop\n  }\n  arrival {\n    localTime\n    ...RouteStop\n  }\n}\n\nfragment RouteStop on RouteStop {\n  airport {\n    ...Airport\n  }\n}\n\nfragment Airport on Location {\n  locationId\n  city {\n    name\n  }\n}\n"
};

module.exports = node;
