import React, {Component} from 'react';
import {Provider} from 'react-redux';

import Root from './Root';

import configureStore from './store/store';

const store = configureStore();

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
