import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput
} from "react-native";

class LoginScreen extends Component {
    constructor() {
        super()
        this.state = {
            myId: "",
            myPassword: ""
        }   // 생성자에서 초기값 생성
    }
    render() {
        // const로 선언하지 않고 this.state를 사용해도 되지만 현재 상태 변수가 무었인지 알기 쉽게 위에서 선언한다
        const {
            myId,
            myPassword
        } = this.state;

        return (
            <View style={styles.container}>
                <Text>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder={"ID"}
                    placeholderTextColor={"#999"}
                    value={myId}
                    onChangeText={this._changeId}
                    underlineColorAndroid={"transparent"} >
                </TextInput>
                <TextInput
                    style={styles.input}
                    placeholder={"Password"}
                    placeholderTextColor={"#999"}
                    value={myPassword}
                    onChangeText={this._changePassword}
                    secureTextEntry={true}
                    underlineColorAndroid={"transparent"} >
                </TextInput>
                <Button
                    title='Login'
                    onPress={this._onButtonPress} >
                </Button>
            </View>
        );
    }

    _changeId = (text) => {
        this.setState({
            myId: text
        });
    }
    _changePassword = (text) => {
        this.setState({
            myPassword: text
        });
    }
    _onButtonPress = () => {
        // 콜백함수에서 state를 가져오지 않으면 undifined로 된다
        const { myId, myPassword } = this.state;

        if (myId === "sgr" && myPassword === "1234") {
            //console.log("true");
            //alert("로그인 되었습니다.");
            //this.setState({
            //    isLogin: true
            //})
            this.props.navigation.navigate('login')

        } else {
            //console.log("false");
            //alert("로그인이 실패했습니다.");
            //this.setState({
            //    isLogin: false
            //})
        }
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        padding: 10,
        width: 200,
        borderBottomColor: "#bbb",
        borderBottomWidth: 1,
        fontSize: 25,
    },
});