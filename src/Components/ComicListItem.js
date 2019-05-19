import React, { PureComponent } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import get from 'lodash/get';
import Text from './Common/Text';
import { colors } from '../Theme';

export default class ComicListItem extends PureComponent {

	render() {
		const { title, images, format  } = this.props;

		const imagePath = get(images, '[0].path', null);
		const imageExtension = get(images, '[0].extension', null);
		const imageSource = imagePath ?
			`${imagePath}/standard_xlarge.${imageExtension}` :
			'https://dummyimage.com/60x60/c7c7c7/242324&text=No+cover';

		return (
			<View style={styles.container}>
				<View style={styles.imageContainer}>
					<Image
						style={styles.image}
						source={{ uri: imageSource }}
					/>
				</View>
				<View style={styles.content}>
					<Text
						style={styles.title}
						numberOfLines={2}
					>{title}
					</Text>
					<Text
						style={styles.format}
						variant='caption'
						numberOfLines={1}
					>{format}
					</Text>
				</View>
				<View style={styles.actions}>
					<Ionicons
						name='ios-arrow-forward'
						size={16}
						color={colors.scorpion}
					/>
				</View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		flexDirection: 'row',
		paddingHorizontal: 8,
		paddingVertical: 16,
		marginVertical: 3,
		borderBottomWidth: 1,
		borderColor: colors.pearlbush,
	},

	imageContainer: {
		width: 51,
		height: 51,
	},

	image: {
		width: 51,
		height: 51,
		resizeMode: 'contain',
	},

	content: {
		flex: 1,
		marginLeft: 8,
	},

	format: {
		marginTop: 5,
	},

	actions: {
		marginRight: 8,
		marginLeft: 12,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
