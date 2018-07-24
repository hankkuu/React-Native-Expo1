import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, Button } from 'react-native';
import { Icon } from 'native-base';

const onClick = () => {
  Alert.alert('Button has been pressed!');
  console.log("rrrrr");
};

export default class Tab3 extends Component {
  static navigationOptions = {                    // 정적 객체... 라이프사이클 쪽을 알아야 한다 static을 빼면 동작하지 않는다 일단 라이브러리에서 정적객체로 동작하게 설계해 놨다
    tabBarIcon: ({ tintColor }) => (
      <Icon name='ios-heart' style={{ color: tintColor }} />
    )
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Text>Tab3 {this.props.aaa}</Text>
        <Button onPress={onClick} title='Button'></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
