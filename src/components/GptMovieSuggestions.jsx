import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((state) => state.gpt);
  const { showGptMovies, gptMovieNames } = gpt;

  if (!gptMovieNames) return null;

  return (
    <div className="p-4 bg-black text-white opacity-90 mobile:p-2">
      <span className=" flex flex-wrap justify-center mobile:flex-col">
        {gptMovieNames.map((movie, index) => (
          <MovieList
            key={movie}
            title={movie}
            movies={showGptMovies[index]}
            className="w-full mobile:w-full"
          />
        ))}
      </span>
    </div>
  );
};

export default GptMovieSuggestions;
