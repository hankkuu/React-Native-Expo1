import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MainScreen  from '../Navigator/MainScreen';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      isLogin: true,
      myId: "",
      myPassword: ""
    }
  }

  render() {

    const { 
      myId,
      myPassword,
      isLogin
     } = this.state; // 현재 Id에 대한 값을 가져올 때

    if(isLogin === true) {
      return (
        <View style={styles.navi}>
          <AppStackNavigator />
        </View>
      );
    } else {
        return (
            <View style={styles.container}>
              <View style={styles.upper}>
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
            </View>
        );
    }    
    
  }
  _changeId = text => {
    this.setState({
      myId: text
    });
  }
  _changePassword = text => {
    this.setState({
      myPassword: text
    });
  }
  _onButtonPress = () => {
    const { myId, myPassword } = this.state;
     if( myId === "sgr" && myPassword === "serviceDev") {
       //console.log("true");
       this.setState({
         isLogin: true
       })
       Alert.alert("로그인 되었습니다.");
     } else {
      //console.log("false");
       this.setState({
         isLogin: false
       })
       Alert.alert("로그인이 실패했습니다.");
     }
  }
}

// StackNavigator 를 app 에 추가하기
const AppStackNavigator = createStackNavigator({
  Main: {
    screen: MainScreen
  }
});

const { width, height } = Dimensions.get('window'); 

const styles = StyleSheet.create({
  navi: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upper: {
    flex: 1,
    alignItems: "center",           // 정렬방법 이렇게 하면 모든 항목이 가운데로 온다(기본으로 접근하자)
    justifyContent: "center"
  },
  input: {
    padding: 10,
    width: 200,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 25,
  },

});
