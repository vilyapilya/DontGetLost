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
        <Text>
          You invited: {this.props.invitation.invitee}{"\n"}
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
    backgroundColor: 'pink',
  },
});

export default InvitationSentItem;
