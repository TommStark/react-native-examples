import React from 'react';
import {
  Animated,
  View,
  ActivityIndicator,
  StyleProp,
  ImageStyle,
} from 'react-native';
import {useFade} from '../hooks/useFade';
import {useState, useContext} from 'react';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}: Props) => {
  const {opacity, fadeIn} = useFade();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const [isLoading, setIsLoading] = useState(true);
  return (
    <View>
      {isLoading && <ActivityIndicator size={25} color={colors.primary} />}
      <Animated.Image
        source={{uri}}
        onLoadEnd={() => {
          fadeIn(500);
          setIsLoading(false);
        }}
        style={{...(style as any), opacity}}
      />
    </View>
  );
};
