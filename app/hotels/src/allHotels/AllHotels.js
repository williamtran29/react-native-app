// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import { PublicApiRenderer } from '@kiwicom/react-native-app-relay';
import { Layout } from '@kiwicom/react-native-app-common';

import SearchForm from './searchForm/SearchForm';
import FilterStripe from '../filter/FilterStripe';
import AllHotelsSearchList from './AllHotelsSearchList';

import type { AllHotelsSearchQueryResponse } from './__generated__/AllHotelsSearchQuery.graphql';
import type { SearchParametersType } from './searchForm/SearchParametersType';

type Props = {|
  openSingleHotel: (id: string) => void,
  onFilterChange: (filter: SearchParametersType) => void,
|};

export default class AllHotelsSearch extends React.Component<Props, void> {
  handleSearchChange = (search: SearchParametersType) => {
    this.props.onFilterChange(search);
  };

  isReadyToSearch = () => {
    const { hotelsFilter: search } = this.props;
    return (
      search.latitude && search.longitude && search.checkin && search.checkout
    );
  };

  renderInnerComponent = (propsFromRenderer: AllHotelsSearchQueryResponse) => (
    <AllHotelsSearchList
      data={propsFromRenderer.allHotels}
      openSingleHotel={this.props.openSingleHotel}
    />
  );

  render = () => {
    const { hotelsFilter } = this.props;
    return (
      <Layout>
        <SearchForm onChange={this.handleSearchChange} />
        <FilterStripe />
        {this.isReadyToSearch() && (
          <PublicApiRenderer
            query={graphql`
              query AllHotelsSearchQuery($search: HotelsSearchInput!) {
                allHotels: allAvailableHotels(search: $search) {
                  ...AllHotelsSearchList
                }
              }
            `}
            variables={{
              search: hotelsFilter,
            }}
            render={this.renderInnerComponent}
            cacheConfig={{
              force: true,
            }}
          />
        )}
      </Layout>
    );
  };
}
