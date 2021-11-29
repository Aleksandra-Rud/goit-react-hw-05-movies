// import { Button } from "@mui/material";
import { useState, useEffect, lazy, Suspense } from "react";
import { useParams } from "react-router";
import {
  useHistory,
  useLocation,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";
import { fetchMovieDetails } from "../../services/movieApi";
import s from "./MovieDetailsPage.module.css";

const BASE_URL = "https://image.tmdb.org/t/p/w500";

const Cast = lazy(() => import("../Cast/Cast" /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import("../Reviews/Reviews" /*webpackChunkName: "reviews" */)
);

const MovieDetailsPage = () => {
  const [film, setFilm] = useState(null);
  const { movieId } = useParams();
  // console.log(params);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetails(movieId).then((movie) => setFilm(movie));
  }, [movieId]);

  if (film === null) {
    return <h1>no data awailable</h1>;
  }

  const handleBack = () => {
    history.push(location?.state?.from);
  };

  return (
    <>
      <div className="block">
        <button type="button" onClick={handleBack} className="button">
          Go back
        </button>
        <h1 className={s.title}>{film.title}</h1>
        <img src={`${BASE_URL}${film.backdrop_path}`} alt="" />
        <p className="s.textOV">{film.overview}</p>
      </div>
      <ul>
        <li className={s.link}>
          <NavLink
            to={{
              pathname: `/movies/${movieId}/cast`,
              state: { from: location.state.from },
            }}
            className={s.link}
            activeClassName={s.activeLink}
          >
            Cast
          </NavLink>
        </li>
        <li className={s.link}>
          <NavLink
            to={{
              pathname: `/movies/${movieId}/reviews`,
              state: { from: location.state.from },
            }}
            className={s.link}
            activeClassName={s.activeLink}
          >
            Reviews
          </NavLink>
        </li>
      </ul>

      <Suspense fallback={<h1>Loading... </h1>}>
        <Switch>
          <Route path={`/movies/${movieId}/cast`}>
            <Cast movieId={movieId} />
          </Route>

          <Route path={`/movies/${movieId}/reviews`}>
            <Reviews movieId={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
