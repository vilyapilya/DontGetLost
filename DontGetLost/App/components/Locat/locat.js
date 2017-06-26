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
import FriendsMarks from './friendsMarks'

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
    // this.currentUserId = this.props.currentUser.id;
    this.onRegionChange = this.onRegionChange.bind(this);
    this.getRandomInt = this.getRandomInt.bind(this);
    this.friendsLatLng = this.friendsLatLng.bind(this);
    this.saveOwnPosition = this.saveOwnPosition.bind(this);
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
      },
      demoCoordinate: {
        latitude: LATITUDE,
        longitude: LONGITUDE+0.005,
        error: null
      }
    };
    this.currentUserId = 8;
    this.currentUser = {
        id: 8,
        image_url: null,
        username:  "person1",
        latitude: this.state.markCoordinate.latitude,
        longitude: this.state.markCoordinate.longitude
    };

    this.onRegionChange = this.onRegionChange.bind(this);
    // this.animate = this.animate.bind(this);
  }
  getRandomInt(min, max){
    var intMin = parseInt(min);
    var intMax = parseInt(max);
    return (Math.floor(Math.random() * (intMax-intMin)) + intMin);
  }

  updateMapPosition() {
    if(!this.state.markCoordinate || !this.state.mapCoordinate) {
      return 0;
    }

    let markLat = this.state.markCoordinate.latitude;
    let markLon = this.state.markCoordinate.longitude;
    let mapLat  = this.state.mapCoordinate.latitude;
    let mapLon  = this.state.mapCoordinate.longitude;
    let mapLatDelta = this.state.mapCoordinate.latitudeDelta;
    let mapLonDelta = this.state.mapCoordinate.longitudeDelta;
    let newMapLat = mapLat;
    let newMapLon = mapLon;
    let diffLat = markLat - mapLat;
    let diffLon = markLon - mapLon;

    if(Math.abs(diffLat) > (mapLatDelta/2)*0.5) {
      newMapLat = markLat;
    }

    if(Math.abs(diffLon) > (mapLonDelta/2)*0.5) {
      newMapLon = markLon;
    }

    this.setState({
      mapCoordinate: {
        latitude: newMapLat,
        longitude: newMapLon,
        latitudeDelta: mapLatDelta,
        longitudeDelta: mapLonDelta
      },
    });
  }

  componentDidMount() {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          markCoordinate: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null
          },
          demoCoordinate: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude+0.005,
            error: null
          }
        });

        this.updateMapPosition();
      },
      (error) => this.setState({markCoordinate: { error: error.message }}),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 }
    );

    this.props.requestSingleGroup(8);
    this.props.updateUser(this.currentUser);
    this.saveOwnPosition();
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  onRegionChange(region) {

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

  // animate(lat, lon){
  //   const { markAnimRegion } = this.state;
  //       markAnimRegion.timing({
  //         latitude: lat,
  //         longitude: lon,
  //       }
  //     ).start();
  // }

  friendsLatLng(){
    if(!this.props.groupDetail.members_lat){
      return null;
    }
    var markers = [];
    var lats = this.props.groupDetail.members_lat;
    // console.log(lats);
    var lons = this.props.groupDetail.members_long;
    for (var i = 0; i < lats.length; i++) {
      let coord = {latitude: lats[i],
                   longitude:  lons[i]};
      markers.push(coord);
    }
    return markers;
  }

  saveOwnPosition() {
    // var lat = this.state.markCoordinate.latitude;
    // var lon = this.state.markCoordinate.longitude;
    // var that = this;
    // this.ping = setInterval(saveInDB, 1000);
    // function saveInDB() {
    //   that.props.updateUser(that.currentUser);
    //   that.props.requestSingleGroup(8);
    // }
  }

  render() {
    var members = this.props.groupDetail.members;
    var lat = this.state.mapCoordinate.latitude;
    var lon = this.state.mapCoordinate.longitude;
    var ownMarkLat = this.state.markCoordinate.latitude;
    var ownMarkLon = this.state.markCoordinate.longitude;
    if (ownMarkLat && ownMarkLon){
      this.saveOwnPosition();
    }
    var markers = this.friendsLatLng();
    console.log(this.state.markCoordinate.longitude);
    console.log(this.state.demoCoordinate.longitude);
    return (
      <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: this.state.mapCoordinate.latitude,
            longitude: this.state.mapCoordinate.longitude,
            latitudeDelta: this.state.mapCoordinate.latitudeDelta,
            longitudeDelta: this.state.mapCoordinate.longitudeDelta
          }}
          onRegionChange={this.onRegionChange}
        >
        <MapView.Marker.Animated
          coordinate={this.state.markCoordinate}
        />
        <MapView.Marker.Animated
            coordinate={this.state.demoCoordinate}
        >
          <View style={styles.demoMarker}>
            <Text style={styles.text}>Mary</Text>
          </View>
        </MapView.Marker.Animated>
        <FriendsMarks markers={markers} members={members}></FriendsMarks>
      </MapView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    demoMarker: {
      backgroundColor: "#9d0eaf",
      padding: 5,
      borderRadius: 5,
    },
    text: {
      color: 'white',
      fontSize: 20,
    },

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

 });

export default Locat;
