import { Outlet, NavLink } from "react-router-dom"

const MovieDetails = () => {
  return (
    <div>MovieDetails
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
        <Outlet />
    </div>
  )
}

export default MovieDetails