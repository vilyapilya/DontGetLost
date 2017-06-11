import React, {Component} from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Menu from './components/menu/menu';
import SignUpContainer from './components/login/signup_container';
import LoginContainer from './components/login/login_container';
import GroupIndexContainer from './components/groups/group_index_container';
import GroupFormContainer from './components/groups/group_form_container';
import Locat from './components/Locat/locat';

const Scenes = () => {
  return(
    <Router sceneStyle={{ backgroundColor: 'white' }}>
      <Scene
        key='login'
        component={LoginContainer}
        title="Login"
        hideNavBar={true}
        initial={true} />

      <Scene
        key='signup'
        component={SignUpContainer}
        title="Sign Up"
        hideNavBar={false} />

      <Scene
        key='groupIndex'
        component={GroupIndexContainer}
        title="My Groups"
        hideNavBar={false} />

      <Scene
        key='groupForm'
        component={GroupFormContainer}
        title="Create a Group!"
        hideNavBar={false} />
      <Scene
        key='locat'
        component={Locat}
        title="Go to Map"
        hideNavBar={false} />

    </Router>
  );
};

export default Scenes;
