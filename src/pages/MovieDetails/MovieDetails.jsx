import { Outlet, NavLink, useParams, useLocation } from "react-router-dom"
import { Suspense } from "react";
import { useState, useEffect } from "react";
import fetchFunc from "components/services";

const MovieDetails = () => {
  const {movieId} = useParams();

const [title, setTitle] = useState('');
const [poster, setPoster] = useState('')
const [overview, setOverview] = useState('');
const [genres, setGenres] = useState('');
const [rating, setRating] = useState('')

const location = useLocation();
const goBackPath =  location.state?.from ?? '/';

useEffect(() => {
    fetchFunc(`/movie/${movieId}?append_to_response=poster_path`)
    .then((data) => {
      setTitle(data.title);
      setPoster(`https://image.tmdb.org/t/p/w500${data.poster_path}`)
      setOverview(data.overview);
      setGenres(data.genres.map(genre => genre.name).join(', '));
      setRating(data.vote_average.toFixed(1));
      console.log(data)
    })
    .catch(console.log)
}, [movieId])

  return (
    <>
    <div>
      <NavLink to={goBackPath}> Go back</NavLink>
      <div><img src={poster} alt="poster" width='120'/></div>
      <div>
        <h2>{title}</h2>
        {rating && 
        <p>Rating: {rating}</p>
      }
      {overview && 
      <>
      <h4>Overview</h4>
        <p>{overview}</p>
        </>
      }
      {genres && 
      <>
      <h4>Genres</h4>
        <p>{genres}</p>
        </>
      }
      </div>
    </div>

    <ul>
      <li><NavLink to="cast">Cast</NavLink></li>
      <li><NavLink to="reviews">Reviews</NavLink></li>
    </ul>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default MovieDetails