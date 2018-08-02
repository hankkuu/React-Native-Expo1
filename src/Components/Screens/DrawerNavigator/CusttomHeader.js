import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Header, Body, Title, Content, Left, Icon, Right } from 'native-base';

class CustomHeader extends Component {
    constructor(props){
        super(props)
        this.state = {};
    }

    render() {
        return (
            <View>
            <Header>
                <Left><Icon name="ios-menu" onPress={this._drawerOpen} /></Left>
                <Body>
                    <Text>{this.props.title}</Text>
                </Body>
                <Right />
            </Header>
            </View>
        );
    }

    _drawerOpen = () => {
        console.log(this.props.navigation);
        this.props.openDrawer();
    }
}
export default CustomHeader;