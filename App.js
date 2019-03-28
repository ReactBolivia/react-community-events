/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import NavigationService from './src/navigation/NavigationService';
import firebase from 'react-native-firebase';

export default class App extends Component {
  async componentDidMount(){
    const fcmToken = await firebase.messaging().getToken();
    if (fcmToken) {
        // user has a device token
      alert(`GCM TOKEN: ${fcmToken}`)
    } else {
        // user doesn't have a device token yet
        alert('Dont have token')
    }
  }
  
  render() {
    return(
      <AppNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}/>
    );
  }
}