import { useSelector, useDispatch } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import client from "../utils/client";
import { options } from "../utils/options";
import { addGptMovieNames, addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //SearchMovie in TMDB
  const searchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //Make an API Call
    const response = await client.chat.completions.create({
      model: "Provider-5/gpt-4o-mini",
      messages: [
        {
          role: "user",
          content:
            searchText.current.value +
            "Only give me the names of the 5 movies, comma separated like the example given ahead. Example: Gadar, Pushpan, RRR, Don, Sholay",
        },
      ],
    });
    const gptMovies = response.choices[0].message.content.split(",");
    console.log(gptMovies);

    const promiseArray = gptMovies.map((movie) => searchMovie(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGptMovieResult(tmdbResults));
    dispatch(addGptMovieNames(gptMovies));
  };

  return (
    <div className=" pt-[40%] md:pt-[15%] flex justify-center ">
      <form
        action=""
        className=" w-full md:bg-black md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang?.[langKey].gptPlaceholder}
          className="p-2 m-2 bg-white rounded-lg text-black col-span-9"
        />
        <button
          className="py-2 px-4  bg-red-600 text-white rounded-lg col-span-3 m-4"
          onClick={handleGptSearchClick}
        >
          {lang?.[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
