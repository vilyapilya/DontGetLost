/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Root from './App/Root';
// <Login />

// import Login from './App/Login/login';

class DontGetLost extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Root />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .5,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'red',
  },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },

  // window.fetching = fetch(`http://localhost:3000/api/users`, {
  //   method: 'GET',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   }
  // })
  //
  // fetching.then()

  // window.state = store.getState()
});

AppRegistry.registerComponent('DontGetLost', () => DontGetLost);
