/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {ChatScreen} from '../screens/ChatScreen';
import {ContactScreen} from '../screens/ContactScreen';
import {PolicyScreen} from '../screens/PolicyScreen';
import {colors} from '../theme/appTheme';

const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {backgroundColor: colors.primary},
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
          shadowColor: 'transparent',
        },
        tabBarIcon: props => {
          let iconName: string = '';
          switch (route.name) {
            case 'Chat':
              iconName = 'chatbox-outline';
              break;

            case 'Contact':
              iconName = 'people-outline';
              break;

            case 'Policy':
              iconName = 'finger-print';
              break;
          }
          return <Icon name={iconName} size={23} color={props.color} />;
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Policy" component={PolicyScreen} />
    </Tab.Navigator>
  );
};
