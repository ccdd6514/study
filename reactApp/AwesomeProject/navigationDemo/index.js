import {Text, StyleSheet, View, Button} from 'react-native';
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen(props) {
  function toNews() {
    console.log(props);
    props.navigation.navigate('News');
  }
  return (
    <View style={[styles.container]}>
      <Text>Home Screen</Text>
      <Button title="跳到新闻页面" onPress={() => toNews()}></Button>
    </View>
  );
}
function NewsScreen(props) {
  function toHome() {
    props.navigation.navigate('Home');
  }
  return (
    <View style={[styles.container]}>
      <Text>News Screen</Text>
      <Button title="跳到home页面" onPress={() => toHome()}></Button>
    </View>
  );
}

const Stack = createStackNavigator();

export default class index extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="News">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '首页'}}
        />
        <Stack.Screen name="News" component={NewsScreen} />
      </Stack.Navigator>
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
