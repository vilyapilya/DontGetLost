import React, {Component} from 'react';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, TouchableHighlight } from 'react-native';
import GroupIndexItem from './group_index_item';
import { Actions } from 'react-native-router-flux';

import Dimensions from 'Dimensions';

const fullHeight = Dimensions.get('window').height - 40;
const fullWidth = Dimensions.get('window').width - 120;



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
            <View style={styles.border}>
              <Text style={styles.title}>Groups!</Text>
            </View>
            <TouchableHighlight
                underlayColor='#d3a3e4'
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
    // width: fullWidth,
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
    width: fullWidth,
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
    width: fullWidth,
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
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: fullWidth,
    alignItems: 'center'
  },
});

export default GroupIndex;
