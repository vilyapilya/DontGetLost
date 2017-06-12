import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, AsyncStorage, StyleSheet } from 'react-native';

class InvitationForm extends Component {
  constructor() {
    super();

    this.state = {
      invitee: ""
    }
  }

  handleSubmit(){
    const invitee_username = this.state.invitee;
    const group_id = this.props.groupDetail.id;

    const invitation = {group_id: group_id, invitee_username: invitee_username}
    this.props.makeInvitation(invitation)
  }

  render() {
    return(
      <View>
        <TextInput
          onChangeText={(val) => this.setState({invitee: val})}
          placeholder="Invite Person"
        />
        <TouchableHighlight onPress={this.handleSubmit.bind(this)}>
          <Text>Send Invite</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default InvitationForm;
