import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, StatusBar } from 'react-native';

import ModalStack from './Components/NavigationService/ModalStackNavigator';

export default class App extends Component {
  render() {
    return ([
      <StatusBar key='statusbar' barStyle='light-content' />,
      <ModalStack key='navigation' />
      ]      
    );
  } 
}