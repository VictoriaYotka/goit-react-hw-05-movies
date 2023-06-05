import { useState, useEffect } from "react";
import fetchFunc from "components/services";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import css from './Movies.module.css'

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('search') ?? '');
  const [isLoading, setIsLoading] = useState(false);
  const [films, setFilms] = useState([]);
  const location = useLocation();
  
useEffect(() => {
  if(query !== '') {
    setIsLoading(true);
    fetchFunc(`search/movie?query=${query}`)
    .then(({results}) => {
      setFilms([...results])
      if(results.length === 0) alert("We've found nothing. Try another query!")})
    .catch(console.log)
    .finally(() => setIsLoading(false))
  }}, [query])
  //   const nextParams = query !== "" ? { search } : {};
  //   setSearchParams(nextParams);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.film.value.trim();
  
    if(query === '') return
  
    setSearchParams({search: query})
    setQuery(query);
    event.target.reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="film" type="text" autoFocus placeholder="Movie title" className={css.input}/>
        <button type="submit" className={css.button}>Search</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {films && <ul>
        {films.map(({id, title}) => <li key={id} className='list_item'><NavLink to={`/movies/${id}`} state={{ from: location }} className='link'>{title}</NavLink></li>)}
        </ul>}
    </div>
  )
}

export default Movies