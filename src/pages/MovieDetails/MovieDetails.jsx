import { Outlet, NavLink, Link, useParams, useLocation } from "react-router-dom"
import { Suspense, useRef } from "react";
import { useState, useEffect } from "react";
import fetchFunc from "components/services";
import css from './MovieDetails.module.css'
import Loading from "components/Loading/Loading";

const MovieDetails = () => {
  const {movieId} = useParams();
  const [title, setTitle] = useState('');
  const [poster, setPoster] = useState('')
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState('');
  const [rating, setRating] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const location = useRef(useLocation());
  const goBackPath =  location.current.state?.from ?? '/';


  useEffect(() => {
      setIsLoading(true);
      fetchFunc(`/movie/${movieId}?append_to_response=poster_path`)
      .then((data) => {
        setTitle(data.title);
        setPoster(data.poster_path !== null 
          ?`https://image.tmdb.org/t/p/w500${data.poster_path}` 
          : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb17OLPVxDbgiMnuuXiy3uJoJaUQRsGB6y8Q&usqp=CAU')
        setOverview(data.overview);
        setGenres(data.genres.map(genre => genre.name).join(', '));
        setRating(data.vote_average !== 0 ? data.vote_average.toFixed(1) : 0);
        // console.log(data)
      })
      .catch(console.log)
      .finally(() => setIsLoading(false));
  }, [movieId])

  return (
    <div>
      <Link to={goBackPath} className={css.button}>← Go back</Link>
      {isLoading && <Loading/>}
      <div className={css.wrapper}>
        <div>
          <img src={poster} alt="poster" width='320'/>
        </div>
        <div>
          <h2 className={css.title}>{title}</h2>
          {rating !== 0
          ? <h5 className={css.rating}>Rating: {rating} / 10</h5>
          : null
          }
          {overview && <>
            <h4>Overview</h4>
            <p className={css.descr}>{overview}</p>
            </>}
          {genres && <>
            <h4>Genres</h4>
            <p>{genres}</p>
            </>}
        </div>
      </div>
      <h4>See more:</h4>
      <ul className={css.list}>
        <li className={css.link}><NavLink to="cast" >Cast</NavLink></li>
        <li className={css.link}><NavLink to="reviews" >Reviews</NavLink></li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default MovieDetails