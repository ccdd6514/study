import {Text, StyleSheet, View, Button} from 'react-native';
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
const Tab = createBottomTabNavigator();

function HomeScreen(props) {
  function toNews() {
    console.log(props);
    props.navigation.navigate('News');
  }
  return (
    <View style={[styles.container]}>
      <Text>Home Screen</Text>
      {/* <Button title="跳到新闻页面" onPress={() => toNews()}></Button> */}
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
      {/* <Button title="跳到home页面" onPress={() => toHome()}></Button> */}
    </View>
  );
}

export default class bottomTab extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = '首页';
            } else if (route.name === 'News') {
              iconName = '新闻';
            }
            return (
              <Ionicons name={'alarm'} size={size} color={color}></Ionicons>
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="News" component={NewsScreen}></Tab.Screen>
      </Tab.Navigator>
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
