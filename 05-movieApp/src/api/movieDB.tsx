import axios from 'axios';

const movieDb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '5381c91265b0c5fb7a09098fb50d3a5d',
    language: 'es-ES',
  },
});

export default movieDb;
