// @flow

import * as React from 'react';
import { Platform } from 'react-native';
import { GoogleButton } from '@kiwicom/react-native-app-common';

import GoogleAuth from '../../services/authentication/Google';
import config from '../../../config/application';
import { createAccessToken, type AccessToken } from '../../types/AccessToken';

type Props = {|
  onSuccess: (accessToken: AccessToken) => void,
|};

type State = {|
  loading: boolean,
|};

export default class GoogleLogin extends React.Component<Props, State> {
  state = {
    loading: false,
  };

  handleLogginAction = async () => {
    this.setState({ loading: true });
    const accessToken = await GoogleAuth.signIn();
    if (accessToken) {
      const jsonPayload = await (await fetch(
        'https://auth.skypicker.com/v1/oauth.google.connect',
        {
          method: 'POST',
          headers: {
            Authorization: config.auth.kiwi.backend,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_token: accessToken,
          }),
        },
      )).json();
      this.setState({ loading: false });
      this.props.onSuccess(createAccessToken(jsonPayload.token));
    } else {
      // TODO: onFailure event with errors
      this.setState({ loading: false });
    }
  };

  render = () => {
    if (Platform.OS !== 'ios') {
      return null; // we currently support Google login only on iOS devices
    }
    return (
      <GoogleButton
        loading={this.state.loading}
        onPress={this.handleLogginAction}
      />
    );
  };
}
