import { Outlet, NavLink } from "react-router-dom"
const SharedLayout = () => {
  return (
    <div>SharedLayout
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <Outlet />
    </div>
  )
}

export default SharedLayout