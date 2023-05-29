import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

import SharedLayout from "../pages/SharedLayout/SharedLayout";
const Movies = lazy(() => import("../pages/Movies/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("../pages/Cast/Cast"));
const Reviews = lazy(() => import("../pages/Reviews/Reviews"));
const Home = lazy(() => import("../pages/Home/Home"));

// import Home from "../pages/Home/Home";
// import Movies from "../pages/Movies/Movies";
// import MovieDetails from "../pages/MovieDetails/MovieDetails";
// import Cast from "../pages/Cast/Cast";
// import Reviews from "../pages/Reviews/Reviews";



// const movieId = 550
// const oneMovieFetch = `movie/${movieId}`;
// fetchFunc(oneMovieFetch);

// const trendMoviesFetch = 'trending/all/day';
// fetchFunc(trendMoviesFetch);

// const moviesSearch = 'search/movie';
// fetchFunc(moviesSearch);

export const App = () => {

  return (
    <>
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:movieId" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<Home/>}/>
      </Route>
      
    </Routes>
      
    </>
  );
};

