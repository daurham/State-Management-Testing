import React, { useMemo, useEffect, useContext, createContext, useState } from 'react';
import App from '../components/App';

const initialState = {
  movies: [
    { title: 'Mean Girls', hasWatched: false, watchedCount: 0, trailer: null },
    { title: 'Hackers', hasWatched: false, watchedCount: 0, trailer: null },
    { title: 'The Grey', hasWatched: false, watchedCount: 0, trailer: null },
    { title: 'Sunshine', hasWatched: false, watchedCount: 0, trailer: null },
    { title: 'Ex Machina', hasWatched: false, watchedCount: 0, trailer: null },
    { title: 'Star Wars', hasWatched: false, watchedCount: 0, trailer: null },
  ],
};

const contextData = createContext(); 
export const useData = () => useContext(contextData); 


export default function Context() {
	const [movies, setMovies] = useState(initialState.movies);
	const [count, setCount] = useState(0);
	const [globalInput, setGlobalInput] = useState('');


	const addMove = (state, action) => {
		state.movies = [{ title: action.payload, hasWatched: false, watchedCount: 0, trailer: null }, ...state.movies,];
	};
	const removeMove = (state, action) => {
		let filteredMovies = state.movies.filter((m) => m.title !== action.payload);
		state.movies = filteredMovies;
	};
	const toggleWatched = (state, action) => {
		let movie = state.movies.filter((m) => m.title === action.payload)[0]
		movie.hasWatched = !movie.hasWatched;
	};
	const incrementWatchCount = (state, action) => {
		let movie = state.movies.filter((m) => m.title === action.payload)[0]
		movie.watchedCount += 1;
	};
	const incrementCount = () => setCount(n => n += 1);
	const decrementCount = () => setCount(n => n -= 1);
	const contextFunctions = {addMove, removeMove, toggleWatched, incrementWatchCount, incrementCount, decrementCount};


	const value = useMemo(() => ({ 
		count,
		globalInput,
		movies,
		setCount,
		setGlobalInput,
		setMovies,
		contextFunctions,
	 }), [count, globalInput, movies]);
  
	return (
		<>
			<h1>My Context</h1>
			<contextData.Provider value={value}>
				<App />
			</contextData.Provider>
		</>
	);
};