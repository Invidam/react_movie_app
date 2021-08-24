import React from "react";
// import PropTypes from "prop-types";
import axios from "axios";
import Movie from "../components/Movies.js";
import "./Home.css";
class Home extends React.Component {
  state = {
    isLoading: true,
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    console.log(movies);
    this.setState({ movies, isLoading: false });
    return movies;
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading . . .</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie, idx) => (
              <Movie
                key={movie.id}
                rank={idx + 1}
                id={movie.id}
                rating={movie.rating}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
