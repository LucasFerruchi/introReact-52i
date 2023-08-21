import React from 'react'
import moviesList from "../data/movies.json";
import MovieList from './MovieList';

const SearchMovie = (props) => {

const {cant , movies} = props

  return (



    <div className='SearchBar'>
        {<input type="search" placeholder='Buscar...'/>}
    </div>
  )
}

export default SearchMovie
