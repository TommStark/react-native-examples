/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {PokemonFull} from '../interfaces/PokemonInterfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: PokemonFull;
}

export const PokeDetails = ({pokemon}: Props) => {
  const librasToKg = (lib: number) => {
    return Math.floor(lib / 2.2046);
  };

  return (
    <ScrollView
      style={{...StyleSheet.absoluteFillObject}}
      showsVerticalScrollIndicator={false}>
      <View style={{...styles.container, marginTop: 370}}>
        <Text style={{...styles.title}}>{pokemon.name}</Text>
        {/* Types and weight*/}
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => (
            <Text
              key={type.name}
              style={{...styles.regularText, marginRight: 10}}>
              {type.name}
            </Text>
          ))}
        </View>
        <Text style={{...styles.title}}>Weight</Text>
        <Text style={{...styles.regularText}}>
          {librasToKg(pokemon.weight)} Kg
        </Text>
        {/* SPRITES */}
        <Text style={{...styles.title}}>Sprites</Text>
        <View style={{flexDirection: 'row'}}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <FadeInImage
              uri={pokemon.sprites.front_default}
              style={{...styles.basicSprites}}
            />
            <FadeInImage
              uri={pokemon.sprites.back_default}
              style={{...styles.basicSprites}}
            />
            <FadeInImage
              uri={pokemon.sprites.front_shiny}
              style={{...styles.basicSprites}}
            />
            <FadeInImage
              uri={pokemon.sprites.back_shiny}
              style={{...styles.basicSprites}}
            />
          </ScrollView>
        </View>
        {/* ABILITIES */}
        <Text style={{...styles.title}}>Basic abilities</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities.map(({ability}) => (
            <Text
              key={ability.name}
              style={{...styles.regularText, marginRight: 10}}>
              {ability.name}
            </Text>
          ))}
        </View>
        {/* MOVES */}
        <Text style={{...styles.title}}>Moves</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {pokemon.moves.map(({move}) => (
            <Text
              key={move.name}
              style={{...styles.regularText, marginRight: 10}}>
              {move.name}
            </Text>
          ))}
        </View>
        {/* MOVES */}
        <Text style={{...styles.title}}>Stats</Text>
        <View>
          {pokemon.stats.map(stats => (
            <View key={stats.stat.name} style={{flexDirection: 'row'}}>
              <Text
                style={{...styles.regularText, marginRight: 10, width: 180}}>
                {stats.stat.name}
              </Text>

              <Text style={{...styles.regularText, fontWeight: 'bold'}}>
                {stats.base_stat}
              </Text>
            </View>
          ))}
        </View>
        <View style={{marginBottom: 80, alignItems: 'center'}}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={{...styles.basicSprites}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {marginHorizontal: 20},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  regularText: {
    fontSize: 19,
  },
  basicSprites: {
    width: 100,
    height: 100,
  },
});
