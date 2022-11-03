import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {Animation101Screen} from '../screens/Animation101Screen';
import {Animation102Screen} from '../screens/Animation102Screen';
import {SwitchScreen} from '../screens/SwitchScreen';
import {AlertScreen} from '../screens/AlertScreen';
import {InputScreen} from '../screens/InputScreen';
import {PullRefreshScreen} from '../screens/PullRefreshScreen';
import {SectionListScreen} from '../screens/SectionListScreen';
import {ModalScreen} from '../screens/ModalScreen';
import {InfinyScrollScreen} from '../screens/InfinyScrollScreen';
import {SlideScreen} from '../screens/SlideScreen';
import {ThemeScreen} from '../screens/ThemeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContext} from '../context/theme/ThemeContext';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Animation101Screen"
          component={Animation101Screen}
        />
        <Stack.Screen
          name="Animation102Screen"
          component={Animation102Screen}
        />
        <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
        <Stack.Screen name="AlertScreen" component={AlertScreen} />
        <Stack.Screen name="InputScreen" component={InputScreen} />
        <Stack.Screen name="PullRefreshScreen" component={PullRefreshScreen} />
        <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
        <Stack.Screen name="ModalScreen" component={ModalScreen} />
        <Stack.Screen
          name="InfinyScrollScreen"
          component={InfinyScrollScreen}
        />
        <Stack.Screen name="SlideScreen" component={SlideScreen} />
        <Stack.Screen name="ThemeScreen" component={ThemeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
