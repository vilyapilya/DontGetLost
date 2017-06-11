import React, {Component} from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class GroupDetail extends Component {
  constructor() {
    super();
  }

  // componentDidMount() {
  //   this.props.requestAllMembers();
  // }

  render() {
    return (
      <View>

      <TouchableHighlight
        underlayColor='#FFFFFF'
        activeOpacity={0.5}
        style={styles.buttonContainer}
        onPress={Actions.groupIndex}>
        <Text>Back to Groups</Text>
      </TouchableHighlight>
    </View>
    );
  }

}

// <ScrollView>
//   {this.props.members.map(member => member.user.username)}
// </ScrollView>

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
});
