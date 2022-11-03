import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const Page3Screen = (props: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 3 Titulos</Text>
      <Button title="page 1" onPress={() => props.navigation.popToTop()} />
      <Button title="back" onPress={() => props.navigation.pop()} />
    </View>
  );
};
