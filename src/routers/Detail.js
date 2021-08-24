import React from "react";
import "./Detail.css";
// function Detail({ location: { state } }) {}

class Detail extends React.Component {
  componentDidMount() {
    const {
      location: { state },
      history,
    } = this.props;
    if (state === undefined) {
      history.push("/");
    }
  }
  render() {
    // console.log(state);
    const { location } = this.props;
    if (!location.state) return <span>잘못된 접근입니다.</span>;
    const {
      state: { poster, rank, year, summary, title, genres, rating },
    } = location;
    return (
      <div className="detail-page">
        <div className="movie-detail">
          <img
            src={poster}
            // src={poster.replace("medium", "large")}
            className="movie-detail_poster"
            alt="poster"
          />
          <div className="movie-detail_contents">
            <h2 className="movie-detail_title">
              <span className="movie-detail_title_rank">{rank}. </span>
              {title}
              <span className="movie-detail_title_year">({year})</span>
            </h2>
            <p className="movie-detail_summary">
              {" "}
              {`${summary.slice(0, 720)}  ${summary.length < 720 ? "" : "..."}`}
            </p>
            <p className="movie-detail_rating">
              {" "}
              <span className="movie-detail_rating-star">⭐</span>
              {(rating / 2).toFixed(1)} / 5.0
            </p>
            <ul className="movie-detail_genres">
              {genres.slice(0, 4).map((genre, idx) => {
                return (
                  <li className="movie-detail_genre" key={idx}>
                    {genre}
                  </li>
                );
              })}
            </ul>
            {/* <h3 className="movie_title"> {title}</h3>
      <h3 className="movie_title"> {title}</h3> */}
          </div>
        </div>
      </div>
    );
  }
}
export default Detail;
