import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import axios from "axios";
import "./Movie.css";

function Movie({ rank, id, year, title, rating, summary, poster, genres }) {
  return (
    <div className="movies_movie">
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: { rank, id, year, title, rating, summary, poster, genres },
        }}
      >
        <img src={poster} className="movie_poster" alt="poster" />
        <div className="movie_contents">
          <h2 className="movie_title">
            <span className="movie_title_rank">{rank}. </span>
            {title}
            <span className="movie_title_year">({year})</span>
          </h2>
          <p className="movie_summary">
            {" "}
            {`${summary.slice(0, 220)}  ${summary.length < 220 ? "" : "..."}`}
          </p>
          <p className="movie_rating">
            {" "}
            <span className="movie_rating-star">⭐</span>
            {(rating / 2).toFixed(1)} / 5.0
          </p>
          <ul className="movie_genres">
            {genres.slice(0, 4).map((genre, idx) => {
              return (
                <li className="movie_genre" key={idx}>
                  {genre}
                </li>
              );
            })}
          </ul>
          {/* <h3 className="movie_title"> {title}</h3>
      <h3 className="movie_title"> {title}</h3> */}
        </div>
      </Link>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  rank: PropTypes.number,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
