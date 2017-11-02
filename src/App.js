import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount(){
    const config = {
      apiKey: "AIzaSyAHx6u6MCry1OrwLOEQ0zO6nYoSqEbCc3M",
      authDomain: "shift-manager-e83a8.firebaseapp.com",
      databaseURL: "https://shift-manager-e83a8.firebaseio.com",
      projectId: "shift-manager-e83a8",
      storageBucket: "shift-manager-e83a8.appspot.com",
      messagingSenderId: "1008010699288"
    };
    firebase.initializeApp(config);
  }
  render() {    
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello !
          </Text>
        </View>
      </Provider>
    )
  }
}

export default App;