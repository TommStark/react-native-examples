import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {
  const {authState} = useContext(AuthContext);
  const {favoriteIcon} = authState;
  const insets = useSafeAreaInsets();

  return (
    <View style={{marginTop: insets.top}}>
      <Text> Setting</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
      {favoriteIcon && <Icon name={favoriteIcon} size={50} color="#900" />}
    </View>
  );
};
