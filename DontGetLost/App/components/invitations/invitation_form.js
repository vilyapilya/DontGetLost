import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, AsyncStorage, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Dimensions from 'Dimensions';

const fullHeight = Dimensions.get('window').height - 40;
const fullWidth = Dimensions.get('window').width - 120;



class InvitationForm extends Component {
  constructor() {
    super();

    this.state = {
      invitee: ""
    };
  }

  handleSubmit(){
    const invitee_username = this.state.invitee;
    const group_id = this.props.groupDetail.id;

    const invitation = {group_id: group_id, invitee_username: invitee_username};
    this.setState.invitee = "";
    this.props.makeInvitation(invitation);
    // setTimeout(Action.groupDetail, 1000)
  }

  render() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.title}>Invite a Friend</Text>
        <TextInput
          style={{width: fullWidth}}
          onChangeText={(val) => this.setState({invitee: val})}
          placeholder="Enter Name" />

        <TouchableHighlight
          underlayColor='#ADD8E6'
          activeOpacity={0.5}
          style={styles.buttonContainer}
          onPress={this.handleSubmit}>
          <Text style={styles.button}>Send</Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor='#A3A3A3'
          activeOpacity={0.5}
          style={styles.altButton}
          onPress={Actions.pop}>
          <Text style={styles.button}>Cancel</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontSize: 24,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ADD8E6',
    width: fullWidth,
    height: 60,
    margin: 10,
    borderRadius: 3,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: -2
    },
  },
  altButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A3A3A3',
    width: fullWidth,
    height: 60,
    margin: 10,
    borderRadius: 3,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: -2
    },
  },
  button: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 16
  },
});

export default InvitationForm;
