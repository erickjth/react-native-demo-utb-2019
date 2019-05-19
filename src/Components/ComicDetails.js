import React, { PureComponent } from 'react';
import { StyleSheet, Image, ScrollView, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import get from 'lodash/get';
import { colors } from '../Theme';
import Text from './Common/Text';

export default class ComicListItem extends PureComponent {

	render() {
		const {
			title,
			variantDescription,
			creators,
			format,
			images,
		} = this.props;

		const imagePath = get(images, '[0].path', null);
		const imageExtension = get(images, '[0].extension', null);
		const imageSource = imagePath ?
			`${imagePath}/standard_xlarge.${imageExtension}` :
			'https://dummyimage.com/300x300/c7c7c7/242324&text=No+cover';

		return (
			<ScrollView style={styles.wrapper} contentContainerStyle={styles.container}>
				<View>
					<Image
						style={styles.image}
						source={{ uri: imageSource }}
					/>
					<View style={styles.content}>
						<Text variant='title' numberOfLines={3}>{title}</Text>

						<View style={styles.itemInfo}>
							<Text variant='caption'>Format</Text>
							<Text>{format}</Text>
						</View>

						<View style={styles.itemInfo}>
							<Text variant='caption'>Variant Description</Text>
							<Text>{variantDescription || 'No Description'}</Text>
						</View>

						{creators.available > 0 ?
							<View style={styles.itemInfo}>
								<Text variant='caption'>Creators</Text>
								{creators.items.map((creator, idx) => (
									<View key={idx} style={styles.creatorItem}>
										<Ionicons
											name='ios-person'
											size={12}
											color={colors.scorpion}
										/>
										<Text style={styles.creatorName}>{`${creator.name} (${creator.role})`}</Text>
									</View>
								))}
							</View>
						: null}
					</View>
				</View>
			</ScrollView>
		);
	}
}


const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},

	container: {
		backgroundColor: colors.white,
		paddingBottom: 20,
	},

	imageContainer: {
		flex: 1,
	},

	image: {
		width: null,
		height: 300,
		resizeMode: 'cover',
	},

	content: {
		flex: 1,
		paddingHorizontal: 8,
		marginTop: 16,
	},

	itemInfo: {
		marginTop: 16,
	},

	creatorItem: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 2,
		marginLeft: 3,
	},

	creatorName: {
		marginLeft: 5,
	}
});
