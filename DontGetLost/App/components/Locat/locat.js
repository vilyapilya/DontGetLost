import React, {Component} from 'react';
import { View, Text, TextInput, TouchableHighlight, AsyncStorage } from 'react-native';

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
      <View>
        <Text> MapIshere </Text>
      </View>
    );

  }
}

export default Locat;
