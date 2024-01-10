import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
function CarteMovie({ movies }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const datamovie = movies.find((elt) => elt.id === id);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "50px",
      }}
    >
      <h1>Movie</h1>
      <ReactPlayer url={datamovie?.trailer.trim()} />;
      <p style={{ width: "600px", fontSize: "20px" }}>
        {datamovie?.description}
      </p>
      {/* <button onClick={()=> navigate(-1)}> AT HOME</button> */}
      <Link to="/">Home</Link>
    </div>
  );
}

export default CarteMovie;
