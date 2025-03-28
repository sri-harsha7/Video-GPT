import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="p-6 text-white mobile:p-2">
      <h1 className="text-3xl font-semibold p-2 mobile:text-2xl">{title}</h1>
      <div className="flex no-scrollbar overflow-y-auto pr-4 mobile:flex-wrap mobile:justify-center">
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
