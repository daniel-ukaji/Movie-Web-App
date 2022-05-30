import React from "react";
import { MovieControls } from "./MovieControls";
import { Result } from "./Result";

const Movie = ({movie, type}) => {
  return (
    <>
    <div className="bod">
    
      <h5>{movie.title}</h5>
      <img className="new_movie" src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />
      <MovieControls type={type} movie={movie} />
      <Result movie={movie} />
      </div>
        
                            
    </>
  );
};
export default Movie;

