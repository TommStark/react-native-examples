/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FadeInImage} from '../components/FadeInImage';
import {usePokemon} from '../hooks/usePokemon';
import {PokeDetails} from '../components/PokeDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({navigation, route}: Props) => {
  const {simplePokemon, color} = route.params;
  const {name, id, picture} = simplePokemon;
  const {top} = useSafeAreaInsets();
  const {pokemon: pokemonFull, isLoading} = usePokemon(id);
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: color, ...styles.container}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{...styles.backBtn, top: top + 5}}
          onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" size={35} color="white" />
        </TouchableOpacity>
        {/* pokeName */}
        <Text style={{...styles.pokeName, top: top + 40}}>
          {name + '\n'}#{id}
        </Text>
        {/* White PokeBall */}
        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={{...styles.pokeball}}
        />
        {/* Pokemon image */}
        <FadeInImage uri={picture} style={styles.pokemonImg} />
      </View>
      {/* Poke Datos */}
      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator color={color} size={50} />
        </View>
      ) : (
        <PokeDetails pokemon={pokemonFull} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 370,
    zIndex: 9999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backBtn: {
    position: 'absolute',
    left: 20,
  },
  pokeName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -22,
    opacity: 0.7,
  },
  pokemonImg: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -18,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
