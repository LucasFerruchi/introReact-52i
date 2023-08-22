// import React from "react";
// import moviesList from "../data/movies.json";
// import CardMovie from "./CardMovie";

// const MovieList = (props) => {
//   //Codigo JAVASCRIPT

//     //Hooks
//     const [searchTerm, setSearchTerm] = useState("");

//   //Props declarar
//   const { cant, mensaje } = props;
  
//   const listaPelis = moviesList.filter((movie) => {
//     return movie.rank <= cant;
//   });


//   // Submit-----------------------------------------
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Submit!!");
//   };
//   // Submit-----------------------------------------

//   return (
//     <>    
//       <div>
//         {/* -------------FORMULARIO--------------- */}
{/* <form onSubmit={handleSubmit}>
<input type="text" className="inputM" />
<button className="margenes">Buscar</button>
</form> */}
//         {/* ------------FORMULARIO---------------- */}

//         <h3>{cant} mas populares!🤩</h3>
//         <div className="poster">
//           {listaPelis.map((movie) => (
//             // <div className="container-img" key={movie.id}>
//             //   <img
//             //     className="movie-grid-image "
//             //     src={movie.image}
//             //     alt={movie.title}
//             //   />
//             // </div>
//             <CardMovie peliculas={movie} key={movie.id} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default MovieList;

import React, { useState } from "react";
import moviesList from "../data/movies.json";
import CardMovie from "./CardMovie";

const MovieList = (props) => {
  const [searchTerm, setSearchTerm] = useState(""); //USO HOOKS; uso dos parametros, el nombre y el que ejecutará los cambios
  const { cant, mensaje } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submit!!");
  };


  //Agrego cambios e nla misma funcion para lograr la funcionalidad de la busqueda
  // const listaPelis = moviesList.filter((movie) => {
  //   return movie.rank <= cant;
  // });

  const listaPelis = moviesList.filter((movie) => {
    return movie.rank <= cant && movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  }); 
  //le agrego un toLowerCase para buscar en minusculas/mayusculas
  //Verifico si la búsqueda (searchTerm) está contenido en el título de la película 
  //Esto permite filtrar y mostrar películas que coincidan y también con lo ingresado por el usuario.
  
  
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="inputM"
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="margenes">Buscar</button>
        </form>

        <h3>{cant} mas populares!🤩</h3>
        <div className="poster">
          {listaPelis.map((movie) => (
            <CardMovie peliculas={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;