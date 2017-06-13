import React, {Component} from 'react';
import { View, Text, TextInput, TouchableHighlight, AsyncStorage, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';


import Dimensions from 'Dimensions';

const fullHeight = Dimensions.get('window').height - 40;
const fullWidth = Dimensions.get('window').width - 120;

const ACCESS_TOKEN = 'acccess_token';

class Login extends Component{
  constructor() {
    super(); {

      this.state = {
        username: "",
        password: "",
      }
      this.getToken = this.getToken.bind(this);
      this.verifyToken = this.verifyToken.bind(this);
    }
  }

    componentWillMount() {
      this.getToken();
    }

    async getToken() {
      try {
        let sessionToken = await AsyncStorage.getItem('sessionToken');
        if (!sessionToken) {
          Actions.login();
        } else {
          this.verifyToken(sessionToken)
        }
      } catch (error) {
        // console.log("Error finding token");
      }
    }

    async verifyToken(token) {
      const sessionToken = token;
      try {
        let response = await fetch('https://dontgetlost.herokuapp.com//api/verify?session%5Bsession_token%5D=' + sessionToken);
        let res = await response.text();
        if (response.status >= 200 && response.status < 300) {
          Actions.menu();
        } else {
          //Handle error
          const error = res;
          throw error;
        }
      } catch (error) {

      }
    }


  onLoginPress() {
    const user = this.state;
    this.props.login(user);
    setTimeout(this.getToken, 1100);
  }

  errors() {
    return (

      <View>
      {this.props.errors.map((error, i) => <Text style={styles.errors} key={i}>{error}</Text>)}
      </View>
    );
  }

  render() {
    return (
      <View style={{flex: 1, marginTop: 50}}>
        <Text style={styles.title}>Login</Text>
        <TextInput style={styles.input} onChangeText={(val) => this.setState({username:val})} placeholder="Username" />
        <TextInput style={styles.input} onChangeText={(val) => this.setState({password:val})} placeholder="Password" secureTextEntry={true}/>
        {this.errors()}
        <View style={styles.footer}>
        <TouchableHighlight
          underlayColor='#FFFFFF'
          activeOpacity={0.5}
          style={styles.buttonContainer}
          onPress={this.onLoginPress.bind(this)}>
          <Text style={styles.button}>Sign In</Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor='#FFFFFF'
          activeOpacity={0.5}
          style={styles.altButton}
          onPress={Actions.signup}>
          <Text style={styles.button}>New User?</Text>
        </TouchableHighlight>

        </View>

      </View>

    );

  }
}

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontSize: 24,
    margin: 25,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ADD8E6',
    width: fullWidth,
    height: 60,
    margin: 20,
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
    backgroundColor: '#A3A3A3',
    width: fullWidth,
    height: 60,
    marginTop: 10,
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
  input: {
    fontSize: 20
  },
  footer: {
    marginTop: 75,
    alignItems: 'center',
    justifyContent: 'center'
  },
  errors: {
    color: 'red',
    fontSize: 16
  }
});

export default Login;
