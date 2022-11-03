/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {TouchableIcon} from '../components/TouchableIcon';

export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <View style={{...styles.globalMargin, flexDirection: 'row'}}>
        <TouchableIcon iconName="rocket" />
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="calculator" />
        <TouchableIcon iconName="images-outline" />
        <TouchableIcon iconName="finger-print" />
        <TouchableIcon iconName="bug" />
      </View>
    </View>
  );
};
