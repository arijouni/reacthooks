import React, { useState } from "react";
import "./style.css";
import MovieItem from "./MovieItem";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Form, Input, Button, Rating } from "semantic-ui-react";
import MovieItem2 from "./MovieItem2";
import { Link } from "react-router-dom";

function MoviesList({ movies, search, rating, setMovies }) {
  const [newMovie, SetNewMovie] = useState({});
  console.log(newMovie);
  let data = [
    {
      title: "Love at First Sight",
      posterUr1:
        "https://www.themoviedb.org/t/p/original/zTTgI92GGVtYIGunown2oWOUDES.jpg",
      description:
        "a person or character feels an instant, extreme, and ultimately long-lasting romantic attraction for a stranger upon first seeing that stranger.",
      rating: 4,
    },
    {
      title: "See You on Venus",
      posterUr1:
        "https://m.media-amazon.com/images/M/MV5BZmZkYzMzNzctZDk5Yi00ZDY5LWIyN2UtNzgzZTZkNTNlNzg0XkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg",
      description:
        "Mia (Virginia Gardner) and Kyle (Alex Aiono) are two misfit American teens who travel to Spain in search of Mia's birth mother. ",
      rating: 6,
    },
    {
      title: "In Your Dreams",
      posterUr1:
        "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/a8f73b8fda4d86a12ec4f8e011c6eeec90d992033cd3b20b00f2c911e50bc013._RI_TTW_.jpg",
      description:
        "something you say to someone who has just told you about something they are hoping for, in order to show that you do not believe it will happen: Dave, buy you a car? In your dreams!",
      rating: 4,
    },
    {
      title: "Me Before You",
      posterUr1:
        "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/9d483cc05ef029d9379d098f2c0a00664a0e69944d61696f89119e2b31c66b9a._RI_TTW_.jpg",
      description:
        "a 26-year-old woman who is creative, talented, and funny but underestimates herself and has few ambitions.",
      rating: 5,
    },
    {
      title: "Beauty and the Beast",
      posterUr1:
        "https://m.media-amazon.com/images/M/MV5BMTUwNjUxMTM4NV5BMl5BanBnXkFtZTgwODExMDQzMTI@._V1_FMjpg_UX1000_.jpg",
      description:
        "Beauty and the Beast is a story about a young prince that was cast under a spell. His spell could only be broken with true love.",
      rating: 5,
    },
    {
      title: "After",
      posterUr1:
        "https://m.media-amazon.com/images/I/71SZrXPxq5L._AC_UF1000,1000_QL80_.jpg",
      description:
        "A young woman falls for a guy with a dark secret and the two embark on a rocky relationship.",
      rating: 4,
    },
  ];
  const options = {
    perPage: 3,
    focus: 0,
  };
  return (
    <div className="movies-list">
      <Form>
        <Form.Group widths="equal">
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            placeholder="Title"
            onChange={(e) => {
              SetNewMovie({ ...newMovie, title: e.target.value });
            }}
          />
          <Form.Field
            control={Input}
            placeholder="Poster url"
            onChange={(e) => {
              SetNewMovie({ ...newMovie, posterUr1: e.target.value });
            }}
          />
          <Form.Field
            type="number"
            min={1}
            max={10}
            control={Input}
            placeholder="Rating"
            onChange={(e) => {
              SetNewMovie({ ...newMovie, rating: e.target.value });
            }}
          />

          <Form.Field
            control={Input}
            placeholder="Description"
            onChange={(e) => {
              SetNewMovie({ ...newMovie, description: e.target.value });
            }}
          />
        </Form.Group>
        <button
          onClick={() => {
            setMovies([...movies, newMovie]);
          }}
        >
          {" "}
          <p>Add</p>
        </button>
      </Form>
      <h1>Movies</h1>
      <div className="movies-container">
        {movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(search.toLowerCase())
          )
          .filter((movie) => (rating ? movie.rating === rating : movie))
          .toReversed()
          .map((movie) => (
            <MovieItem {...movie} key={movie.id} />
          ))}
      </div>
      {/* <div className="topromance">
        <h1>Top romance movies: </h1>
        <Splide options={options} aria-label="My Favorite Images">
          {data.map((movie) => (
            <Link  key={movie.id} to={`movies/${movie.id}`}>
              <MovieItem props={movie} key={movie.id} />
            </Link>
          ))}
            <SplideSlide>
              <MovieItem2 {...movie} />
            </SplideSlide>
        </Splide>
      </div> */}
    </div>
  );
}

export default MoviesList;
