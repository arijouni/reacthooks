import React from 'react'
import ReactStars from "react-stars";
import "./style.css"
function MovieItem2({ rating, title, posterUr1, description }) {
  return (
    <div className="movie-item-2">
      <div
        className="movie-item-cover"
        style={{ backgroundImage: `url(${posterUr1})` }}
      ></div>
      <div className="movie-item-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <div>
          <ReactStars
            count={10}
            size={25}
            color2={"black"}
            half={false}
            edit={false}
            value={rating}
          />
        </div>
      </div>
    </div>
  );
}

export default MovieItem2