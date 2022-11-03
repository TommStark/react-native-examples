/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';
import {MovieFull} from '../interfaces/movieInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormater from 'currency-formatter';
import {CastCard} from './CastCard';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        {/* vote average */}
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" size={18} color="grey" />
          <Text style={{marginLeft: 5}}>{movieFull.vote_average}</Text>
          <Text style={{marginLeft: 5}}>
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>
        {/* History */}
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          History
        </Text>
        <Text style={{fontSize: 16}}>{movieFull.overview}</Text>
        {/* Budget */}
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Budget
        </Text>
        <Text style={{fontSize: 18}}>
          {currencyFormater.format(movieFull.budget, {code: 'USD'})}
        </Text>
        {/* CASTING */}
        <View style={{marginTop: 10, marginBottom: 100}}>
          <Text
            style={{
              fontSize: 23,
              marginTop: 10,
              fontWeight: 'bold',
              marginHorizontal: 20,
            }}>
            Casting
          </Text>

          <FlatList
            data={cast}
            keyExtractor={item => item.id.toString()}
            horizontal
            renderItem={({item}) => <CastCard actor={item} />}
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 15}}
          />
        </View>
      </View>
    </>
  );
};
