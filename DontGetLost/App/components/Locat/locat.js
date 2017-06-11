import React, {Component} from 'react';
import { View, Text, TextInput, TouchableHighlight, AsyncStorage, StyleSheet } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
const ACCESS_TOKEN = 'acccess_token';

class Locat extends Component{
  constructor(props) {
    super(props);
    this.onRegionChange = this.onRegionChange.bind(this);
    this.getRandomInt = this.getRandomInt.bind(this);
    this.state = {
      latitude: null,
      longitude: null,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121
    };
  }
  getRandomInt(min, max){
    var intMin = parseInt(min);
    var intMax = parseInt(max);
    return (Math.floor(Math.random() * (intMax-intMin)) + intMin);
  }

  componentDidMount() {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        console.log("watching");
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  onRegionChange(region) {
    this.setState({ region });
  }
  getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }


  render() {
    console.log("aaa");
    console.log(this.state.latitude);
    let lat = this.state.latitude;
    let lon = this.state.longitude;
    return (
      <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: lat,
            longitude: lon,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          onRegionChange={this.onRegionChange}
        >
        <MapView.Marker
          coordinate={{
            latitude: lat,
            longitude: lon,
          }} />
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
      flex :1,
   },
 });

export default Locat;
