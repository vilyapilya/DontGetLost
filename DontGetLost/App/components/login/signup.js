import React, {Component} from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';

class SignUp extends Component{
  constructor() {
    super(); {

      this.state = {
        username: "",
        password: ""
      }
    }
  }

  onRegisterPress() {
    const user = this.state;
    this.props.register(user);
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
        {this.errors()}
      </View>

    );

  }
}


export default SignUp;
