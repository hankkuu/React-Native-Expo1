import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    Button,
    StatusBar
} from "react-native";

class SignUpScreen extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            pw: '',
            displayName: '',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <TextInput
                        style={{ marginTop: 24, width: 150 }}
                        placeholder={"EMAIL"}
                        placeholderTextColor={"#999"}
                        underlineColorAndroid={"transparent"}
                        txt={this.state.email}
                        onTextChanged={(text) => this._onTextChanged('EMAIL', text)}
                    />
                    <TextInput
                        style={{ marginTop: 24, width: 150 }}
                        placeholder={"PW"}
                        placeholderTextColor={"#999"}
                        underlineColorAndroid={"transparent"}
                        txt={this.state.pw}
                        onTextChanged={(text) => this._onTextChanged('PW', text)}
                        isPassword={true}
                    />
                    <TextInput
                        style={{ marginTop: 24, width: 150 }}
                        placeholder={"NAME"}
                        placeholderTextColor={"#999"}
                        underlineColorAndroid={"transparent"}
                        txt={this.state.displayName}
                        onTextChanged={(text) => this._onTextChanged('NAME', text)}
                    />
                    <View style={styles.btnWrapper}>
                        <Button
                            isLoading={this.state.isRegistering}
                            onPress={this._onRegister}
                            style={styles.btnRegister}
                            textStyle={styles.txtRegister}
                            title="등록"
                        ></Button>
                    </View>
                </View>
            </View>
        );
    }

    _onRegister = () => {

    }

    _onTextChange = (type, text) => {
        switch (type) {
            case 'EMAIL':
                this.setState({ email: text });
                return;
            case 'PW':
                this.setState({ pw: text });
                return;
            case 'NAME':
                this.setState({ displayName: text });
                return;
            case 'STATUS_MSG':
                this.setState({ statusMsg: text });
                return;
        }
    }
}
export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper: {
        width: '78%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    btnWrapper: {
        width: '100%',
    },
});