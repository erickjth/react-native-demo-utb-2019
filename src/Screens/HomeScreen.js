import React, { Component } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { MaterialHeaderButtons, Item } from '../Components/Navigation/HeaderButtons';
import createTabBarIcon from '../Components/Navigation/TabBarIcon';
import ComicList from '../Components/ComicList';
import Text from '../Components/Common/Text';
import ApiService from '../Services/Api';
import { colors } from '../Theme';

export default class HomeScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Feed',
			tabBarLabel: 'Home',
			tabBarIcon: createTabBarIcon('md-home'),
			headerLeft: (
				<MaterialHeaderButtons left>
				  <Item title="search" iconName="md-search" onPress={() => navigation.navigate('Search')} />
				</MaterialHeaderButtons>
			),
			headerRight: (
				<MaterialHeaderButtons>
				  <Item title="add" iconName="md-add-circle-outline" onPress={() => Alert.alert('Add', 'Cool, create a new entry')} />
				</MaterialHeaderButtons>
			)
		};
	};

	state = {
		error: false,
		isLoading: false,
		data: []
	};

	componentDidMount() {
		this.loadComics();
	}

	async loadComics () {
		try {
			this.setState({ isLoading: true });
			const response = await ApiService.getComics();
			this.setState({ isLoading: false, data: response.data.results, error: false, });
		} catch (error) {
			this.setState({ isLoading: false, error: true, });
		}
	}

	/**
	 * Handler when tapping on an item in the list
	 */
	handleTapItem = (comic) => {
		this.props.navigation.push('Details', { comic });
	}


	/**
	 * Refresh list handler
	 */
	handleRefresh = () => {
		this.loadComics();
	}

	render() {
		const { isLoading, error, data } = this.state;

		return (
			<View style={styles.container}>
				{error && <Text style={styles.error}>Oops, Something went wrong!</Text>}
				<ComicList
					comics={data}
					isRefreshing={isLoading}
					onRefresh={this.handleRefresh}
					onTapItem={this.handleTapItem}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.aliceblue,
	},
	error: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: 'red',
	},
});
