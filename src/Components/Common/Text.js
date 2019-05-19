import React from 'react';
import { StyleSheet, Text } from 'react-native';
import get from 'lodash/get';
import { fonts, colors } from '../../Theme';

const StyledText = ({ style, variant, ...rest }) => {
	const variantStyle = get(variants, variant, 'regular');

	return (
		<Text
			style={[styles.text, variantStyle, style]}
			{...rest}
		/>
	);
};

export default StyledText;

const variants = {
	regular: {
		fontFamily: fonts.Raleway.regular,
		fontSize: 16,
	},
	title: {
		color: colors.acadia,
		fontFamily: fonts.Raleway.bold,
		fontSize: 28,
	},
	subtitle: {
		color: colors.acadia,
		fontFamily: fonts.Raleway.bold,
		fontSize: 20,
	},
	caption: {
		fontFamily: fonts.Raleway.light,
		fontSize: 12,
	}
}

const styles = StyleSheet.create({
	text: {
		color: colors.scorpion,
	},
});
