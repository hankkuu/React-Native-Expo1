import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Setting6Screen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Setting1Screen</Text>
            </View>
        );
    }
}
export default Setting6Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});