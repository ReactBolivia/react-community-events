import React from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import {
  Map,
  RestaurantsList,
} from '../components';

import { iconPlatform } from './tabIcons';
import { tabBarConfig } from './tabBarConfig';

const RestaurantsStack = createStackNavigator({
    RestaurantsList: {
        screen: RestaurantsList,
        navigationOptions: ({navigation}) => {
            return({
                header: null,
            });
        },
    }
});

const MapStack = createStackNavigator({
    MapRestaurants: {
        screen: Map,
        navigationOptions: ({navigation}) => {
            return({
                header: null,
            });
        },
    }
});

export default RestaurantsTabBar = createBottomTabNavigator({
    MapScreens: {
        screen: MapStack,
        navigationOptions: {
        tabBarLabel: 'Mapa',
        tabBarIcon: ({tintColor, focused}) => iconPlatform(tintColor, focused).map,
        }
    },
    RestaurantsScreens: {
        screen: RestaurantsStack,
        navigationOptions: {
            tabBarLabel: 'Restaurantes',
            tabBarIcon: ({tintColor, focused}) => iconPlatform(tintColor, focused).restaurants,
        }
    },
}, tabBarConfig());
