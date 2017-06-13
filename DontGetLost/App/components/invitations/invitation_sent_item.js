import React, {Component} from 'react';
import { View, Text, TextInput, TouchableHighlight, AsyncStorage, StyleSheet } from 'react-native';

class InvitationSentItem extends Component {
  constructor() {
    super(); {

    }
  }

  onDeleteInvitePress(){
    this.props.deleteSentInvitation(this.props.invitation.id)
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'flex-start', justifyContent: 'center',}}>
          <Text>
            You Invited: {this.props.invitation.inviter}
          </Text>

          <Text>
            To: {this.props.invitation.group_name}
          </Text>
        </View>

          <TouchableHighlight
            underlayColor='#FFFFFF'
            activeOpacity={0.5}
            style={styles.buttonContainer}
            onPress={this.onDeleteInvitePress.bind(this)}>
            <Text style={styles.button}>Cancel Invitation</Text>
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
  button: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 16
  },
});

export default InvitationSentItem;
