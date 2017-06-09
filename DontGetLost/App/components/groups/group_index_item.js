import {Actions, Scene} from 'react-native-router-flux';
import React, {Component} from 'react';
import { View, Button } from 'react-native';

export default class GroupIndexItem extends Component {
  render() {
    return (
      <View>
        <Button
          onPress={Actions.Group`${this.props.group.id}`}
          title={this.props.group.group_name}
          color="#841584"
        >
        </Button>
      </View>
    );
  }
}
