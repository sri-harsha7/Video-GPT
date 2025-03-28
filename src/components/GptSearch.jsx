import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { Background_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className=" my fixed w-full -z-10">
        <img
          src={Background_IMG}
          alt=""
          className=" h-screen  w-screen object-cover"
        />
      </div>
      <div className="">
        <GptSearchBar />

        <GptMovieSuggestions className="my-2" />
      </div>
    </div>
  );
};

export default GptSearch;
