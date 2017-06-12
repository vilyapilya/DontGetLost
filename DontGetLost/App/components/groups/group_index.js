import React, {Component} from 'react';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, TouchableHighlight } from 'react-native';
import GroupIndexItem from './group_index_item';
import { Actions } from 'react-native-router-flux';

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
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.title}>Groups!</Text>
            <TouchableHighlight
                underlayColor='#FFFFFF'
                activeOpacity={0.5}
                onPress={Actions.groupForm}
                style={styles.altButton}
            >
              <Text style={styles.button}>
                Create a Group!
              </Text>
            </TouchableHighlight>

            {this.props.groups.map(group =>
              <GroupIndexItem
               style={styles.button}
               group={group}
               requestSingleGroup={this.props.requestSingleGroup}
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
  },
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
  altButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d3a3e4',
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

export default GroupIndex;
