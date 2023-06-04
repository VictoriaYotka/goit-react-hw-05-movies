import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchFunc from "components/services";

const Reviews = () => {
  const {movieId} = useParams();

  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetchFunc(`movie/${movieId}/reviews`)
    .then(({results}) => {
      setReviews(results)
      // console.log(results)
    })
  }, [movieId])

  
    if(reviews.length !== 0)
    {return (<ul>
      {reviews.map(({author, id, content}) => {return ( <li key={id}>
        <h5>Author: {author}</h5>
        <p>{content}</p>
      </li>)})}
      </ul>)} else {
      return (<p>No reviews</p>)}
    
  
}

export default Reviews