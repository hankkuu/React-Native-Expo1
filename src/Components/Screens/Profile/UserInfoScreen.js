import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight
} from "react-native";
import { Icon } from 'native-base';
import uuidv1 from "uuid/v1";

class UserInfoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friendName: ''            
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.text} 
                    underlineColorAndroid={"transparent"}    
                    returnKeyType={"done"}
                    placeholder={"User name"}
                    placeholderTextColor={"#999"}
                    onChangeText={this._changeText}
                    onSubmitEditing={this._addUser}
                >
                </TextInput>
                <TouchableHighlight
                    onPress={this._donePress}>
                    <Icon name="md-create" style={styles._doneButton}>done</Icon>
                </TouchableHighlight>
            </View>
        );
    }

    _changeText = (text) => {
        this.setState({
            friendName: text 
        });
    }

    _addUser = () => {
        const { friendName } = this.state;
        if(friendName !== "") {
            let user = new Object();
            user.id = uuidv1();
            user.name = friendName

            return user;
        }
    }

    _donePress = () => {
        const { friendName } = this.state
        if(friendName !== "") {
            let user = new Object();
            user.id = uuidv1();
            user.name = friendName

            this.props.navigation.navigate('friendslist', { id: user.id, name: user.name });
        }
        
    }
}
export default UserInfoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        marginTop: 8,
        width: 150,
    },
});