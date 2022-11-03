/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

export const CastCard = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image source={{uri}} style={{width: 50, height: 50}} />
      )}
      <View style={styles.actorInfo}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}> {actor.name}</Text>
        <Text style={{fontSize: 15, opacity: 0.8}}> {actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 55,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8.35,

    elevation: 10,
    marginHorizontal: 20,
    paddingRight: 15,
  },
  actorInfo: {
    marginLeft: 10,
    paddingTop: 6,
  },
});
