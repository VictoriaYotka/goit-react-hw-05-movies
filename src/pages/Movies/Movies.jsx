import { useState, useEffect } from "react";
import fetchFunc from "components/services";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const [query, setQuery] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  const [films, setFilms] = useState([]);
  
useEffect(() => {
  if(query !== '') {
    // setIsLoading(true);
    fetchFunc(`search/movie?query=${query}`)
    .then(({results}) => {
      setFilms([...results])
      if(results.length === 0) alert("We've found nothing. Try another query!")})
    .catch(console.log)
    // .finally(setIsLoading(false))
  }}, [query])

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.film.value.trim();
  
    if(query === '') return
  
    setQuery(query);
    event.target.reset();
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input name="film" type="text" autoFocus />
      <button type="submit">Search</button>
    </form>

    {/* {isLoading && <p>Loading...</p>} */}

    {films && <ul>
      {films.map(({id, title}) => <li key={id}><NavLink>{title}</NavLink></li>)}
      </ul>}

    </>
  )
}

export default Movies