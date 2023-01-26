import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    } //클릭하지않고 url로 이동했을 때 홈페이지로 리다이렉트
  }
  render() {
    const { location } = this.props;
    return (
      <div className="detail_movie">
        <img
          src={location.state.poster}
          alt={location.state.title}
          title={location.state.title}
        />
        <div className="detail_text">
          <h1 className="detail_title">{location.state.title}</h1>
          <h5 className="movie__year">{location.state.year}</h5>
          <ul className="genres">
            {location.state.genres.map((genres, index) => (
              <li key={index} className="genres__genres">
                {genres}
              </li>
            ))}
          </ul>
          <p className="movie-summary">{location.state.summary}</p>
        </div>
      </div>
    );
  }
}

export default Detail;
