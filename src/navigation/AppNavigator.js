import React, { Component } from 'react';
import { StatusBar, View, Platform } from 'react-native';
import { createStackNavigator, createTabNavigator, NavigationActions, createAppContainer } from 'react-navigation';

import RestaurantsTabBar from './RestaurantsTab';

const AppStack = createStackNavigator({
  'Restaurants': {
    screen: RestaurantsTabBar,
    navigationOptions: {
        gesturesEnabled: false,
    },
  },
},{
  headerMode: 'none',
});

const App = createAppContainer(AppStack);

export default App;
