import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  StackNavigator,
  TabNavigator,
  TabBarBottom
} from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ModalScreen from './src/screens/ModalScreen';
import TabNavigatorScreen from './src/screens/TabNavigatorScreen';

const MainStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
)

const RootStack = StackNavigator(
  {
    Main: {
      screen: MainStack
    },
    Modal: {
      screen: ModalScreen
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

const RootTab = TabNavigator({
  Home: { screen: RootStack },
  Settings: { screen: TabNavigatorScreen }
})

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
