import React, {Component} from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class GroupDetail extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.requestAllMembers();
  }

  render() {
    return (
      <View>

        <ScrollView>
          {this.props.members.map(member => member.user.username)}
        </ScrollView>
      </View>
    );
  }

}
