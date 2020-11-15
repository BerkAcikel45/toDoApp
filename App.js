/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './src/navigation/rootNavigation';
import { Provider } from 'react-redux';
import store from './src/store';




const App: () => React$Node = () => {
  return (
    <>
      <Provider store = { store }>
        <NavigationContainer >
            <RootStackScreen/>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
