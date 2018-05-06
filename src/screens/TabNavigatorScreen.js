import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import {
  View,
  Text
} from 'react-native';

class TabNavigatorScreen extends Component {
  render() {
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>TabNavigator</Text>
      </View>
    );
  }
}

export default TabNavigatorScreen;