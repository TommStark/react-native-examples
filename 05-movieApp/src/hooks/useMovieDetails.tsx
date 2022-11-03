/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import movieDb from '../api/movieDB';
import {CreditsResponse, Cast} from '../interfaces/creditsInterface';
import {MovieFull} from '../interfaces/movieInterface';
interface MovieDetails {
  cast: Cast[];
  isLoading: boolean;
  fullMovie?: MovieFull;
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    cast: [],
  });

  const getMovieDetails = async () => {
    const fullMovie = movieDb.get<MovieFull>(`/${movieId}`);
    const cast = movieDb.get<CreditsResponse>(`/${movieId}/credits`);

    const [castResp, movieDetailResp] = await Promise.all([cast, fullMovie]);

    setState({
      cast: castResp.data.cast,
      isLoading: false,
      fullMovie: movieDetailResp.data,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {...state};
};
