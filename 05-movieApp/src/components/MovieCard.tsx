/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {useNavigation} from '@react-navigation/native';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}
type Nav = {
  navigate: (value: string, movie: Movie) => void;
};

export const MovieCard = ({movie, height = 420, width = 300}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation<Nav>();
  return (
    <TouchableOpacity
      style={{height, width, marginHorizontal: 8}}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('DetailsScreen', movie)}>
      <View style={styles.shadowImg}>
        <Image source={{uri}} style={styles.images} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  images: {
    flex: 1,
    borderRadius: 19,
  },
  container: {
    width: 300,
    height: 420,
  },
  shadowImg: {
    flex: 1,
    borderRadius: 19,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8.35,

    elevation: 10,
  },
});
