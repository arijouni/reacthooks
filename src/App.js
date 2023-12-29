import { useState } from "react";
import "./App.css";
import MoviesList from "./component/MoviesList";
import NavBar from "./component/NavBar";
import { moviesData } from "./movies";
function App() {
const [movies, setMovies] = useState(moviesData);
const [search, setSearch] = useState("");
const [rating, setRating] = useState(0);
// console.log(search)

  return (
    <div className="App">
      <NavBar setSearch={setSearch} setRating={setRating} rating={rating} />
      <MoviesList
        setMovies={setMovies}
        movies={movies}
        search={search}
        rating={rating}
      />
    </div>
  );
}

export default App;
