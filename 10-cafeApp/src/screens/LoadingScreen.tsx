import React from 'react';
import {ActivityIndicator, View} from 'react-native';

export const LoadingScreen = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={50} color="black1" />
    </View>
  );
};
