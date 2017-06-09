import React, {Component} from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import GroupIndexItem from './group_index_item';

class GroupIndex extends Component{
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.requestAllGroups();
  }

  render() {
    if (this.props.groups.length === 0) {
      return null;
    } else {
      return (
        <View>
          <ScrollView>
            {this.props.groups.map(group => <GroupIndexItem group={group} key={group.id}/>)}
          </ScrollView>
        </View>
      );
    }
  }
}

export default GroupIndex;
