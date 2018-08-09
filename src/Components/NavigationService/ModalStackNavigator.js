import React from 'react'
import { FlatList, View, TouchableOpacity, Text, Image, StatusBar, Platform } from 'react-native'

import { createMaterialTopTabNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation'
//import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

import FriendsListScreen from '../Screens/Profile/FriendListScreen'
import ChatListScreen from '../Screens/Chat/ChatListScreen'
import ChatScreen from '../Screens/Chat/ChatScreen'
import LoginScreen from '../Screens/LoginScreen'
import WelcomeScreen from '../Screens/WelcomeScreen'
import SignUpScreen from '../Screens/SignUpScreen'
import SettingScreen from '../Screens/SettingScreen'
import UserProfileScreen from '../Screens/Profile/UserProfileScreen'
import AdvancedScreen from '../Screens/Chat/AdvancedScreen'
import MemoScreen from '../Screens/TabNavigator/MemoScreen';
import UserInfoScreen from '../Screens/Profile/UserInfoScreen';

//Tab
const Tab = createMaterialTopTabNavigator({
    friendslist: { screen: FriendsListScreen },
    chatlist: { screen: ChatListScreen },
    Memo: {
        screen: MemoScreen,
    },
}, {
        tabBarOptions: {
            activeTintColor: '#4d3241',
            style: { backgroundColor: Platform.select({ ios: 'white', android: '#4d3241' }), borderTopColor: 'transparent', borderTopWidth: 0, elevation: 0 },
            labelStyle: { color: Platform.select({ ios: null, android: '#fff' }) },
            indicatorStyle: { backgroundColor: '#fff' },
        }
    })

const TabNavigationOptions = (props) => ({
    title: 'Sample App',
    headerStyle: { backgroundColor: '#4d3241', borderBottomColor: 'transparent', borderBottomWidth: 0, elevation: 0 },
    headerLeft: <DrawerOpenButton {...props} />,
    headerRight:
        <TouchableOpacity onPress={() => props.navigation.navigate('settings')}>
            <Text style={{ marginHorizontal: 15, color: 'white' }}>Settings</Text>
        </TouchableOpacity>
})

const StackNavigationOptions = (props) => ({
    headerStyle: { backgroundColor: '#4d3241' },
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white',
    headerBackTitle: null,
})

export const DrawerOpenButton = (props) => (
    <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
        <Image style={{ marginLeft: 15, width: 24, height: 24 }} source={require('../../../assets/icon_hamburger.png')} />
    </TouchableOpacity>
)

//Stack
const Stack = createStackNavigator({
    root: { screen: Tab, navigationOptions: TabNavigationOptions },
    chat: { screen: ChatScreen },
    advanced: { screen: AdvancedScreen },
    settings: { screen: SettingScreen },
    UserInfo : { screen: UserInfoScreen }
}, {
        navigationOptions: StackNavigationOptions,
        //transitionConfig:getSlideFromRightTransition
    })

const Stack_Setting = createStackNavigator({
    root: { screen: SettingScreen }
}, {
        navigationOptions: StackNavigationOptions
    })

//Drawer
const Drawer = createDrawerNavigator({
    main: { screen: Stack },
    setting: { screen: Stack_Setting }
}, {
        navigationOptions: {
            drawerLockMode: 'locked-closed',
        },
        backBehavior: 'none',
        contentOptions: {
            activeTintColor: 'orange',
        }
    })

//Modal Stack (root)
export default ModalStack = createStackNavigator({
    welcome: { screen: WelcomeScreen },
    logout: { screen: LoginScreen },
    login: { screen: Drawer },
    signup: { screen: SignUpScreen },
    userprofile: { screen: UserProfileScreen }
}, {
        mode: 'modal',
        headerMode: 'none'
    })