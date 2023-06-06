import { Outlet, Link, useParams, useLocation } from "react-router-dom"
import { Suspense, useRef } from "react";
import { useState, useEffect } from "react";
import fetchFunc from "components/services";
import css from './MovieDetails.module.css'
import Loading from "components/Loading/Loading";
import MovieInfo from "components/MovieInfo/MovieInfo";
import MovieInfoSeeMore from "components/MovieInfoSeeMore/MovieInfoSeeMore";

const MovieDetails = () => {
  const {movieId} = useParams();
  const [title, setTitle] = useState('');
  const [poster, setPoster] = useState('')
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState('');
  const [rating, setRating] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useRef(useLocation());
  const goBackPath =  location.current.state?.from ?? '/';


  useEffect(() => {
      setIsLoading(true);
      setError(false);
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
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, [movieId])

  return (
    <div>
      <Link to={goBackPath} className={css.button}>← Go back</Link>
      
      {isLoading && <Loading/>}
      {error && <p>Oops, something went wrong. Try again!</p>}
      
      <MovieInfo 
        poster={poster} title={title} rating={rating} overview={overview} genres={genres}
      />

      <MovieInfoSeeMore />

      <Suspense fallback={<Loading/>}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default MovieDetails