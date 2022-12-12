import React, {Component} from 'react';

import {StyleSheet, View, Text, StatusBar, Switch, Button} from 'react-native';

export default class switchDemo extends Component {
  constructor() {
    super();

    this.state = {
      hideStatusBar: true,
    };

    this.onPressLearnMore = this.onPressLearnMore.bind(this);
    this.toggleStatusBar = this.toggleStatusBar.bind(this);
  }

  toggleStatusBar = () => {
    this.setState({
      hideStatusBar: !this.state.hideStatusBar,
    });
  };

  test = () => {
    console.log(2323);
  };

  onPressLearnMore = () => {
    console.log(2323);
  };

  render() {
    return (
      <View style={[styles.container]} onClick={this.test}>
        <Text>demo12 this.test1.bind()</Text>
        <StatusBar
          hidden={this.state.hideStatusBar}
          backgroundColor="red"
          barStyle={'dark-content'}></StatusBar>
        <Button
          onPress={this.onPressLearnMore}
          title="Learn More"
          color="#841584"
        />
        <Switch
          trackColor={{false: 'red', true: 'green'}}
          thumbColor={'blue'}
          value={this.state.hideStatusBar}
          onValueChange={this.toggleStatusBar}></Switch>
      </View>
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
