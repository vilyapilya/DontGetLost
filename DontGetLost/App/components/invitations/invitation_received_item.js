import React, {Component} from 'react';
import { View, Text, TextInput, TouchableHighlight, AsyncStorage, StyleSheet } from 'react-native';

class InvitationReceivedItem extends Component {
  constructor() {
    super(); {

    }
  }

  onDeleteInvitePress(){
    this.props.deleteReceivedInvitation(this.props.invitation.id)
  }



  render() {
    return (
      <View style={styles.container}>
        <Text>
          You where invited by: {this.props.invitation.inviter}{"\n"}
          To Group: {this.props.invitation.group_name}
        </Text>
        <TouchableHighlight onPress={this.onDeleteInvitePress.bind(this)}>
          <Text>Delete Invite</Text>
        </TouchableHighlight>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .2,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'red',
  },
});

export default InvitationReceivedItem;
