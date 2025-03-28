import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { Background_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed w-full -z-10">
        <img src={Background_IMG} alt="" className="w-full" />
      </div>
      <div className="mb-6">
        <GptSearchBar />
      </div>
      <div>
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
