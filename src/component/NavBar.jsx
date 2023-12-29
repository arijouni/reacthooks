import React from "react";
import "./style.css";
import ReactStars from "react-stars";
import { CiUndo } from "react-icons/ci";

function NavBar({ setSearch, setRating, rating }) {
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  return (
    <div className="nav-container">
      <h1> Movie Time </h1>
      <div className="stars-box">
        <ReactStars
          count={10}
          onChange={ratingChanged}
          size={35}
          color2={"blanchedalmond"}
          color1="white"
          half={false}
          value={rating}
        />
       <CiUndo size={25} onClick={() => { 
        setRating(0);
       }}
       className="undo" />
      </div>
      <div className="search-box">
        <input
          type="search"
          placeholder="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default NavBar;
