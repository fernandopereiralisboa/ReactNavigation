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
	static navigationOptions = ({ navigation }) => {
		const params = navigation.state.params || {};

		return {
			headerLeft: (
				<Button
					onPress={() => navigation.navigate('Modal')}
					title="Modal"
				/>
			),
			title: 'Home',
			headerRight: (
				<Button
					onPress={params.increaseCount}
					title="+1"
				/>
			)
		}		
	};

	componentWillMount() {
		this.props.navigation.setParams({ increaseCount: this._increaseCount });
	}

	state = {
		count: 0
	};

	_increaseCount = () => {
		this.setState({ count: this.state.count + 1 });
	};

	render() {
		return(
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Logo />
				<Text>Home Screen</Text>
				<Text>{this.state.count}</Text>
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