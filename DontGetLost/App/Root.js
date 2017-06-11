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

import Menu from './components/menu/menu';
import SignUpContainer from './components/login/signup_container';
import LoginContainer from './components/login/login_container';
import GroupIndexContainer from './components/groups/group_index_container';
import GroupFormContainer from './components/groups/group_form_container';

class Root extends Component {
  render() {
    return (
        <Scenes />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Root;
