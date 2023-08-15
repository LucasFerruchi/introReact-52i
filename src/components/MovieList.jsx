import React from "react";
import moviesList from "../data/movies.json";
import CardMovie from "./CardMovie";

const MovieList = (props) => {
  //Codigo JAVASCRIPT

<<<<<<< HEAD
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
=======
  //Props declarar
  const { cant, mensaje } = props;
  console.log(cant);
  console.log(mensaje);

  const listaPelis = moviesList.filter((movie) => {
    return movie.rank <= cant;
  });

  return (
    <>
      <div>
        <h3>{cant} mas populares!🤩</h3>
        <div className="poster">
          {listaPelis.map((movie) => (
            // <div className="container-img" key={movie.id}>
            //   <img
            //     className="movie-grid-image "
            //     src={movie.image}
            //     alt={movie.title}
            //   />
            // </div>
            <CardMovie peliculas={movie} key={movie.id} />
          ))}
        </div>
>>>>>>> 404882883571231d049002920130a059cd8f2f82
      </div>
      </div>
    </>
  );
};

export default MovieList;
