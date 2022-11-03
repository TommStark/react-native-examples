/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {HeaderTitle} from '../components/HeaderTitle';
import {Alert, Button, View} from 'react-native';

export const AlertScreen = () => {
  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'this is the alert message', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const showPrompt = () => {
    Alert.prompt(
      'estas seguro?',
      'esta accion no se puede revertir',
      (valor: string) => console.log('info', valor),
      'plain-text',
      'hola mundo',
      'numeric-pad',
    );
  };

  return (
    <View>
      <HeaderTitle title="Alert" />
      <Button title="Press me" onPress={createThreeButtonAlert} />
      <View style={{height: 10}} />
      <Button title="Prompt" onPress={showPrompt} />
    </View>
  );
};
