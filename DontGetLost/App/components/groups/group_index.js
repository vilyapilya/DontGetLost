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
        <View style={styles.scrollContainer}>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text>Groups!</Text>
            {this.props.groups.map(group => <GroupIndexItem style={styles.button} group={group} key={group.id}/>)}
          </ScrollView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#74B530',
    width: 200,
  },
  contentContainer: {
    backgroundColor: '#E1D7D8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    flexDirection: 'column',
  },
  scrollContainer: {
    flex:1
  }

});

export default GroupIndex;
