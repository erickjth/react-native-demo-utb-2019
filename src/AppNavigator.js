import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, getActiveChildNavigationOptions } from "react-navigation";
import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/SettingsScreen';
import DetailsScreen from './Screens/DetailsScreen';
import SearchModalScreen from './Screens/SearchModalScreen';
import { fonts, colors } from './Theme';

const defaultNavigationOptions = {
	headerStyle: {
		backgroundColor: colors.acadia,
	},
	headerTitleStyle: {
		fontFamily: fonts.Raleway.regular,
	},
	headerTintColor: colors.cerulean
};

const tabScreenTabSettings = {
	navigationOptions: ({ navigation, screenProps }) => ({
		...getActiveChildNavigationOptions(navigation, screenProps),
	}),
	defaultNavigationOptions
};

const HomeStack = createStackNavigator({ HomeScreen }, tabScreenTabSettings);
const SettingsStack = createStackNavigator({ SettingsScreen }, tabScreenTabSettings);

const HomeTabStack = createBottomTabNavigator({
	Home: HomeStack,
	Settings: SettingsStack,
}, {
	navigationOptions: {
		header: null
	},
	tabBarOptions: {
		activeTintColor: colors.cerulean,
		inactiveTintColor: colors.acadia,
		labelStyle: {
			fontFamily: fonts.Raleway.regular,
		}
	},
});

const MainStack = createStackNavigator({
	Tabs: { screen: HomeTabStack },
	Details: { screen: DetailsScreen },
}, {
	defaultNavigationOptions,
	headerBackTitleVisible: false,
});

const RootStack = createStackNavigator(
	{
		Main: { screen: MainStack },
		Search: { screen: SearchModalScreen },
	},
	{
		mode: 'modal',
		headerMode: 'none',
	}
);

export default createAppContainer(RootStack);
