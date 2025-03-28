import React from "react";
import { POSTER_URL } from "../utils/constants";

const MovieCard = ({ poster }) => {
  if (poster === null) return null;
  return (
    <div className="w-48 pr-4  ">
      <img src={POSTER_URL + poster} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;
