import { Outlet, NavLink } from "react-router-dom"
import { Suspense } from "react";

const MovieDetails = () => {
  return (
    <div>MovieDetails
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default MovieDetails