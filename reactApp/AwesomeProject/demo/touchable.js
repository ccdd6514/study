import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {Component} from 'react';

export default class touchable extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <TouchableHighlight
          onPress={() => console.log('高亮显示')}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          style={[styles.marginSty]}>
          <View style={[styles.button]}>
            <Text>高亮显示</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={() => console.log('触碰透明度')}>
          <View style={[styles.item]}>
            <Text>触碰透明度1</Text>
          </View>
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={() => console.log('触碰透明度')}>
          <View style={styles.button}>
            <Text>Touch Here</Text>
          </View>
        </TouchableWithoutFeedback>
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
  item: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'red',
    marginVertical: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderWidth: 1,
    borderColor: 'red',
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },
  marginSty: {
    marginVertical: 50,
  },
});
