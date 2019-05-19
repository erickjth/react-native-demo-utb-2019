import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '../Components/Common/Text';
import { colors } from '../Theme';

export default class SearchModalScreen extends Component {
	static navigationOptions = {
		title: 'Search',
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Search Content</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.acadia,
		justifyContent: 'center',
		alignItems: 'center',
	},

	text: {
		color: colors.cerulean,
		fontSize: 32,
	},
});
