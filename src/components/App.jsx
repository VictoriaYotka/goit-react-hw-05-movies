import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import Cast from "../pages/Cast/Cast";
import Reviews from "../pages/Reviews/Reviews";
import SharedLayout from "../pages/SharedLayout/SharedLayout";


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

