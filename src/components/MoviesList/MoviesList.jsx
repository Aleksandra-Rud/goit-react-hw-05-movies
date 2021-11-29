import { Link } from "react-router-dom";
import s from "./MoviesList.module.css";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://image.tmdb.org/t/p/w500";

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={s.moviesList}>
      {movies.map((movie) => {
        return (
          <li key={movie.id} className={s.movieItem}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: {
                  from:
                    location.pathname !== "/"
                      ? location.pathname + location.search
                      : location.pathname,
                },
              }}
            >
              <img src={`${BASE_URL}${movie.poster_path}`} alt="" width="200" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
