import { Outlet, NavLink } from "react-router-dom"
import { Suspense } from "react";
import css from './SharedLayout.module.css'

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <div className={css.nav_wrapper}>
        <p className={css.logo}>Movies<span className={css.logo_part}>Search</span></p>
        <NavLink to="/" className={css.link}>Home</NavLink>
        <NavLink to="/movies" className={css.link}>Movies</NavLink>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default SharedLayout