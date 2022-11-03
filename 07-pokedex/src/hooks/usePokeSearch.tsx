/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {
  PokemonPagResponse,
  Result,
  SimplePokemon,
} from '../interfaces/PokemonInterfaces';

export const usePokeSearch = () => {
  const [isFetching, setIsFetching] = useState(true);

  // eslint-disable-next-line prettier/prettier
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);

  const loadPokemons = async () => {
    const resp = await pokemonApi.get<PokemonPagResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=1200',
    );
    mapPokemonList(resp.data.results);
  };

  const mapPokemonList = (pokeList: Result[]) => {
    const newPokeList: SimplePokemon[] = pokeList.map(({name, url}) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return {name, picture, id};
    });

    setSimplePokemonList(newPokeList);
    setIsFetching(false);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {simplePokemonList, isFetching};
};
