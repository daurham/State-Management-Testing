/* 
npm install @reduxjs/toolkit react-redux
*/

import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesR: [
    { title: 'Mean Girls', hasWatched: false, watchedCount: 0, trailer: null },
    { title: 'Hackers', hasWatched: false, watchedCount: 0, trailer: null },
    { title: 'The Grey', hasWatched: false, watchedCount: 0, trailer: null },
    { title: 'Sunshine', hasWatched: false, watchedCount: 0, trailer: null },
    { title: 'Ex Machina', hasWatched: false, watchedCount: 0, trailer: null },
    { title: 'Star Wars', hasWatched: false, watchedCount: 0, trailer: null },
  ],
  countR: 0,
  inputR: '',
};

const MovieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMove: (state, action) => {
      state.moviesR = [{ title: action.payload, hasWatched: false, watchedCount: 0, trailer: null }, ...state.moviesR,];
    },
    removeMove: (state, action) => {
      let filteredMovies = state.moviesR.filter((m) => m.title !== action.payload);
      state.moviesR = filteredMovies;
    },
    toggleWatched: (state, action) => {
      let movie = state.moviesR.filter((m) => m.title === action.payload)[0]
      movie.hasWatched = !movie.hasWatched;
    },
    incrementWatchCount: (state, action) => {
      let movie = state.moviesR.filter((m) => m.title === action.payload)[0]
      movie.watchedCount += 1;
    },
    incrementCount: (state, action) => {
      state.countR = state.countR + 1;
    },
    decrementCount: (state, action) => {
      state.countR = state.countR - 1;
    },
    changeInput: (state, action) => {
      state.inputR = action.payload;
    },
  },
});

export const {
  addMove,
  removeMove,
  toggleWatched,
  incrementWatchCount,
  incrementCount,
  decrementCount,
  changeInput,
} = MovieSlice.actions;

export const store = configureStore({
  reducer: {
    movieList: MovieSlice.reducer,
  },
});

// const { movies } = useSelector(state => state.movieList); // <- Naming nests the data like this 