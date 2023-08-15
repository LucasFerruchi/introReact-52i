import React from "react";

const CardMovie = ({ peliculas }) => {
  return (
    <div
      className="container-img"
      onClick={() => {
        alert(peliculas.description);
      }}
    >
      <img
        className="movie-grid-image "
        src={peliculas.image}
        alt={peliculas.title}
      />
    </div>
  );
};

export default CardMovie;
