/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const Page2Screen = (props: Props) => {
  useEffect(() => {
    props.navigation.setOptions({
      title: 'Hola mundo',
      headerBackTitle: 'back',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 2 Titulos</Text>
      <Button
        title="Page 3"
        onPress={() => props.navigation.navigate('Page3Screen')}
      />
    </View>
  );
};
