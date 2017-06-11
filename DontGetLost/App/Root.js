import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { Scene } from 'react-native-router-flux';

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
import Scenes from './scenes';

class Root extends Component {
  render() {
    return (
        <Scenes />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Root;
