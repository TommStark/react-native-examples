import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';

export const ContactScreen = () => {
  const {signIn, authState, logOut} = useContext(AuthContext);

  return (
    <View>
      <Text> ContactScreen</Text>
      {authState.isLoggedIn ? (
        <Button onPress={logOut} title="LogOut" />
      ) : (
        <Button onPress={signIn} title="LogIn" />
      )}
    </View>
  );
};
