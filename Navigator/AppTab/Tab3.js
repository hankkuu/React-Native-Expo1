import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, Button, ScrollView, FlatList } from 'react-native';
import { Icon } from 'native-base';


export default class Tab3 extends Component {
  static navigationOptions = {                    // 정적 객체... 라이프사이클 쪽을 알아야 한다 static을 빼면 동작하지 않는다 일단 라이브러리에서 정적객체로 동작하게 설계해 놨다
    tabBarIcon: ({ tintColor }) => (
      <Icon name='ios-heart' style={{ color: tintColor }} />
    )
  }

  render() {
    
    return (
      <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}
                  >
          <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
      </ScrollView>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    paddingVertical: 20
  }
});
