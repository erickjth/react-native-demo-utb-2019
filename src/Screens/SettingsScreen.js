import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '../Components/Common/Text';
import { colors } from '../Theme';

export default class Settings extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Settings',
			tabBarLabel: 'Settings',
			tabBarIcon: createTabBarIcon('md-settings'),
		};
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Settings</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.aliceblue,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 32,
	}
});
