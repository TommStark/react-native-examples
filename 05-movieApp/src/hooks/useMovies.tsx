import {useEffect, useState} from 'react';
import movieDb from '../api/movieDB';
import {Movie, MovieInterface} from '../interfaces/movieInterface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upComing: Movie[];
}

export const useMovies = () => {
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upComing: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  const getNowPlaying = async () => {
    const now_playing = movieDb.get<MovieInterface>('/now_playing');
    const popular = movieDb.get<MovieInterface>('/popular');
    const topRated = movieDb.get<MovieInterface>('/top_rated');
    const upcoming = movieDb.get<MovieInterface>('/upcoming');

    const resps = await Promise.all([now_playing, popular, topRated, upcoming]);

    setMoviesState({
      nowPlaying: resps[0].data.results,
      popular: resps[1].data.results,
      topRated: resps[2].data.results,
      upComing: resps[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getNowPlaying();
  }, []);

  return {...moviesState, isLoading};
};
