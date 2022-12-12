import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar, Alert, Button} from 'react-native';

export default class alert extends Component {
  onPressLearnMore = () => {
    console.log(2323);
  };

  render() {
    return (
      <View style={[styles.container]}>
        <Text>demo12 this.test1.bind</Text>
        <Button
          title="Learn More"
          onPress={() => {
            Alert.alert('test');
          }}></Button>
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
