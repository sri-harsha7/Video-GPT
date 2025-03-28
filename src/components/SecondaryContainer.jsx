import React from "react";
import MovieList from "./movieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    <div className="bg-black  mobile:bg-black mobile:p-4">
      <div className="-mt-50 relative pl-7 z-20 mobile:pl-4 mobile:mt-0">
        <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
        <MovieList title="Popular" movies={movies?.popularMovies} />
        <MovieList title="Top Rated" movies={movies?.topRatedMovies} />
        <MovieList title="Upcoming" movies={movies?.upComingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
