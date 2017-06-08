import React, {Component} from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';

class SignUp extends Component{
  constructor() {
    super(); {

      this.state = {
        name: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
        errors: []
      }
    }
  }

  async onRegisterPress() {
    // fetch( 'http://localhost:3000/api/users, {'
    try {
      let response = await fetch( 'https://localhost:3000/api/users', {
        method: 'POST',
        headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            name: this.state.name,
            // username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
          }
        })

      });

      let res = await response.text();
      if(response.status >= 200 && response.status < 300) {
        console.log("session_token: " + res)
      } else {
        let errors = res
        throw errors;
      }

    } catch(errors) {
      console.log(errors);
      let formErrors = JSON.parse(errors);
      let errorsArray = [];
      for(let key in formErrors) {
        if(formErrors[key].length > 1) {
          formErrors[key].map(error => errorsArray.push(`${key} ${error}`))
        } else {
          errorsArray.push(`${key} ${formErrors[key]}`)
        }
      }
      this.setState({errors: errorsArray})
    }
  }


  // <Text>{this.state.email}</Text>
  render() {
    return (
      <View style={{backgroundColor: 'pink', flex: 1}}>
        <Text>Apple Sucks</Text>
        <TextInput onChangeText={(val) => this.setState({name:val})} placeholder="Username" />
        <TextInput onChangeText={(val) => this.setState({password:val})} placeholder="Password" secureTextEntry={true}/>
        <TextInput onChangeText={(val) => this.setState({password_confirmation:val})} placeholder="Password Confirmation" secureTextEntry={true}/>
        <TextInput onChangeText={(val) => this.setState({email:val})} placeholder="Email" />
        <TouchableHighlight onPress={this.onRegisterPress.bind(this)}>
          <Text>Reg</Text>
        </TouchableHighlight>
        <Errors errors={this.state.errors} />
      </View>

    );

  }
}

const Errors = (props) => {
  return (
    <View>
    {props.errors.map((error, i) => <Text key={i}>{error}</Text>)}
    </View>
  );
}

export default SignUp;
