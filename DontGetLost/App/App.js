import React, {Component} from 'react';
import {Provider} from 'react-redux';
import { Router } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

import Root from './Root';
import { register, login, logout } from './actions/session_actions';

// import {
//   getInvitations,
//   showInvitation,
//   makeInvitation,
//   deleteInvitation
// } from './util/invitation_api_util.js';

import {
  createGroup,
  requestSingleGroup,
  requestAllGroups,
  deleteGroup,
  updateGroup
 } from './actions/group_actions';

import configureStore from './store/store';

const store = configureStore();
window.store = store;

// window.getInvitations = getInvitations;
// window.showInvitation = showInvitation;
// window.makeInvitation = makeInvitation;
// window.deleteInvitation = deleteInvitation;

window.deleteGroup = deleteGroup;
window.requestSingleGroup = requestSingleGroup;
window.requestAllGroups = requestAllGroups;
window.createGroup = createGroup;
window.updateGroup = updateGroup;
window.register = register;

window.login = login;
window.logout = logout;

class App extends Component {
  constructor() {
    super();

    this.getToken = this.getToken.bind(this);
    this.verifyToken = this.verifyToken.bind(this);
  }

  async getToken() {
    try {
      let sessionToken = await AsyncStorage.getItem('sessionToken');
      if (!sessionToken) {
        Action.login();
      } else {
        this.verifyToken(sessionToken)
      }
    } catch (error) {
      // console.log("Error finding token");
    }
  }

  async verifyToken(token) {
    const sessionToken = token;
    try {
      let response = await fetch('http://10.0.2.2:3000/api/verify?session%5Bsession_token%5D=' + sessionToken);
      let res = await response.text();
      if (response.status >= 200 && response.status < 300) {
        //Verified token means user is logged in so we redirect them home.
        // console.log('user still logged in');
        Actions.menu();
        //should be our actual home page
      } else {
        //Handle error
        const error = res;
        throw error;
      }
    } catch (error) {
      // console.log("error response: " + error);
    }
  }

  componentWillMount() {
    this.getToken();
  }

  render() {
    return (
      <Provider store={store}>
          <Root />
      </Provider>
    );
  }
}

export default App;
