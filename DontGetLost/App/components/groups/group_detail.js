import React, {Component} from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Dimensions from 'Dimensions';

const fullHeight = Dimensions.get('window').height - 40;
const fullWidth = Dimensions.get('window').width - 120;

export default class GroupDetail extends Component {
  constructor() {
    super();
  }

  renderNames() {
    console.log(this.props.groupDetail.members);
    return (
      this.props.groupDetail.members.map( (member, i) =>
        <Text key={`member-${i}`}
        style={styles.buttonContainer}
        >{member}</Text>)
    );
  }

  render() {
    return (

      <View style={styles.namesContainer}>
        <TouchableHighlight
            underlayColor='#FFFFFF'
            activeOpacity={0.5}
            onPress={Actions.invitationForm}
            style={styles.altButton}
        >
          <Text style={styles.button}>
            Invite A Friend
          </Text>
        </TouchableHighlight>
        <View style={styles.border}>
          <Text style={{fontSize: 24, textAlign: 'center'}}>{this.props.groupDetail.group_name}</Text>
        </View>
        {this.renderNames()}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ADD8E6',
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    width: fullWidth,
    height: 60,
    margin: 10,
    borderRadius: 3,
    textAlign: 'center',
    textAlignVertical: "center"
  },
  namesContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    alignSelf: 'center',
    fontSize: 24,
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: fullWidth,
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
  button: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    margin: 1
  },
});
