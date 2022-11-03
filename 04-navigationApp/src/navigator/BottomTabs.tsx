/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Tab1Screen} from '../screens/Tab1Screen';
import {StackNav} from './StackNav';
import {colors} from '../theme/appTheme';
import {Platform} from 'react-native';
import {TopTabs} from './TopTabs';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <BottomTabsIos /> : <BottomTabsAndroid />;
};

const TabAndroid = createMaterialBottomTabNavigator();
const BottomTabsAndroid = () => {
  return (
    <TabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colors.primary,
      }}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarIcon: props => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bandage-outline';
              break;

            case 'Tab2Screen':
              iconName = 'basketball-outline';
              break;

            case 'StackNav':
              iconName = 'bookmarks-outline';
              break;
          }
          return <Icon name={iconName} size={20} color={props.color} />;
        },
      })}>
      <TabAndroid.Screen
        name="Tab1Screen"
        options={{title: 'TAB1'}}
        component={Tab1Screen}
      />
      <TabAndroid.Screen
        name="Tab2Screen"
        options={{title: 'TAB2'}}
        component={TopTabs}
      />
      <TabAndroid.Screen
        name="StackNav"
        options={{title: 'STACK'}}
        component={StackNav}
      />
    </TabAndroid.Navigator>
  );
};

const TabiOs = createBottomTabNavigator();
const BottomTabsIos = () => {
  return (
    <TabiOs.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarIcon: props => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bandage-outline';
              break;

            case 'Tab2Screen':
              iconName = 'basketball-outline';
              break;

            case 'StackNav':
              iconName = 'bookmarks-outline';
              break;
          }
          return <Icon name={iconName} size={20} color={props.color} />;
        },
      })}>
      <TabiOs.Screen
        name="Tab1Screen"
        options={{title: 'TAB1'}}
        component={Tab1Screen}
      />
      <TabiOs.Screen
        name="Tab2Screen"
        options={{title: 'TAB2'}}
        component={TopTabs}
      />
      <TabiOs.Screen
        name="StackNav"
        options={{title: 'STACK'}}
        component={StackNav}
      />
    </TabiOs.Navigator>
  );
};
