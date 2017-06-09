import React, {Component} from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

class GroupIndex extends Component{
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.requestAllPosts();
  }

  render() {
    if (this.props.groups.length === 0) {
      return null;
    } else {
      return (
        <View>
          <ScrollView>
            
          </ScrollView>
        </View>
      );
    }
  }
}

export default GroupIndex;
