// @flow

import * as React from 'react';
import { QueryRenderer } from 'react-relay';

import createEnvironment from './Environment';

type Props = {
  query: string,
  variables?: Object,
  render: ({ error: Object, props: Object }) => React.Node,
};

export default function publicApiRenderer({ query, variables, render }: Props) {
  return (
    <QueryRenderer
      environment={createEnvironment()}
      query={query}
      variables={variables}
      render={render}
    />
  );
}