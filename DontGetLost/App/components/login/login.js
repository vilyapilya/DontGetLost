import React, {Component} from 'react';
import { View, Text, TextInput, TouchableHighlight, AsyncStorage } from 'react-native';

const ACCESS_TOKEN = 'acccess_token';

class Login extends Component{
  constructor() {
    super(); {

      this.state = {
        // username: "",
        email: "",
        password: "",
        error: ""
      }
    }
  }

  async getToken() {
    try {
      let token = await AsyncStorage.getItem(ACCESS_TOKEN);
      console.log("token: " + token)
    } catch(error) {
      console.log("oh no")
    }
  }

  async storeToken(accessToken) {
    try {
      await AsyncStorage.setItem(ACCESS_TOKEN, accessToken);
      this.getToken();
    } catch(error) {
      console.log(error)
    }
  }

  async onLoginPress() {
    // fetch( 'http://localhost:3000/api/users, {'
    try {
      let response = await fetch( 'https://afternoon-beyond-22141.herokuapp.com/api/login', {
        method: 'POST',
        headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          session: {
            email: this.state.email,
            password: this.state.password
          }
        })

      });

      let res = await response.text();
      if(response.status >= 200 && response.status < 300) {
        console.log("session: " + res)
        this.setState({error: ""})
        let accessToken = res
        this.storeToken(accessToken);

      } else {
        let error = res
        throw error;
      }

    } catch(error) {
      console.log(error);
      this.setState({error: error})
    }
  }


  // <Text>{this.state.email}</Text>
  render() {
    return (
      <View style={{backgroundColor: 'pink', flex: 1}}>
        <Text>sLogin</Text>
        <TextInput onChangeText={(val) => this.setState({email:val})} placeholder="Username" />
        <TextInput onChangeText={(val) => this.setState({password:val})} placeholder="Password" secureTextEntry={true}/>
        <TouchableHighlight onPress={this.onLoginPress.bind(this)}>
          <Text>Reg</Text>
        </TouchableHighlight>
        <Text>{this.state.error} </Text>
      </View>

    );

  }
}

export default Login;
