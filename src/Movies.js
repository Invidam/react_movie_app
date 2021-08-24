import React from "react";
import PropTypes from "prop-types";
// import axios from "axios";

function Movie({ id, year, title, rating, summary, poster }) {
  return <h4>{title}</h4>;
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
