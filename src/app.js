// Import Libraries - Absolute Imports
import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';

// Import Components -  Relative Imports
import { Header, Card, Button, CardItem, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedin: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAcDtsDSc6spR66-i8Lzmeaq4BMNW9ZMgY',
      authDomain: 'auth-50f12.firebaseapp.com',
      databaseURL: 'https://auth-50f12.firebaseio.com',
      projectId: 'auth-50f12',
      storageBucket: 'auth-50f12.appspot.com',
      messagingSenderId: '459521145269'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedin: true });
      } else {
        this.setState({ loggedin: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedin) {
      case true:
        return (
          <Card>
            <CardItem>
              <Text>You are now logged in</Text>
            </CardItem>
            <CardItem>
              <Button onPress={() => firebase.auth().signOut()}>Logout</Button>
            </CardItem>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
            <Spinner />
          </View>
      );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authenticator" />
         {this.renderContent()}
      </View>
    );
  };
}

export default App;
