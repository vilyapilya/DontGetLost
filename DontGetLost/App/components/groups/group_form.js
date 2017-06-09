import React, {Component} from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class GroupForm extends Component {
  constructor() {
    super();

    this.state = {
      group_name: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const group = this.state;
    this.props.createGroup(group);

  }

  render() {
    return (
      <View style={{backgroundColor: 'blue', flex: 1}}>
        <Text>Group Name</Text>
        <TextInput onChangeText={(val) => this.setState({group_name: val})} placeholder="Group Name" />
        <TouchableHighlight onPress={this.handleSubmit}>
          <Text>Create Group</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
