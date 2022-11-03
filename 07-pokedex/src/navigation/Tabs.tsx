/* eslint-disable react-native/no-inline-styles */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {Navigation} from './Navigation';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Tab2} from './Tabs2';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5856D6',
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'ios' ? 0 : 10,
        },
        tabBarStyle: {
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 80 : 65,
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.90)',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Navigation}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={25} name="list-outline" />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Tab2}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={25} name="search-outline" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
