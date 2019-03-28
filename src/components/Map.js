import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../styles/Screen';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });

export default class Map extends Component {
  render() {
    return(
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: -16.509613,
            longitude: -68.123194,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
        </MapView>
      </View>
    );
  }
}


