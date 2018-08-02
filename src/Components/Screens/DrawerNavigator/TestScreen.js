import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button
} from "react-native";

import { Icon, Container, Header, Content, Left, Footer } from 'native-base';
import CustomHeader from './CusttomHeader';
import Ionicons from 'react-native-vector-icons/Ionicons'

class SettingsScreen extends Component {
    // static navigationOptions = ({ navigation }) => ({
    //     title: "Settings",
    //     headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} />,
    //     drawerIcon: <Image source={require('../../../../assets/settings.png')}
    //         Style={{ height: 10, width: 10 }} />
    // })

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
            <Container>
                {/* <CustomHeader
                    title="Settings"
                    drawerOpen={() => this.props.navigation.openDrawer}
                /> */}

                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {/* <Button
                        full
                        onPress={() => this.props.screenProps.navigation.navigate('WelcomeScreen')}>
                        <Text style={{ color: 'white' }}>Go to Home screen</Text>
                    </Button> */}
                    <View style={styles.container}>
                <Button title="Log out" onPress={() => this.props.screenProps.navigation.navigate('WelcomeScreen')} />
            </View>
                </Content>
            </Container>
        );
    }
}
export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});