import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import AppNavigator from './AppNavigator'

export default class App extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<StatusBar barStyle="light-content" />
				<AppNavigator />
			</View>
		);
	}
}
