/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BlackButton} from '../components/BlackButton';
import {PermissionContext} from '../context/PermissionsContext';

export const HomeScreen = () => {
  const {permissions, askLocationPermission} = useContext(PermissionContext);

  return (
    <View style={styles.container}>
      <BlackButton onPress={askLocationPermission} title="press me" />
      <Text style={{color: 'black'}}>
        {JSON.stringify(permissions, null, 4)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
