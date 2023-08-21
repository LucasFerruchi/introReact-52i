import React from "react";
import moviesList from "../data/movies.json";

const MovieList = (props) => {
  //Codigo JAVASCRIPT

  //Props
 const {cant, mensaje}= props;
 console.log(cant);
 console.log(mensaje);

  return (
    <>
    
    <div>
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
      </div>
    </>
  );
};

export default MovieList;
