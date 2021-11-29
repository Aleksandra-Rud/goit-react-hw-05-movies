import axios from "axios";

// const BASE_URL = "https://image.tmdb.org/t/p/";
const API_KEY = "22c199c70cf21c77ac06b5d74d444545";
const language = "en-US";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

async function getTrandingMovies(page = 1) {
  const response = await axios.get(
    `trending/movie/day?api_key=${API_KEY}&language=${language}&page=${page}`
  );

  return await response.data;
}

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const fetchMovie = async (query) => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`
  );
  return response.data.results;
};

export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export default getTrandingMovies;
