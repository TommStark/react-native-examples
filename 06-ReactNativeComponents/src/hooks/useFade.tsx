import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useFade = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = (duration: number = 300) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const startPosition = (
    initPosicion: number = -100,
    duration: number = 300,
  ) => {
    position.setValue(initPosicion);
    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  return {
    opacity,
    fadeIn,
    position,
    fadeOut,
    startPosition,
  };
};
useRef;
