import React, {Component} from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { logout } from '../../actions/session_actions';



export default class Menu extends Component {

handleLogout() {
  this.props.logout();
  setTimeout(Actions.login, 1000);
}

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.border}>
        <Text style={{fontSize: 24}}>Main Menu</Text>
        </View>
        <TouchableHighlight
          underlayColor='#FFFFFF'
          activeOpacity={0.5}
          style={styles.buttonContainer}
          onPress={() => console.log("hi")}>
          <Text>Map</Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor='#FFFFFF'
          activeOpacity={0.5}
          style={styles.buttonContainer}
          onPress={Actions.groupIndex}>
          <Text>My Groups</Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor='#FFFFFF'
          activeOpacity={0.5}
          style={styles.buttonContainer}
          onPress={Actions.invitationsReceived}>
          <Text>Invitations Received</Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor='#FFFFFF'
          activeOpacity={0.5}
          style={styles.buttonContainer}
          onPress={Actions.invitationsSent}>

          <Text>Invitations Sent</Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor='#FFFFFF'
          activeOpacity={0.5}
          style={styles.buttonContainer}
          onPress={this.handleLogout.bind(this)}>
          <Text>Logout!</Text>
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
    width: 200,
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
  border: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: 200,
    alignItems: 'center'
  }
});
