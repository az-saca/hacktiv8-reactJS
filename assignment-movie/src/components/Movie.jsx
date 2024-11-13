import React, { useEffect, useState } from "react";
// import axios from "axios";
import {getMovies, searchMovies} from "../Api";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((res) => {
      console.log(res);
      // setMovies(Array.isArray(res) ? res : [res]); 
      setMovies(res); 
    });
  }, []); 

  // console.log({movieAss : movies});
  // const MovieList = () => {
  //   return movies.map((movie, i) => {
  //     return (
  //       <div key={i} className="col">
  //         <div className="movie-title">{movie.Title}</div>
  //         <img className="movie-img" src={movie.Poster} />
  //       </div>
  //     );
  //   });
  // }


  return (
    <>
      {movies.map((movie) => (
        <div key={movie.imdbID} className="col" style={{background:"blue"}}>
          <img className="movie-img card-img-bottom" src={movie.Poster} />
          <div className="movie-title">{movie.Title}</div>
        </div>
      ))}
    </>
  );
};

export default Movie;
