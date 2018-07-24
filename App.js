import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import PropTypes from 'prop-types';

import Login from './Login/Login'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upper}>
          <Login />          
        </View>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upper: {
    flex: 1,
    alignItems: "center",           // 세로방향에서 정렬 할 때 ...정렬방법 이렇게 하면 모든 항목이 가운데로 온다(기본으로 접근하자)
    justifyContent: "center"        // 가로 방행에서 정렬할 때        
  },                                // Flex Direction 은 정렬 방향을 지정 = { Row, Column}

});
