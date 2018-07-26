import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, Platform, ScrollView } from 'react-native';
import { Icon } from 'native-base';
import ActionButton from 'react-native-action-button';
import uuidv1 from "uuid/v1";
import ToDo from "./ToDo";

const { height, width } = Dimensions.get("window");

export default class Tab1 extends Component {
  state = {
    newToDo: "",
    loadedToDos: false,
    toDos: {}
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='ios-add-circle' style={{ color: tintColor }} />
    )
  }

  render() {
    const { newToDo, loadedToDos, toDos } = this.state;
    return (
      <View style={styles.container}>
      {/* <StatusBar barStyle="light-content" /> */}
      <Text style={styles.title}>To do</Text>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder={"New To Do"} 
                   value={newToDo} 
                   onChangeText={this._controllNewToDo} 
                   placeholderTextColor={"#999"} 
                   returnKeyType={"done"} 
                   autoCorrect={false}
                   onSubmitEditing={this._addToDo}
                   underlineColorAndroid={"transparent"} >
        </TextInput>
        <ScrollView contentContainerStyle={styles.toDos}>
          {Object.values(toDos).map(toDo => (
            <ToDo 
              key={toDo.id} 
              deleteToDo={this._deleteToDo}
              uncompleteToDo={this._uncompleteToDo} 
              completeToDo={this._completeToDo}
              updateToDo={this._updateToDo}
              {...toDo}
            />
            ))}
        </ScrollView>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Head" onPress={() => console.log("notes tapped!")}>
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="New" onPress={() => {}}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>

    </View>
    );
  }
  _controllNewToDo = text => {
    this.setState({
      newToDo: text
    });
  }

  _addToDo = () => {
    const { newToDo } = this.state;
    if(newToDo !== "") {
      this.setState(prevState => {
        const ID = uuidv1();
        const newToDoObject = {
          [ID]: {
            id: ID,
            isCompleted: false,
            text: newToDo,
            createAt: Date.now()
          }
        }
        const newState = {
          ...prevState,
          newToDo: "",
          toDos: {
            ...prevState.toDos,
            ...newToDoObject
          }
        }
        return { ...newState }
      });   
    }
  }
  _deleteToDo = id => {
    this.setState(prevState => {
      const toDos = prevState.toDos;
      delete toDos[id];
      const newState = {
        ...prevState,
        ...toDos
      }
      return {...newState };
    });
  }
  _uncompleteToDo = id => {
    this.setState(prevState => {
      const newState = {
        ...prevState,
        toDos: {
          ...prevState.toDos,
          [id]: {
            ...prevState.toDos[id],
            isCompleted: false
          }
        }
      }
      return { ...newState }
    });
  }
  _completeToDo = id => {
    this.setState(prevState => {
      const newState = {
        ...prevState,
        toDos: {
          ...prevState.toDos,
          [id]: {
            ...prevState.toDos[id],
            isCompleted: true
          }
        }
      }
      return { ...newState }
    });
  }
  _updateToDo = (id, text) => {
    this.setState(prevState => {
      const newState = {
        ...prevState,
        toDos: {
          ...prevState.toDos,
          [id]: {
            ...prevState.toDos[id],
            text: text
          }
        }
      }
      return { ...newState }
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f23657',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30,
    marginTop: 50,
    fontWeight: '200',
    marginBottom: 30,
  },
  card: {
    backgroundColor: 'white',
    flex: 1,
    width: width -25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50,50,50)",
        shadowOpacity: 0.5,
        shadowRadious: 5,
        shadowOffset: {
          height: -1,          
          width: 0
        }
      },
      android: {
        elevation: 3 
      }
    })
  },
  input: {
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 25,
  },
  toDos: {
    alignItems: "center",
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
