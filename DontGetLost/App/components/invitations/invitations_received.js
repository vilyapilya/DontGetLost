import React, {Component} from 'react';
import { View, Text, TextInput, TouchableHighlight, AsyncStorage, StyleSheet } from 'react-native';
import InvitationReceivedItem from './invitation_received_item';

class InvitationsReceived extends Component {
  constructor() {
    super(); {

    }
  }

  componentDidMount() {
    this.props.requestReceivedInvitations();
  }

  invitations() {
    const invitations = this.props.invitations;
    if (Object.keys(invitations).length !== 0) {
      return Object.keys(invitations).map((key, idx) => {
        return <InvitationReceivedItem key={idx}
          deleteReceivedInvitation={this.props.deleteReceivedInvitation}
          joinGroup={this.props.joinGroup}
          invitation={invitations[key]} />
      });

    }
  }

  render() {
    return(
      <View style={styles.container}>
        {this.invitations()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default InvitationsReceived;
