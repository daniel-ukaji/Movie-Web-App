import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


export const Result = ({movie}) => {
    const {addMovieToWatchlist, watchlist, addMovieToWatched, watched} = useContext(GlobalContext);
    
    let storedMovie = watchlist?.find((o) => o.id === movie.id)
    let storedMovieWatched = watched?.find((o) => o.id === movie.id);

    const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

    const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className='result-card'>
         <div className='controls'>
         <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Favorites
          </button>
            </div>
    </div>
  )
}
