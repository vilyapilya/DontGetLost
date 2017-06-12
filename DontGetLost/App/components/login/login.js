import React, {Component} from 'react';
import { View, Text, TextInput, TouchableHighlight, AsyncStorage } from 'react-native';

import { Scene, Router, Actions } from 'react-native-router-flux';

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
        let response = await fetch('http://10.0.2.2:3000/api/verify?session%5Bsession_token%5D=' + sessionToken);
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
      {this.props.errors.map((error, i) => <Text key={i}>{error}</Text>)}
      </View>
    );
  }

  render() {
    return (
      <View style={{backgroundColor: 'pink', flex: 1}}>
        <Text>Login</Text>
        <TextInput onChangeText={(val) => this.setState({username:val})} placeholder="Username" />
        <TextInput onChangeText={(val) => this.setState({password:val})} placeholder="Password" secureTextEntry={true}/>
        <TouchableHighlight onPress={this.onLoginPress.bind(this)}>
          <Text>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={Actions.signup}>
          <Text>New User</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={Actions.locat}>
          <Text>Go to map when loggedin</Text>
        </TouchableHighlight>
        {this.errors()}
      </View>

    );

  }
}

export default Login;
