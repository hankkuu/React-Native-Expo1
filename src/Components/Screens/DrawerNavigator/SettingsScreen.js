import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import { createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Setting1Screen from '../SettingsNavigator/Setting1Screen';
import Setting2Screen from '../SettingsNavigator/Setting2Screen';
import Setting3Screen from '../SettingsNavigator/Setting3Screen';
import Setting4Screen from '../SettingsNavigator/Setting4Screen';
import Setting5Screen from '../SettingsNavigator/Setting5Screen';
import Setting6Screen from '../SettingsNavigator/Setting6Screen';

class SettingScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        console.log(navigation);
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
            <SettingsStackNavigator />
        );
    }
}
export default SettingScreen;

const SettingsStackNavigator = createStackNavigator({
    Setting1: {
        screen: Setting1Screen
    },
    Setting2: {
        screen: Setting2Screen
    },
    Setting3: {
        screen: Setting3Screen
    },
    Setting4: {
        screen: Setting4Screen
    },
    Setting5: {
        screen: Setting5Screen
    },
    Setting6: {
        screen: Setting6Screen
    }
}, {
        navigationOptions: {
            gesturesEnabled: false
        }
    }

)



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});