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
    console.log("hi");
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.title}>Name Your Group</Text>
        <TextInput
          style={{width: 200}}
          onChangeText={(val) => this.setState({group_name: val})}
          placeholder="Group Name" />
        <TouchableHighlight
          underlayColor='#FFFFFF'
          activeOpacity={0.5}
          style={styles.buttonContainer}
          onPress={this.handleSubmit}>
          <Text>Create Group!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

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
