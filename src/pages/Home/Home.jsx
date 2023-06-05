import fetchFunc from "components/services"
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import css from './Home.module.css'

const Home = () => {
  const [trends, setTrends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    fetchFunc('trending/all/day')
    .then(({results}) => {
      // console.log(results);
      setTrends([...results])})
    .catch(console.log)
    .finally(() => setIsLoading(false));
  }, [])
  
  return (
    <div>
      <h2 className={css.title}>Popular today:</h2>
      {isLoading && <p>Loading...</p>}
      <ul className={css.list}>
        {trends.map(({id, title, name}) => <li key={id} className='list_item'><NavLink to={`/movies/${id}`} state={{ from: location }} className='link'>{title ?? name}</NavLink></li>)}
      </ul>
    </div>
  )
}

export default Home