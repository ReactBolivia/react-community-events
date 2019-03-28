import { Platform } from 'react-native';

const tabBarConfigIos = {
  initialRouteName: 'MapScreens',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#fc5fa6',
    inactiveTintColor: '#8a8a92',
    labelStyle: {
      fontSize: 8,
    },
    style: {
      paddingTop:5,
      backgroundColor: '#f9f9f9'
    },
  },
};

const tabBarConfigAndroid = {
  initialRouteName: 'RestaurantsScreens',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#fc5fa6',
    inactiveTintColor: '#8a8a92',
    labelStyle: {
      fontSize: 8,
    },
    style: {
      paddingTop:5,
      backgroundColor: '#f9f9f9'
    },
  },
};

export const tabBarConfig = () => Platform.select({
  android: tabBarConfigAndroid,
  ios: tabBarConfigIos
});
