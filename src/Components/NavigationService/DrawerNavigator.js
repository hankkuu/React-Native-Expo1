import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";
import { createDrawerNavigator, DrawerItems, SafeAreaView, createStackNavigator } from 'react-navigation';

import HomeScreenTabNavigator from '../NavigationService/HomeScreenTabNavigator';
import SettingsScreen from '../Screens/DrawerNavigator/SettingsScreen';
import TestScreen from '../Screens/DrawerNavigator/TestScreen';

// export default class App extends Component {
//     render() {
//         return (
//             <AppDrawerNavigator />
//         );
//     }
// }

const InnerStackNavigator = createStackNavigator({
    TabNavigator: {
        screen: HomeScreenTabNavigator
    }
})

const SettingNavigator = createStackNavigator({
    SettingNavigator: {
        screen: SettingsScreen
    }
})

const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: InnerStackNavigator
    },
    Settings: {
        screen: SettingNavigator
    },
    Test: {
        screen: TestScreen
    }
}, {
        initialRouteName: 'Home',
        contentComponent: CustomDrawerComponent,
        contentOptions: {
            activeTintColor: 'orange',
        }
    })

export default AppDrawerNavigator;

const CustomDrawerComponent = (props) => (
    <View style={{ flex: 1 }}>
        <Text>TTTT</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});