import React, { Component } from 'react';
import { Text } from 'react-native'; 
import firebase from 'firebase';

import { Button, Card, CardItem, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', text: '', error: '' };
  
  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '' });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication Failed!' });
          });
      });
  }

  render() {
    return (
      <Card>
        <Text style={styles.errorStyle}>
          {this.state.error}
        </Text>

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
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardItem>
      </Card>
    );
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
