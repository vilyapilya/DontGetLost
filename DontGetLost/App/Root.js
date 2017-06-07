import React, {Component} from 'react';

import {
  Router,
  routerReducer,
  Route,
} from 'react-native-router-flux'

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Login from './components/login/login';

class Root extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />
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
