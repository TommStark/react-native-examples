/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import {SettingsScreen} from '../screens/SettingsScreen';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {styles} from '../theme/appTheme';
import {Tabs} from './BottomTabs';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={props => menuContent(props)}
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen
        name="BottomTabs"
        options={{title: 'home'}}
        component={Tabs}
      />
      <Drawer.Screen
        name="Settings"
        options={{title: 'settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

const menuContent = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* AVATAR */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://www.caribbeangamezone.com/wp-content/uploads/2018/03/avatar-placeholder.png',
          }}
          style={styles.avatar}
        />
      </View>
      {/* MENU OPTIONS */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{...styles.menubtn, flexDirection: 'row'}}
          onPress={() => navigation.navigate('BottomTabs')}>
          <Icon name="compass" size={23} color="black" />
          <Text style={styles.menuText}> Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.menubtn, flexDirection: 'row'}}
          onPress={() => navigation.navigate('Settings')}>
          <Icon name="cog" size={23} color="black" />
          <Text style={styles.menuText}> Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
