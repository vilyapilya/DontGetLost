import React, {Component} from 'react';
import {Provider} from 'react-redux';

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

  async getToken() {
    try {
      let sessionToken = await this.props.storage.getItem('sessionToken');
      if (!sessionToken) {
        console.log("Token not set");
      } else {
        this.verifyToken(sessionToken)
      }
    } catch (error) {
      console.log("Error finding token");
    }
  }

  async verifyToken(token) {
    const sessionToken = token;
    try {
      let response = await fetch('http://localhost:3000/api/verify?session%5Bsession_token%5D=' + sessionToken);
      let res = await response.text();
      if (response.status >= 200 && response.status < 300) {
        //Verified token means user is logged in so we redirect them home.
        console.log('user still logged in');
        Actions.categoriesIndex();
      } else {
        //Handle error
        const error = res;
        throw error;
      }
    } catch (error) {
      console.log("error response: " + error);
    }
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
