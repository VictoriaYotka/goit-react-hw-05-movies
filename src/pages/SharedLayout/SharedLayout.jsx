import { Outlet, NavLink } from "react-router-dom"
import { Suspense } from "react";

const SharedLayout = () => {
  return (
    <div>SharedLayout
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
      </Suspense>
    </div>
  )
}

export default SharedLayout