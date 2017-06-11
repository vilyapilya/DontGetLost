import {Actions, Scene} from 'react-native-router-flux';
import React, {Component} from 'react';
import { View, Button, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class GroupIndexItem extends Component {

  render() {
    return (
    <View style={styles.row}>
      <TouchableHighlight
          underlayColor='#FFFFFF'
          activeOpacity={0.5}
          onPress={() => console.log("hi")}
          style={styles.buttonContainer}
      >
        <Text style={styles.button}>
          {this.props.group.group_name}
        </Text>
      </TouchableHighlight>
    </View>
    );
  }
}

//onPress={Actions.Group`${this.props.group.id}`}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#74B530',
    width: 250,
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
  altContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#74B530',
    width: 60,
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
  deleteButton: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    width: 50,
  }
});
