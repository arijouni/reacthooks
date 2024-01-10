import { useState } from "react";
import "./App.css";
import MoviesList from "./component/MoviesList";
import NavBar from "./component/NavBar";
import { moviesData } from "./movies";
import CarteMovie from "./component/CarteMovie";
import { Routes, Route } from "react-router-dom";
function App() {
  const [movies, setMovies] = useState(moviesData);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  // console.log(search)

  return (
    <div className="App">
      <NavBar setSearch={setSearch} setRating={setRating} rating={rating} />
      <Routes>
        <Route
          path="/"
          element={
            <MoviesList
              setMovies={setMovies}
              movies={movies}
              search={search}
              rating={rating}
            />
          }
        />
        <Route path="/movies/:id" element={<CarteMovie movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
