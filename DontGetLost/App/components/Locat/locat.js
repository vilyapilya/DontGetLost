import React, {Component} from 'react';
import { View, Text, TextInput, TouchableHighlight, AsyncStorage, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
const ACCESS_TOKEN = 'acccess_token';

class Locat extends Component{
  constructor() {
    super();
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    console.log("map");
    console.log(this.state.latitude);
    return (
      <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex :1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Locat;
