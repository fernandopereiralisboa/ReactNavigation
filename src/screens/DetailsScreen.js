import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

class DetailsScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.name : 'Details',
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor
    };
  };

  render() {
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const name = params ? params.name : null;

    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>intemId: {JSON.stringify(itemId)}</Text>
        <Text>name: {JSON.stringify(name)}</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({ name: "Params from Details"})}
        />
      </View>
    );
  }
}

export default DetailsScreen;