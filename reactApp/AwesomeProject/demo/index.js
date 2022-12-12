import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div>index</div>
    )
  }
}


import React from 'react';
import {StyleSheet, View, Text, StatusBar, Switch} from 'react-native';

export default class Switch extends Component {
  render() {
    return (
      <>
        <View style={[styles.container]}>
          <Text>demo</Text>
          <StatusBar
            hidden={false}
            backgroundColor="red"
            barStyle={'dark-content'}></StatusBar>
          <Switch
            trackColor={{false: 'red', true: 'green'}}
            thumbColor={'blue'}></Switch>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
