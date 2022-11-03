/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList, Dimensions, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchInput} from '../components/SearchInput';
import {usePokeSearch} from '../hooks/usePokeSearch';
import {styles} from '../theme/AppTheme';
import {PokeCard} from '../components/PokeCard';
import {Loading} from '../components/Loading';
import {useState, useEffect} from 'react';
import {SimplePokemon} from '../interfaces/PokemonInterfaces';

const width = Dimensions.get('window').width;

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = usePokeSearch();

  const [term, setTerm] = useState('');
  const [pokeFiltered, setPokeFiltered] = useState<SimplePokemon[]>([]);

  useEffect(() => {
    if (term.length === 0) {
      return setPokeFiltered([]);
    }

    if (isNaN(Number(term))) {
      setPokeFiltered(
        simplePokemonList.filter(poke =>
          poke.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()),
        ),
      );
    } else {
      const pokeById = simplePokemonList.find(poke => poke.id === term);
      setPokeFiltered(pokeById ? [pokeById] : []);
    }
  }, [term]);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View
      style={{
        flex: 1,
      }}>
      <SearchInput
        onDebounce={(value: string) => setTerm(value)}
        style={{
          position: 'absolute',
          zIndex: 99999,
          width: width - 40,
          top: Platform.OS === 'ios' ? top - 15 : top + 25,
        }}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListHeaderComponent={
          <Text
            style={{
              ...styles.globalMargin,
              ...styles.text,
              top: 20,
              marginBottom: 20,
              paddingBottom: 10,
              marginTop: Platform.OS === 'ios' ? top + 60 : top + 90,
            }}>
            {term.length > 0 ? (isNaN(Number(term)) ? term : `#${term}`) : null}
          </Text>
        }
        data={pokeFiltered}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <PokeCard pokemon={item} />;
        }}
      />
    </View>
  );
};
