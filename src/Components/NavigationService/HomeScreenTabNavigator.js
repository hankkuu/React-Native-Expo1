import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { createMaterialTopTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons'

import ScreenOne from '../Screens/TabNavigator/ScreenOne';
import ScreenTwo from '../Screens/TabNavigator//ScreenTwo';
import MemoScreen from '../Screens/TabNavigator/MemoScreen';


export default class AppTabNavigator extends Component {

    static navigationOptions = ({ navigation }) => {
        //console.log(navigation);
        return {
            headerLeft: (
                <View style={{ padding: 10 }}>
                    <Ionicons name="md-menu" size={24} onPress={() => navigation.openDrawer()} />
                </View>
            )
        }
    }
    render() {
        return (
            <HomeScreenTabNavigator screenProps={{ navigation: this.props.navigation }} />
        )
    }
}

const HomeScreenTabNavigator = createMaterialTopTabNavigator({
    Memo: {
        screen: MemoScreen,
        navigationOptions: {
            tabBarLabel: "Memo",
            tabBarIcon: ({tintColor}) => (
                <Ionicons name="ios-home" color={tintColor} size={24} />
            )
        }
    },
    ScreenOne: {
        screen: ScreenOne,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: ({tintColor}) => (
                <Ionicons name="md-compass" color={tintColor} size={24} />
            )
        }
    },
    ScreenTwo: {
        screen: ScreenTwo,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: ({tintColor}) => (
                <Ionicons name="md-compass" color={tintColor} size={24} />
            )
        }
    },
}, {
    // route config
    initialRouteName: 'Memo',
    swipeEnabled: true,
    animationEnabled: true,
    navigationOptions: {
        tabBarVisible: true
    },
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
        style: {
            backgroundColor: 'white',
            borderTopWidth: 0.5,
            borderTopColor: 'grey'
        },
        indicatorStyle: {
            height: 0
        },
        showIcon: true,
        showLabel: true
    },
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});