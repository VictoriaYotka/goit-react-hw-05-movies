import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchFunc from "components/services";
import css from './Reviews.module.css'
import Loading from "components/Loading/Loading";
import Error from "components/Error/Error";
import List from "components/List/List";

const Reviews = () => {
  const {movieId} = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    fetchFunc(`movie/${movieId}/reviews`)
    .then(({results}) => {
      setReviews(results)
      // console.log(results)
    })
    .catch(() => setError(true))
    .finally(() => setIsLoading(false))
  }, [movieId])

  const reviewsList = reviews.map(({author, id, content}) => {return ( 
    <li key={id} className={css.item}>
      <h5>Author: {author}</h5>
      <p>{content}</p>
    </li>)})

  return (
    <>
      {isLoading && <Loading/>}
      {error && <Error/>}
      {reviews.length !== 0
        ? <List children={reviewsList}/>
        : <p>No information</p>
      }
    </>
  )
}

export default Reviews