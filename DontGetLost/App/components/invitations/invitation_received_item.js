import React, {Component} from 'react';
import { View, Text, TextInput, TouchableHighlight, AsyncStorage, StyleSheet } from 'react-native';

class InvitationReceivedItem extends Component {
  constructor() {
    super(); {

    }
  }

  onDeleteInvitePress(){
    this.props.deleteReceivedInvitation(this.props.invitation.id);
  }

  onAcceptInvitePress(){
    this.props.deleteReceivedInvitation(this.props.invitation.id);
    this.props.joinGroup(this.props.invitation.group_id);
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'flex-start', justifyContent: 'center',}}>
          <Text>
            You were invited by: {this.props.invitation.inviter}
          </Text>

          <Text>
            To: {this.props.invitation.group_name}
          </Text>
        </View>

          <TouchableHighlight
            underlayColor='#ff6961'
            activeOpacity={0.5}
            style={styles.buttonContainer}
            onPress={this.onDeleteInvitePress.bind(this)}>
            <Text style={styles.button}>Reject</Text>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor='#74B530'
            activeOpacity={0.5}
            style={styles.altContainer}
            onPress={this.onAcceptInvitePress.bind(this)}>
            <Text style={styles.button}>Accept</Text>
          </TouchableHighlight>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    justifyContent: 'space-between'
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff6961',
    width: 75,
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
  altContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#74B530',
    width: 75,
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

export default InvitationReceivedItem;
