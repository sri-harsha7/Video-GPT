import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { Background_IMG } from "../utils/constants";
import lang from "../utils/languageConstants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute w-full -z-10">
        <img src={Background_IMG} alt="" className="w-full" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
