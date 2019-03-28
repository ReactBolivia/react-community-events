import React from 'react';
import { Platform, Image } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Evil from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Font from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';

const iconIos = (color, focus) => {
  return({
    map: <Feather name='map-pin' size={25} color={color} />,
    restaurants: <Ionicon name={"ios-restaurant"} size={25} color={color} />,
  });
};


const iconAndroid = (color, focus) => {
  return({
    map: <Feather name='map-pin' size={25} color={color} />,
    restaurants: <Ionicon name={"ios-restaurant"} size={25} color={color} />,
  });
};

export const iconPlatform = (color, focus) => Platform.select({
  android: iconAndroid(color, focus),
  ios: iconIos(color, focus)
});
