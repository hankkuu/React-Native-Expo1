import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

// Native-base icon 추가 ui 라이브러리 모음이라고 생각하면 된다 
import { Icon } from 'native-base';
import { createMaterialTopTabNavigator } from 'react-navigation';

// 파일에서 추가
import Tab1 from './AppTab/Tab1';
import Tab2 from './AppTab/Tab2';
import Tab3 from './AppTab/Tab3';
import Tab4 from './AppTab/Tab4';
import Tab5 from './AppTab/Tab5';

export default class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: <Icon name='camera' style={{ paddingLeft: 10 }} />,
    title: 'kangstargram',
    headerRight: <Icon name='send' style={{ paddingRight: 10 }} />,
  }

  render() {
    return (
      // 이런식으로 화면을 연결 시킨다.
      <AppTabNavigator />
    );
  }
}

// 탭을 추가함
const AppTabNavigator = createMaterialTopTabNavigator({
  Tab1: {
    screen: Tab1
  },
  Tab2: {
    screen: Tab2
  },
  Tab3: {
    screen: Tab3
  },
  Tab4: {
    screen: Tab4
  },
  Tab5: {
    screen: Tab5
  }
}, {
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    style: {
      ...Platform.select({      // ... 자바스크립트의 스프레드(전개) 연산자라는 것인데 객체나 배열같은 것을 한번에 다 넣어주는 것을 말한다.. 그냥 순서대로 내용물이 다 들어간다고 보자
        android: {
          backgroundColor: 'white'
        }
      })
    },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    showLabel: false,
    showIcon: true,
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
