import MoviesList from "../../components/MoviesList/MoviesList";
import { useState, useEffect } from "react";
import getTrandingMovies from "../../services/movieApi";
// const BASE_URL = "https://image.tmdb.org/t/p/";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrandingMovies().then((films) => setMovies(films.results));
  }, []);

  // async function onFetchTrandingMovies() {
  //   try {
  //     setReqStatus("pending");
  //     const movies = await fetchTrandingMovies();
  //     setReqStatus("resolve");
  //     if (movies.length === 0) {
  //       toast.error("Oop, no movies!");
  //     }
  //     setMovies(movies);
  //   } catch (error) {
  //     setReqStatus("rejected");
  //     toast.error("Oops, no match");
  //   }
  // }
  // onFetchTrandingMovies();

  return (
    <>
      <h1>HomePage</h1>
      <MoviesList movies={movies} />
    </>
  );
};

export default HomePage;
