import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
import { Icon } from 'native-base';

export default class Tab4 extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),      
    }
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='person' style={{ color: tintColor }} />
    )
  }

  render() {
    return (
      <ListView 
         dataSource={this.state.dataSource}
         renderRow={(rowData) => <Text>{rowData}</Text>}
      >
      </ListView>
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
