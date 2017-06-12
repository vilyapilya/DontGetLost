import React, {Component} from 'react';
import { View,
  Text,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
const ACCESS_TOKEN = 'acccess_token';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


class Locat extends Component{
  constructor(props) {
    super(props);
    this.onRegionChange = this.onRegionChange.bind(this);
    this.getRandomInt = this.getRandomInt.bind(this);
    // this.state = {
    //   latitude: null,
    //   longitude: null,
    //   latitudeDelta: 0.015,
    //   longitudeDelta: 0.015
    // };
    this.state = {
      mapCoordinate: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      markCoordinate: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        error: null
      }
    };
    this.onRegionChange = this.onRegionChange.bind(this);
    this.animate = this.animate.bind(this);
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
          mapCoordinate: {
            latitude: position.coords.latitude,
            longitude: position.coords.latitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          },
          markCoordinate: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null
          }
        });
      },
      (error) => this.setState({markCoordinate: { error: error.message }}),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );

  }


  componentWillUnmount() {
    console.log("clear");
    navigator.geolocation.clearWatch(this.watchId);
      console.log("clear");
  }

  onRegionChange(mapCoordinate) {
    console.log("ch");
    console.log(mapCoordinate);
    this.setState({
      markCoordinate: {
        latitude: mapCoordinate.latitude,
        longitude: mapCoordinate.longitude,
        error: null
      }
    });
  }
  getInitialState() {
    return {
      mapCoordinate: new MapView.AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        error: null
      }),
    };
  }
  // animate() {
  //   const { coordinate } = this.state;
  //   this.setState({coordinate :{
  //     latitude: LATITUDE + ((Math.random() - 0.5) * (LATITUDE_DELTA / 2)),
  //     longitude: LONGITUDE + ((Math.random() - 0.5) * (LONGITUDE_DELTA / 2)),
  //   }});
  // }

  animate(){

  }


  render() {
    console.log("aaa");
    console.log(this.state.markCoordinate.latitude);
    console.log(this.state.mapCoordinate.latitude);
    let lat = this.state.mapCoordinate.latitude;
    let lon = this.state.mapCoordinate.longitude;
    return (
      <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: this.state.mapCoordinate.latitude,
            longitude: this.state.mapCoordinate.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }}
          onRegionChange={this.onRegionChange}
        >
        <MapView.Marker.Animated
          coordinate={this.state.markCoordinate}
        />
        </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={this.animate}
            style={[styles.bubble, styles.button]}
          >
            <Text>Animate</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// Locat.propTypes = {
//   provider: MapView.ProviderPropType,
// };

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
   bubble: {
     flex: 1,
     backgroundColor: 'rgba(255,255,255,0.7)',
     paddingHorizontal: 18,
     paddingVertical: 12,
     borderRadius: 20,
   },
   latlng: {
     width: 200,
     alignItems: 'stretch',
   },
   button: {
     width: 80,
     paddingHorizontal: 12,
     alignItems: 'center',
     marginHorizontal: 10,
   },
   buttonContainer: {
     flexDirection: 'row',
     marginVertical: 20,
     backgroundColor: 'transparent',
   },
 });

export default Locat;
