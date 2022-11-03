/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SimplePokemon} from '../interfaces/PokemonInterfaces';
import {FadeInImage} from './FadeInImage';
import {useState, useEffect, useRef} from 'react';
import ImageColors from 'react-native-image-colors';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

interface Props {
  pokemon: SimplePokemon;
}

export const PokeCard = ({pokemon}: Props) => {
  const [bgColor, setBgColor] = useState('grey');

  const navigation = useNavigation();

  const isMounted = useRef(true);

  const getImgColor = () => {
    ImageColors.getColors(pokemon.picture, {
      fallback: 'grey',
    }).then(colors => {
      switch (colors.platform) {
        case 'android':
          setBgColor(colors.dominant || 'grey');
          break;
        case 'ios':
          setBgColor(colors.background!);
          break;
      }
    });
  };

  useEffect(() => {
    if (!isMounted.current) {
      return;
    }
    getImgColor();
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate(
          'PokemonScreen' as never,
          {
            simplePokemon: pokemon,
            color: bgColor,
          } as never,
        )
      }>
      <View
        style={{
          ...stylesCard.cardContainer,
          width: windowWidth * 0.4,
          backgroundColor: bgColor,
        }}>
        <View>
          <Text style={{...stylesCard.text}}>
            {pokemon.name}
            {'\n#' + pokemon.id}
          </Text>
        </View>
        <View style={stylesCard.pokeContainer}>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={stylesCard.pokebola}
          />
        </View>
        <FadeInImage uri={pokemon.picture} style={stylesCard.pokeImage} />
      </View>
    </TouchableOpacity>
  );
};

const stylesCard = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 20,
    backgroundColor: 'grey',
    height: 120,
    width: 150,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  text: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokeContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
  },
  pokebola: {
    width: 100,
    height: 100,
    opacity: 0.5,
    position: 'absolute',
    bottom: -25,
    right: -25,
  },
  pokeImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    bottom: -5,
    right: -8,
  },
});
