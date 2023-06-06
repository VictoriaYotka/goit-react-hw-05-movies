import { NavLink } from 'react-router-dom'
import css from './Header.module.css'

const Header = () => {
  return (
    <header className={css.nav_wrapper}>
        <p className={css.logo}>Movies<span className={css.logo_part}>Search</span></p>
        <NavLink to="/" className={css.link}>Home</NavLink>
        <NavLink to="/movies" className={css.link}>Movies</NavLink>
      </header>
  )
}

export default Header

