import React, { Component } from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import ComicListItem from './ComicListItem';

export default class ComicList extends Component {

	renderItem = ({ item }) => {
		const { onTapItem } = this.props;

		// The container is needed to avoid overlapping error in the list
		return (
			<TouchableOpacity onPress={onTapItem.bind(null, item)} style={styles.flex}>
				<ComicListItem {...item} />
			</TouchableOpacity>
		);
	}

	render() {
		const { comics, onRefresh, isRefreshing, ...rest } = this.props;

		return (
			<FlatList
				data={comics}
				style={styles.flex}
				renderItem={this.renderItem}
				keyExtractor={(item) => item.id.toString()}
				onRefresh={onRefresh}
				refreshing={isRefreshing}
				initialNumToRender={3}
			/>
		);
	}
}


const styles = StyleSheet.create({
	flex: {
		flex: 1,
	},
});
