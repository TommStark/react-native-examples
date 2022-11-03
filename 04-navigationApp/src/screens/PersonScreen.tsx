import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../navigator/StackNav';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> {}

export const PersonScreen = (props: Props) => {
  const params = props.route.params;
  const {changeUserName} = useContext(AuthContext);

  useEffect(() => {
    changeUserName(params.nombre);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
