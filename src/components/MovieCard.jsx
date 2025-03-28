import React from "react";
import { POSTER_URL } from "../utils/constants";

const MovieCard = ({ poster }) => {
  if (poster === null) return null;
  return (
    <div className=" w-40 m-2 md:w-48 md:pr-4  ">
      <img src={POSTER_URL + poster} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;
