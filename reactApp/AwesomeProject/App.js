import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
// import Index from './demo/touchable';
import Index from './navigationDemo/bottomTab';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  Platform,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Index></Index>
      </NavigationContainer>
    );
  }
}
