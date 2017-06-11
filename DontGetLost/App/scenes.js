import React, {Component} from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import MenuContainer from './components/menu/menu_container';
import SignUpContainer from './components/login/signup_container';
import LoginContainer from './components/login/login_container';
import GroupIndexContainer from './components/groups/group_index_container';
import GroupFormContainer from './components/groups/group_form_container';
import InvitationsSentContainer from './components/invitations/invitations_sent_container';
import InvitationsReceivedContainer from './components/invitations/invitations_received_container';

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
        key='menu'
        component={MenuContainer}
        title='Menu' />

      <Scene
        key='groupIndex'
        component={GroupIndexContainer}
        title="My Groups"
        hideNavBar={false}/>

      <Scene
        key='invitationsSent'
        component={InvitationsSentContainer}
        title="Invitations Sent"
        hideNavBar={false} />

      <Scene
        key='invitationsReceived'
        component={InvitationsReceivedContainer}
        title="Invitations Received"
        hideNavBar={true} />

    </Router>
  );
};

export default Scenes;
