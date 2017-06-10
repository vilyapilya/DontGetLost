import React, {Component} from 'react';
import { Provider } from 'react-redux';

import {
  Router,
  routerReducer,
  Route,
} from 'react-native-router-flux'

import {
  View,
  Text,
  StyleSheet,
  Navigator
} from 'react-native';

import SignUpContainer from './components/login/signup_container';
import LoginContainer from './components/login/login_container';
import InvitationsSentContainer from './components/invitations/invitations_sent_container';

class Root extends Component {
  render() {
    return (
      <View style={styles.container}>
        <InvitationsSentContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'red',
  },
});

export default Root;
