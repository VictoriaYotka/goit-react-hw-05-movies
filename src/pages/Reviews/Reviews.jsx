import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchFunc from "components/services";
import css from './Reviews.module.css'

const Reviews = () => {
  const {movieId} = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    setIsLoading(true);
    fetchFunc(`movie/${movieId}/reviews`)
    .then(({results}) => {
      setReviews(results)
      // console.log(results)
    })
    .catch(console.log)
    .finally(() => setIsLoading(false))
  }, [movieId])

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {reviews.length !== 0
        ? <ul>
            {reviews.map(({author, id, content}) => {return ( 
            <li key={id} className={css.item}>
              <h5>Author: {author}</h5>
              <p>{content}</p>
            </li>)})}
          </ul>
    
        : <p>No information</p>
      }
    </>
  )
}

export default Reviews