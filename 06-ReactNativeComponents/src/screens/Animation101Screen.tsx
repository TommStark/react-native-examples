import React from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import {useFade} from '../hooks/useFade';

export const Animation101Screen = () => {
  const {opacity, fadeIn, fadeOut, position, startPosition} = useFade();

  return (
    <View style={styles.conatiner}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          transform: [{translateY: position}],
        }}
      />
      <Button
        title="press me - fadeIn"
        onPress={() => {
          fadeIn();
          startPosition(-200, 1000);
        }}
      />
      <Button title="press me - fadeout" onPress={fadeOut} />
    </View>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
