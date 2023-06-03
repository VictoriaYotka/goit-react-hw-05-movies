import fetchFunc from "components/services"
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// overview: "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes."
// poster_path: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"
// title: "John Wick: Chapter 4"
// vote_average: 7.992

const Home = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
   fetchFunc('trending/all/day')
  .then(({results}) => setTrends([...results])
  )
  .catch(console.log);
  }, [])
  
  return (
    <div>
      <ul>
        {trends.map(({id, title}) => <li key={id}><NavLink to={id}>{title}</NavLink></li>)}
      </ul>
    </div>
  )
}

export default Home