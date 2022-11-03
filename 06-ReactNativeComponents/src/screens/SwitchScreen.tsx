import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {CustomeSwitch} from '../components/CustomeSwitch';
import {HeaderTitle} from '../components/HeaderTitle';
import {useContext} from 'react';
import {ThemeContext} from '../context/theme/ThemeContext';

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: false,
    isHungry: false,
    isHappy: true,
  });

  const {isActive, isHappy, isHungry} = state;

  const onChange = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value,
    });
  };
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={{...styles.margin}}>
      <HeaderTitle title="Switches" />
      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>
          is Active
        </Text>
        <CustomeSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>
          is Hungry
        </Text>
        <CustomeSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>Is Happy</Text>
        <CustomeSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>
      <Text style={{...styles.switchText, color: colors.text}}>
        {JSON.stringify(state, null, 5)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  margin: {
    marginHorizontal: 20,
  },
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});
