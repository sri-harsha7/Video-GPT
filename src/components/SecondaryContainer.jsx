import React from "react";
import MovieList from "./movieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    <div className="bg-black">
      <div className="mt-0  md:-mt-50 relative pl-1 md:pl-7 ">
        <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
        <MovieList title="Popular" movies={movies?.popularMovies} />
        <MovieList title="Top Rated" movies={movies?.topRatedMovies} />
        <MovieList title="Upcoming" movies={movies?.upComingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
