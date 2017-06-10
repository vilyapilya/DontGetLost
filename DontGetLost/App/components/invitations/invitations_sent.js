import React, {Component} from 'react';
import { View, Text, TextInput, TouchableHighlight, AsyncStorage, StyleSheet } from 'react-native';
import InvitationItem from './invitation_item';

class InvitationsSent extends Component {
  constructor() {
    super(); {

    }
  }

  componentDidMount() {
    this.props.requestMadeInvitations();
  }

  invitations() {
    const invitations = this.props.invitations;
    if (Object.keys(invitations).length !== 0) {
      return Object.keys(invitations).map((key, idx) => {
        return <InvitationItem key={idx} deleteSentInvitation = {this.props.deleteSentInvitation} invitation={invitations[key]} />
      })

    }
  }

  render() {
    return(
      <View style={styles.container}>
        {this.invitations()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .3,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'pink',
  },
});

export default InvitationsSent;
