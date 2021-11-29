import { useState, useEffect } from "react";
import { fetchMovieReviews } from "../../services/movieApi";
import PropTypes from "prop-types";

function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchMovieReviews(movieId).then((response) => setReviews(response.results));
  }, [movieId]);
  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((item) => (
            <li key={item.id}>
              <p>
                <span>Author: </span>
                {item.author}
              </p>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h2>No reviews</h2>
      )}
    </>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Reviews;
