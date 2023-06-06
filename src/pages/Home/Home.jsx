import fetchFunc from "components/services"
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import css from './Home.module.css'
import Loading from "components/Loading/Loading";
import List from "components/List/List";
import Error from "components/Error/Error";

const Home = () => {
  const [trends, setTrends] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    fetchFunc('trending/all/day')
    .then(({results}) => {
      // console.log(results);
      setTrends([...results])})
    .catch(() => setError(true))
    .finally(() => setIsLoading(false));
  }, [])

  const trendsList = trends.map(({id, title, name}) => <li key={id} className='list_item'>
    <NavLink to={`/movies/${id}`} state={{ from: location }} className='link'>{title ?? name}</NavLink>
    </li>);
  
  return (
    <div>
      <h2 className={css.title}>Popular today:</h2>
      {isLoading && <Loading/>}
      {error && <Error/>}
      <List children={trendsList}/>
    </div>
  )
}

export default Home