import React, { useMemo, useContext, createContext, useState } from 'react';
import App from '../components/App';
// import App from '../components/App_Separate'; // Toggle for App_Separate.jsx


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
	const [moviesC, setMoviesC] = useState(initialState.movies);
	const [countC, setCountC] = useState(0);
	const [inputC, setInputC] = useState('');

	const addMove = (title) => {
		let newMovie = { title, hasWatched: false, watchedCount: 0, trailer: null }
		setMoviesC(currentMoves => [newMovie, ...currentMoves]);
	};

	const removeMove = (title) => {
		setMoviesC(currentMoves => {
			let filteredMovies = currentMoves.filter((m) => m.title !== title);
			return filteredMovies;
		});
	};

	const toggleWatched = ((title) => {
		setMoviesC(currentMoves => {
			let updatedMovies = currentMoves.map((m) => {
				if (m.title === title) {
					m.hasWatched = !m.hasWatched;
				}
			});
			return updatedMovies;
		});
	});

	const incrementWatchCount = (title) => {
		setMoviesC(currentMoves => {
			let updatedMovies = currentMoves.map((m) => {
				if (m.title === title) {
					m.watchedCount += 1;
				}
			});
			return updatedMovies;
		});
	};

	const incrementCount = () => setCountC(n => n += 1);
	const decrementCount = () => setCountC(n => n -= 1);
	const changeInput = (input) => setInputC(() => input)
	const contextFunctions = { addMove, removeMove, toggleWatched, incrementWatchCount, incrementCount, decrementCount, changeInput };

	const value = useMemo(() => ({
		countC,
		inputC,
		moviesC,
		setCountC,
		setInputC,
		setMoviesC,
		contextFunctions,
	}), [countC, inputC, moviesC]);

	return (
		<>
			<contextData.Provider value={value}>
				<App />
			</contextData.Provider>
		</>
	);
};