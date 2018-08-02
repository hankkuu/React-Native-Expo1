import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class Setting1Screen extends Component {
    render() {
        return (
            <View style={styles.container}>            
                <Button title="Log in" onPress={() => this.props.navigation.navigate('Settting2Screen')} />
                <Button title="Sign Up" onPress={() => this.props.navigation.navigate('Settting3Screen')} />
            </View>
        );
    }
}
export default Setting1Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});