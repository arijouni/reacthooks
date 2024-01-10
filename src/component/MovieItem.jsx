import React from "react";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
import "./style.css";
function MovieItem({ rating, title, posterUr1, description,id }) {
  return (
    <Link className="movie-item" to={`movies/${id}`}>
      <div>
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
    </Link>
  );
}

export default MovieItem;
