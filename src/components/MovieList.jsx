import React from "react";
import moviesList from "../data/movies.json";
import CardMovie from "./CardMovie";

const MovieList = (props) => {
  //Codigo JAVASCRIPT

  //Props declarar
  const { cant, mensaje } = props;
  console.log(cant);
  console.log(mensaje);

  const listaPelis = moviesList.filter((movie) => {
    return movie.rank <= cant;
  });

  // Submit-----------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submit!!");
  };
  // Submit-----------------------------------------

  return (
    <>
      <div>
        {/* -------------FORMULARIO--------------- */}
        <form onSubmit={handleSubmit}>
          <input type="text" className="inputM" />
          <button className="margenes">Buscar</button>
        </form>
        {/* ------------FORMULARIO---------------- */}

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
      </div>
    </>
  );
};

export default MovieList;
