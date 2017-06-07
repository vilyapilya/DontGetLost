import React from 'react';

import {
    Router,
    routerReducer,
    Route,
    Container,
    Animations,
    Schema
} from 'react-native-redux-router';

import {
  View
} from 'react-native';

import Login from './Component/Login/login';

class Root extends Component {
  render() {
    return (
      <View>
        <Login />
      </View>
    );
  }
}

export default Root;
