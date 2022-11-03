/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {ActivityIndicator, Dimensions, ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {GradientBackGround} from '../components/GradientBackGround';
import {HorizontalSlider} from '../components/HorizontalSlider';

import {MovieCard} from '../components/MovieCard';
import {useMovies} from '../hooks/useMovies';
import {gerColors} from '../helpers/gerColors';
import {GradientContext} from '../context/GradientContext';
import {useEffect} from 'react';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {isLoading, popular, nowPlaying, topRated, upComing} = useMovies();
  const {top} = useSafeAreaInsets();
  const {setMainColors} = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primary = 'green', secondary = 'orange'] = await gerColors(uri);
    setMainColors({primary, secondary});
  };

  useEffect(() => {
    if (nowPlaying.length) {
      getPosterColors(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <GradientBackGround>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          {/* playing now movies */}
          <View style={{height: 440}}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any) => <MovieCard movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>
          {/* popular movies */}
          <HorizontalSlider title="Popular movies" movies={popular} />
          <HorizontalSlider title="Top Rated" movies={topRated} />
          <HorizontalSlider title="Upcoming" movies={upComing} />
        </View>
      </ScrollView>
    </GradientBackGround>
  );
};
