import fetchFunc from "components/services"
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Home = () => {
  const [trends, setTrends] = useState([]);

  const location = useLocation();

  useEffect(() => {
   fetchFunc('trending/all/day')
  .then(({results}) => setTrends([...results])
  )
  .catch(console.log);
  }, [])
  
  return (
    <div>
      <ul>
        {trends.map(({id, title}) => <li key={id}><NavLink to={`/movies/${id}`} state={{ from: location }}>{title}</NavLink></li>)}
      </ul>
    </div>
  )
}

export default Home