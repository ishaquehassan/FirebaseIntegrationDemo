/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, View} from 'react-native';
import firebase from 'react-native-firebase';


export default class App extends Component {

    onCreateUserClick = () => {
        firebase.auth().createUserWithEmailAndPassword("test@gmai.com", "123456")
            .then((user) => {
                alert(JSON.stringify(user))
            }).catch((error) => {
            alert(error)
        })
    };

    onCreateTestDataClick = () => {
        const dbRef = firebase.database().ref("testData");
        dbRef.set("hello World From App a")
    };

    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Button title={"Create Test User On Firebase"} onPress={this.onCreateUserClick}/>
                <Button title={"Create Test Firebase DB Data"} onPress={this.onCreateTestDataClick}/>
            </View>
        );
    }
}

