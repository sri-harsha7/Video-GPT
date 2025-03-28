import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    showGptMovies: null,
    gptMovieNames: [],
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      state.showGptMovies = action.payload;
    },

    addGptMovieNames: (state, action) => {
      state.gptMovieNames = action.payload;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult, addGptMovieNames } =
  gptSlice.actions;
export default gptSlice.reducer;
