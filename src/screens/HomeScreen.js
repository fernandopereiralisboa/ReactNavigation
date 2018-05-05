import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
	View,
	Text,
	Button,
	Image
} from 'react-native';

class Logo extends Component {
	render() {
		return(
			<Image
				source={require('../../res/UNIVESP-LOGO.png')}
				style={{ width: 300, height: 100 }}
			/>
		);
	}
}

class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Home',
		headerRight: (
			<Button
				onPress={() => alert('Button header')}
				title="Info"
			/>
		)
	};

	render() {
		return(
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Logo />
				<Text>Home Screen</Text>
				<Button
					title="Go to Details"
					onPress={
						() => this.props.navigation.navigate('Details', {
							itemId: 100,
							name: 'Params from Home'
						})
					}
				/>
			</View>
		);
	}
}

export default HomeScreen;