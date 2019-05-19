
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Separator = ({ style, ...rest }) => (
	<View {...rest} style={[styles.separator, style]} />
);

const styles = StyleSheet.create({
	separator: {
		height: StyleSheet.hairlineWidth,
		backgroundColor: 'rgba(0, 0, 0, 0.12)',
	},
});

export default Separator;
