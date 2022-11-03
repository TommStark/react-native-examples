import * as React from 'react';
import {SimplePokemon} from '../interfaces/PokemonInterfaces';
import {PokemonScreen} from '../screens/PokemonScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {SearchScreen} from '../screens/SearchScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  PokemonScreen: {simplePokemon: SimplePokemon; color: string};
};

const Stack = createStackNavigator<RootStackParams>();
export function Tab2() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={SearchScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );
}
