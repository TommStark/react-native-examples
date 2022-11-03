import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../context/theme/ThemeContext';
import {MenuItem} from '../interfaces/interfaces';

interface Props {
  item: MenuItem;
}

export const FlatListMenuItem = ({item}: Props) => {
  const navigation = useNavigation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(item.component as any)}>
      <View style={styles.container}>
        <Icon name={item.icon} size={23} color={colors.primary} />
        <Text style={{...styles.itemText, color: colors.text}}>
          {item.name}
        </Text>
        <View style={{...styles.spacer}} />
        <Icon name="chevron-forward-outline" size={23} color={colors.primary} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row', flex: 1},
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
  spacer: {flex: 1},
});
