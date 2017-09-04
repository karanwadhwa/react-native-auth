// Import Libraries - Absolute Imports
import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';

// Import Components -  Relative Imports
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAcDtsDSc6spR66-i8Lzmeaq4BMNW9ZMgY',
      authDomain: 'auth-50f12.firebaseapp.com',
      databaseURL: 'https://auth-50f12.firebaseio.com',
      projectId: 'auth-50f12',
      storageBucket: 'auth-50f12.appspot.com',
      messagingSenderId: '459521145269'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authenticator" />
         {/* <Text>Authenticator</Text> */}
         <LoginForm />
      </View>
    );
  }
}

export default App;
