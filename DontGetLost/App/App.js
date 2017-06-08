import React, {Component} from 'react';
import {Provider} from 'react-redux';

import Root from './Root';

import configureStore from './store/store';
import {register, getUser} from './util/login_api_util';
const store = configureStore();
window.store = store;
window.register = register;
window.getUser = getUser;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

export default App;
