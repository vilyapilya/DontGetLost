import React, {Component} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

class FriendsMarks extends Component {

  constructor(props) {
    super(props);
    this.markers = this.props.markers;
    this.members = this.props.members;
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.markers === nextProps.markers) {
      this.markers = nextProps.markers;
    }
  }

  onRegionChange(region) {

  }

  render(){
    if (this.props.markers) {
      // console.log(this.props.markers[0].latitude += 1);
      return (
        <View>
          {this.props.markers.map( (c, i) => (
            <MapView.Marker.Animated
              coordinate={c}
            >
            <View style={styles.marker}>
              <Text style={styles.text}>{this.props.members[i]}</Text>
            </View>
          </MapView.Marker.Animated>
          ))}
        </View>
      );

    }else {
      return null;
    }
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
    fontSize: 20,
  }
});
export default FriendsMarks;
