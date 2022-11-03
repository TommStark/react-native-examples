/* eslint-disable react-native/no-inline-styles */
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page1Screen = (props: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 1 Titulos</Text>
      <Button
        title="Page 2"
        onPress={() => props.navigation.navigate('Page2Screen')}
      />

      <View style={{flexDirection: 'row', ...styles.globalMargin}}>
        <TouchableOpacity
          style={{...styles.btnBig, backgroundColor: '#5856D6'}}
          onPress={() =>
            props.navigation.navigate('PersonScreen', {
              id: 1,
              nombre: 'pedro',
            })
          }>
          <Icon name="man" size={23} color="white" />
          <Text style={styles.btnBigText}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.btnBig, backgroundColor: '#FF9427'}}
          onPress={() =>
            props.navigation.navigate('PersonScreen', {
              id: 1,
              nombre: 'Maria',
            })
          }>
          <Icon name="woman" size={23} color="white" />
          <Text style={styles.btnBigText}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
