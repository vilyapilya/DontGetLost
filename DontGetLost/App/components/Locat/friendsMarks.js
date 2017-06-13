import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

class FriendsMarks extends Component {

  constructor(props) {
    super(props);
    this.markers = this.props.markers;
    this.members = this.props.members;
    console.log(this.markers);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.markers === nextProps.markers) {
      this.markers = nextProps.markers;
    }
  }

  render(){
    if (this.markers) {
      return (
        <View>
          {this.markers.map( (c, i) => (
            <MapView.Marker.Animated
              coordinate={c}
            >
            <View style={styles.marker}>
              <Text style={styles.text}>{this.members[i]}</Text>
            </View>
          </MapView.Marker.Animated>
          ))}
        </View>
      );

    }else {
      return null;
    }  
}
const styles = StyleSheet.create({
  marker: {
    backgroundColor: "#9d0eaf",
    padding: 5,
    borderRadius: 5,
  },
  text: {
    color: 'white',

  }
});
export default FriendsMarks;
