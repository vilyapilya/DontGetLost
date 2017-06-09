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

class Root extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SignUpContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .5,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'red',
  },
});

export default Root;
