import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import Setting1Screen from '../SettingsNavigator/Setting1Screen';
import Setting2Screen from '../SettingsNavigator/Setting2Screen';
import Setting3Screen from '../SettingsNavigator/Setting3Screen';
import Setting4Screen from '../SettingsNavigator/Setting4Screen';
import Setting5Screen from '../SettingsNavigator/Setting5Screen';
import Setting6Screen from '../SettingsNavigator/Setting6Screen';

class SettingsNavigator extends Component {
    render() {
        return (
            <SettingsScreens />
        );
    }
}
export default SettingsScreens;

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