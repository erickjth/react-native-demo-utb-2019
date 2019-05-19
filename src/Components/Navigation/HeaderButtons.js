import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HeaderButtons, HeaderButton } from 'react-navigation-header-buttons';
import { colors } from '../../Theme';

const MaterialHeaderButton = props => (
  <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color={colors.cerulean} />
);

export const MaterialHeaderButtons = props => {
	return (
		<HeaderButtons
			HeaderButtonComponent={MaterialHeaderButton}
			OverflowIcon={<Ionicons name="md-more" size={23} color={colors.cerulean} />}
			{...props}
		/>
	);
};

export const Item = HeaderButtons.Item;
