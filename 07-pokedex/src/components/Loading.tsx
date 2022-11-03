/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

export const Loading = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={50} color="grey" />
      <Text> Loading...</Text>
    </View>
  );
};
