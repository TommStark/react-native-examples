/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useRef, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {
  PokemonPagResponse,
  Result,
  SimplePokemon,
} from '../interfaces/PokemonInterfaces';

export const usePokemonPaginated = () => {
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');
  const [isLoading, setisLoading] = useState(true);

  // eslint-disable-next-line prettier/prettier
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);

  const loadPokemons = async () => {
    setisLoading(true);
    const resp = await pokemonApi.get<PokemonPagResponse>(nextPageUrl.current);
    nextPageUrl.current = resp.data.next;
    mapPokemonList(resp.data.results);
  };

  const mapPokemonList = (pokeList: Result[]) => {
    const newPokeList: SimplePokemon[] = pokeList.map(({name, url}) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return {name, picture, id};
    });

    setSimplePokemonList([...simplePokemonList, ...newPokeList]);
    setisLoading(false);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {simplePokemonList, isLoading, loadPokemons};
};
