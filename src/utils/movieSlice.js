import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies(state, action) {
      console.log("Adding movies to state:", action.payload); // Log the movies being added to state
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo(state, action) {
      state.trailerVideo = action.payload;
    },
  },
});
export const { addNowPlayingMovies, addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;
