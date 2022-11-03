/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Movie} from '../interfaces/movieInterface';
import {View, Text, FlatList} from 'react-native';
import {MovieCard} from './MovieCard';

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View style={{height: title ? 260 : 215}}>
      {title ? (
        <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 10}}>
          {title}
        </Text>
      ) : null}

      <FlatList
        data={movies}
        horizontal
        renderItem={({item}: any) => (
          <MovieCard movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
