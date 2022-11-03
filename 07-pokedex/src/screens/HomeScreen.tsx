/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/AppTheme';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {PokeCard} from '../components/PokeCard';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();

  return (
    <>
      <View>
        <Image
          source={require('../assets/pokebola.png')}
          style={styles.pokebolaBG}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ListHeaderComponent={
            <Text
              style={{
                ...styles.globalMargin,
                ...styles.text,
                top: top + 20,
                marginBottom: top + 20,
                paddingBottom: 10,
              }}>
              {' '}
              Pokedex{' '}
            </Text>
          }
          data={simplePokemonList}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <PokeCard pokemon={item} />;
          }}
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator style={{height: 100}} size={20} color="grey" />
          }
        />
      </View>
    </>
  );
};
