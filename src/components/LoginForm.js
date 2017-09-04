import React, { Component } from 'react';
 import { View, TextInput } from 'react-native'; 

import { Button, Card, CardItem, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', text: '' };
  
  render() {
    return (
      <Card>
        <CardItem>
          <Input 
            label='Email'
            placeholder='Email'
            value={this.state.email}
            secureTextEntry={false}
            onChangeText={email => this.setState({ email })} 
          />
        </CardItem>
       
        <CardItem>
          <Input 
            label='Password'
            placeholder='Password'
            value={this.state.password}
            secureTextEntry
            onChangeText={password => this.setState({ password })}
          />
        </CardItem>

        <CardItem>
          <Button onPress={this.onButtonPress.bind(this)>
            Login
          </Button>
        </CardItem>
      </Card>
    );
  }
}

export default LoginForm;
