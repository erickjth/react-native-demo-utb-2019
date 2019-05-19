import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const TabBarIcon = ({ name, focused, horizontal, tintColor }) => {
	const iconName = `${name}`;
	return (
		<Ionicons
			name={iconName}
			size={25}
			color={tintColor}
		/>
	)
};

export default createTabBarIcon = name => (props) => {
	return (
		<TabBarIcon name={name} {...props}/>
	);
}
