import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ComicDetails from '../Components/ComicDetails';
import { colors } from '../Theme';

export default class DetailsScreen extends Component {
	static navigationOptions = {
		title: 'Comic details',
	};

	render() {
		const comic = this.props.navigation.getParam('comic', null);

		return (
			<View style={styles.container}>
				{comic ? <ComicDetails {...comic} /> : <Text>Invalid Comic</Text>}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.aliceblue,
	},
});
