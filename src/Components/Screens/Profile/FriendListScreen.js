import React from 'react'
import { FlatList, View, TouchableOpacity, Text, Image, StyleSheet, ScrollView } from 'react-native';
import ActionButton from 'react-native-action-button';
import { Icon } from 'native-base';

import { getAssetByFilename } from '../../Util/Asset';

export default class FriendListScreen extends React.Component {

    static navigationOptions = (props) => ({
        title: 'Friends List',
        tabBarIcon: ({ tintColor }) => <Image style={{ width: 40, height: 40, tintColor: tintColor }} source={require('../../../../assets/icon_friends.png')} />,
    })

    constructor(props) {
        super(props);

        this.state = {
            friends: [
                { id: '0', name: 'Sunki Baek', photoFilename: "pic1.jpg" },
                { id: '1', name: 'Comet Kim', photoFilename: "pic2.jpg" },
                { id: '2', name: 'Bright Lee', photoFilename: "pic3.jpg" },
                { id: '3', name: 'Keu Kang', photoFilename: "pic4.jpg" },
            ]
        }        





    }

    componentDidMount() {


      
  
    }

    _setUserlist(userList) {
        this.setState({
            friends : userList
        })
    }

    render() {
        const { navigation } = this.props;
        const { friends } = this.state;
         const userId = navigation.getParam('id', '');
         const userName = navigation.getParam('name', '');
         console.log(userId);
         console.log(userName);
         let array = [];
         if( userId !== '' && userName !== '' ) {
             let f = { id: userId, name: userName, photoFilename: "pic4.jpg" }
             friends.push(f);
             //console.log(friends);           
         }       
         //console.log(friends);

        
        //this._setUserlist(array);
  

        return (
            <View style={styles.container}>
                <ScrollView>
                    {console.log(friends)}
                    <FlatList
                        data={friends}
                        keyExtractor={item => item.id}
                        renderItem={item => (
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('userprofile', { imageFilename: item.item.photoFilename })}
                                style={{ width: '100%', height: 70, flexDirection: 'row', paddingHorizontal: 20, borderBottomWidth: 1, borderColor: '#0002' }}>
                                <Image style={{ alignSelf: 'center', resizeMode: 'cover', width: 50, height: 50, borderRadius: 25 }} source={getAssetByFilename(item.item.photoFilename)} />
                                <Text style={{ alignSelf: 'center', marginLeft: 10 }}>{item.item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </ScrollView>
                <ActionButton buttonColor="rgba(231,76,60,1)">
                    {/* <ActionButton.Item buttonColor='#9b59b6' title="Done" onPress={() => console.log("notes tapped!")}>
                        <Icon name="md-done-all" style={styles.actionButtonIcon} />
                        </ActionButton.Item> */}
                    <ActionButton.Item buttonColor='#3498db' title="New" onPress={() => { this._onAddButtonClick(true) }}>
                        <Icon name="md-create" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>
            </View>
        )
    }
    _onAddButtonClick = () => {
        this.props.navigation.navigate('UserInfo');
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#f23657',
        //alignItems: 'center',
        //justifyContent: 'center',
      },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
})