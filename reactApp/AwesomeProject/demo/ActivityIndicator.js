import React, {Component} from 'react';

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
    console.log(Platform.OS);
    if (Platform.OS === 'android') {
      alert('安卓应用');
    } else if (Platform.OS === 'ios') {
      alert('ios应用');
    }
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator />
        <ActivityIndicator size="large" />
        <ActivityIndicator size="small" color="blue" />
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
