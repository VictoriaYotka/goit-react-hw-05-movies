import fetchFunc from "components/services"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

const Cast = () => {
  const {movieId} = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchFunc(`movie/${movieId}/credits`)
    .then(({cast}) => {
      setCast(cast);
      // console.log(cast)
    })
    .catch(console.log)
  .finally(() => setIsLoading(false));
  }, [movieId])
  
return (
  <>
  {isLoading && <p>Loading...</p>}
  {cast.length !== 0
    ? <ul>
    {cast.map(({character, id, name, profile_path}) => {return (<li key={id}>
      <img src={profile_path !== null 
        ? `https://image.tmdb.org/t/p/w500${profile_path}` 
        : 'https://thumbs.dreamstime.com/b/profile-anonymous-face-icon-gray-silhouette-person-male-businessman-profile-default-avatar-photo-placeholder-isolated-white-117831744.jpg'
        } alt={name} width={120} />
      <span>{name}</span>
      <span>{character}</span>
    </li>)})}
  </ul>

  : <p>No information</p>
  }
  </>
)
}

export default Cast