import React, { Component } from 'react';
import { Text } from 'react-native'; 
import firebase from 'firebase';

import { Button, Card, CardItem, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', text: '', error: '', loading: false };
  
  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFailure.bind(this));
      });
  }

  onLoginFailure() {
    this.setState({
      error: 'Authentication Failed',
      loading: false
    });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='large' />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
      Login
      </Button>
    );
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
          {this.renderButton()}
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
