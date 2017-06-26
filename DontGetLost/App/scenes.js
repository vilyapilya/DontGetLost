import React, {Component} from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import MenuContainer from './components/menu/menu_container';
import SignUpContainer from './components/login/signup_container';
import LoginContainer from './components/login/login_container';
import GroupIndexContainer from './components/groups/group_index_container';
import GroupFormContainer from './components/groups/group_form_container';


import LocatContainer from './components/Locat/locat_container';

import InvitationsSentContainer from './components/invitations/invitations_sent_container';
import InvitationsReceivedContainer from './components/invitations/invitations_received_container';
import GroupDetailContainer from './components/groups/group_detail_container';
import InvitationFormContainer from './components/invitations/invitation_form_container';


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
        hideNavBar={true}/>

      <Scene
        key='groupDetail'
        component={GroupDetailContainer}
        title="group detail"
        hideNavBar={true}
        initial={false} />

      <Scene
        key='menu'
        component={MenuContainer}
        title='Menu'
        initial={false} />

      <Scene
        key='groupIndex'
        component={GroupIndexContainer}
        title="My Groups"
        hideNavBar={true}/>

      <Scene
        key='groupForm'
        component={GroupFormContainer}
        title="Group Form"
        hideNavBar={true} />

      <Scene
        key='invitationsSent'
        component={InvitationsSentContainer}
        title="Invitations Sent"
        hideNavBar={true} />

      <Scene
        key='invitationsReceived'
        component={InvitationsReceivedContainer}
        title="Invitations Received"
        hideNavBar={true} />

      <Scene
        key='locat'
        component={LocatContainer}
        title="Go to Map"
        hideNavBar={false} />

      <Scene
        key='invitationForm'
        component={InvitationFormContainer}
        title="group detail"
        hideNavBar={true}
        initial={false} />

    </Router>
  );
};

export default Scenes;
