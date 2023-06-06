import { useState, useEffect } from "react";
import fetchFunc from "components/services";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import Loading from "components/Loading/Loading";
import List from "components/List/List";
import SearchForm from "components/SearchForm/SearchForm";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('search') ?? '');
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  
useEffect(() => {
  if(query !== '') {
    setIsLoading(true);
    fetchFunc(`search/movie?query=${query}`)
    .then(({results}) => {
      setMovies([...results])
      if(results.length === 0) alert("We've found nothing. Try another query!")})
    .catch(console.log)
    .finally(() => setIsLoading(false))
  }}, [query])

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.movie.value.trim();
  
    if(query === '') return
  
    setSearchParams({search: query})
    setQuery(query);
    event.target.reset();
  }

  const moviesList = movies.map(({id, title}) => <li key={id} className='list_item'>
    <NavLink to={`/movies/${id}`} state={{ from: location }} className='link'>{title}</NavLink>
    </li>);

  return (
    <div>
      <SearchForm handleSubmit={handleSubmit}/>
      {isLoading && <Loading/>}
      {movies && <List children={moviesList}/>}
    </div>
  )
}

export default Movies