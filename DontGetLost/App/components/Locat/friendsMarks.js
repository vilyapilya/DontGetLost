import React, {Component} from 'react';
import { View } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

class FriendsMarks extends Component {

  constructor(props) {
    super(props);
    this.markers = this.props.markers;
    console.log(this.markers);
  }

  render(){
    console.log(this.markers);
    return (
      <View>
        {this.markers.map(c => (
            <MapView.Marker.Animated
              coordinate={c}
              pinColor='#9d0eaf'
            />
        ))}
      </View>
      );
  }
}
export default FriendsMarks;
