import React, {Component} from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class GroupDetail extends Component {
  constructor() {
    super();
  }

  renderNames() {
    console.log(this.props.groupDetail.members);
    return (
      this.props.groupDetail.members.map( (member, i) =>
        <Text key={`member-${i}`}
        style={styles.buttonContainer}
        >member</Text>)
    );
  }

  render() {
    return (

      <View style={styles.namesContainer}>
        <TouchableHighlight onPress={Actions.invitationForm}>
          <Text>Invitation Someone</Text>
        </TouchableHighlight>
        <View style={styles.border}>
        <Text style={styles.title}>Group Members</Text>
        </View>
        {this.renderNames()}
      </View>
    );
  }

}

// <ScrollView>
//   {this.props.members.map(member => member.user.username)}
// </ScrollView>

// <TouchableHighlight
//   underlayColor='#FFFFFF'
//   activeOpacity={0.5}
//   style={styles.buttonContainer}
//   onPress={Actions.groupIndex}>
//   <Text>Back to Groups</Text>
// </TouchableHighlight>

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ADD8E6',
    width: 200,
    height: 60,
    margin: 10,
    borderRadius: 3,
    textAlign: 'center',
    textAlignVertical: "center"
  },
  namesContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    alignSelf: 'center',
    fontSize: 24,
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: 200,
  }
});
