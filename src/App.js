import "./App.css";
import { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
// import MoviesPage from "./views/MoviesPage/MoviesPage";
// import MovieDetailsPage from "./views/MovieDetailsPage/MovieDetailsPage";
import NavBar from "./components/Navigation/Navigation";

const MoviesPage = lazy(() =>
  import("./views/MoviesPage/MoviesPage" /*webpackChunkName: "moviesPage" */)
);

const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage/MovieDetailsPage" /*webpackChunkName: "movieDetails" */
  )
);

function App() {
  return (
    <div className="App">
      <NavBar />
      <Suspense fallback={<h1>Loading..</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
