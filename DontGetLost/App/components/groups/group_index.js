import React, {Component} from 'react';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
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
      return (
      <View style={styles.activityContainer}>
        <ActivityIndicator
                alignSelf={'center'}
                justifyContent={'center'}
                size={'large'} />
      </View>
      );
    } else {
      return (
        <View style={styles.scrollContainer}>
          <Text style={styles.title}>Groups!</Text>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            {this.props.groups.map(group =>
              <GroupIndexItem
               style={styles.button}
               group={group}
               currentUser={this.props.currentUser}
               key={group.id}/>)}
          </ScrollView>
        </View>
      );
    }
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
    padding: 20,
    backgroundColor: '#74B530',
    // width: 250,
  },
  contentContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    flexDirection: 'column',
    // width: 250,
  },
  activityContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  scrollContainer: {
    height: 500
  }


});

export default GroupIndex;
