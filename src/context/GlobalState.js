import React, {createContext, useReducer, useEffect} from 'react'
import AppReducer from './AppReducer';

//initial state
const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) :
    [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) :
    [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
    }, [state]);
        localStorage.setItem("watched", JSON.stringify(state.watched))

//actions
const addMovieToWatchlist = (movie) => {
    dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie})
}

const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

    return (
        <GlobalContext.Provider 
            value=
            {{watchlist: state.watchlist, 
            watched: state.watched, 
            addMovieToWatchlist,
            addMovieToWatched,}} >
            {props.children}
        </GlobalContext.Provider>
    )
}

