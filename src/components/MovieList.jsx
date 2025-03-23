import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-semibold p-2">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-none pr-4">
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCard poster={movie.poster_path} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
