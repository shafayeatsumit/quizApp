import React, { Componenet } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

Class App extends Componenet {
  render() {
    return (
      <Provider store={createStore()}>
        <View>
          <Text>
            Hello !
          </Text>
        </View>
      </Provider>
    )
  }
}