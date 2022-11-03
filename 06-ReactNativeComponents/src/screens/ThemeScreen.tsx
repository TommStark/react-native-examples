/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {HeaderTitle} from '../components/HeaderTitle';
import {Text, View} from 'react-native';
import {CustomeSwitch} from '../components/CustomeSwitch';
import {styles} from '../theme/appTheme';
import {ThemeContext} from '../context/theme/ThemeContext';

export const ThemeScreen = () => {
  const {setDarkTheme, setLightTheme, theme} = useContext(ThemeContext);

  const setTheme = () => {
    if (theme.currentTheme === 'dark') {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="App theme" />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{marginVertical: 20}}> Toggle Theme DARK/LIGHT</Text>
        <CustomeSwitch
          isOn={theme.currentTheme === 'dark' ? true : false}
          onChange={setTheme}
        />
      </View>
    </View>
  );
};
