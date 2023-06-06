
import css from './movieInfoComponent.module.css'

const MovieInfoComponent = ({title, info}) => {
  return (
    <>
    <h4>{title}</h4>
    <p className={css.descr}>{info}</p>
    </>
  )
}

export default MovieInfoComponent