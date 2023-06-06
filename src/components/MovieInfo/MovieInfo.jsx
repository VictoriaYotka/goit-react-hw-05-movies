import MovieInfoComponent from 'components/MovieInfoComponent/MovieInfoComponent'
import css from './MovieInfo.module.css'

const MovieInfo = ({poster, title, rating, overview, genres}) => {
  return (
    <div className={css.wrapper}>
        <div>
          <img src={poster} alt="poster" width='320'/>
        </div>

        <div>
          <h2>{title}</h2>
          {rating !== 0
          ? <h5 className={css.rating}>Rating: {rating} / 10</h5>
          : null
          }

          {overview && <>
            <MovieInfoComponent  title='Overview' info={overview}/>
            </>}

          {genres && <>
            <MovieInfoComponent  title='Genres' info={genres}/>
            </>}

        </div>
      </div>
  )
}

export default MovieInfo