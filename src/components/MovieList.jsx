import React from "react";
import moviesList from "../data/movies.json";

const MovieList = () => {
  //Codigo JAVASCRIPT

  return (
    <>
      <div className="poster">
        {moviesList.map((movie) => (
          <div className="container-img">
            <img
              className="movie-grid-image "
              src={movie.image}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieList;
