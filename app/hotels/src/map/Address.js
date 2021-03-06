// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Color } from '@kiwicom/react-native-app-common';

import type { Address as AddressData } from './__generated__/Address.graphql';

type Props = {|
  data: AddressData,
|};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopColor: Color.grey.$100,
    borderTopWidth: 1,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  mapIcon: {
    alignSelf: 'center',
    marginRight: 10,
  },
  header: {
    fontWeight: 'bold',
  },
});

class Address extends React.Component<Props> {
  render = () => {
    const { data: address } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.mapIcon}>
          <Ionicons name="md-map" size={24} color={Color.brand} />
        </View>
        <View>
          <Text style={styles.header}>Address</Text>
          <Text>
            {address.street}, {address.city} {address.zip}
          </Text>
        </View>
      </View>
    );
  };
}

export default createFragmentContainer(
  Address,
  graphql`
    fragment Address on Address {
      street
      city
      zip
    }
  `,
);
