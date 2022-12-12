import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  Button,
} from 'react-native';
import React, {Component} from 'react';

export default class textInput extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  doLogin = () => {
    console.log(this.state.input);
  };
  changeText = (text) => {
    this.setState({
      input: text,
    });
  };
  render() {
    return (
      <View style={[styles.container]}>
        <Text>demo</Text>
        <TextInput
          style={[styles.input]}
          placeholder="请输入"
          keyboardType="phone-pad"
          value={this.state.input}
          onChangeText={(text) => this.changeText(text)}
        />
        <View style={{backgroundColor: 'red'}}>
          <Button title="登录" onPress={this.doLogin} />
        </View>
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
  input: {
    width: Dimensions.get('window').width - 20,
    margin: 90,
    borderWidth: 1,
    borderColor: 'red',
    paddingHorizontal: 25,
  },
});
