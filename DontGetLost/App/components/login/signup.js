import React, {Component} from 'react';
import { View, Text, TextInput, TouchableHighlight} from 'react-native';
import { Actions } from 'react-native-router-flux';

class SignUp extends Component{
  constructor() {
    super(); {

      this.state = {
        username: "",
        password: ""
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
      Action.signup();
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
      //Verified token means user is logged in so we redirect them home.
      // console.log('user still logged in');
      Actions.menu();
      //should be our actual home page
    } else {
      //Handle error
      const error = res;
      throw error;
    }
  } catch (error) {

  }
}

  onRegisterPress() {
    const user = this.state;
    this.props.register(user);
    setTimeout(this.getToken, 1000);
  }

  errors() {
    return (
      <View>
      {this.props.errors.map((error, i) => <Text key={i}>{error}</Text>)}
      </View>
    );
  }

  // <Text>{this.state.email}</Text>
  // <TextInput onChangeText={(val) => this.setState({password_confirmation:val})} placeholder="Password Confirmation" secureTextEntry={true}/>
  render() {
    return (
      <View style={{backgroundColor: 'pink', flex: 1}}>
        <Text>SignUp</Text>
        <TextInput onChangeText={(val) => this.setState({username:val})} placeholder="Username" />
        <TextInput onChangeText={(val) => this.setState({password:val})} placeholder="Password" secureTextEntry={true}/>
        <TouchableHighlight onPress={this.onRegisterPress.bind(this)}>
          <Text>Reg</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={Actions.login}>
          <Text>Already a User</Text>
        </TouchableHighlight>
        {this.errors()}
      </View>

    );

  }
}


export default SignUp;
