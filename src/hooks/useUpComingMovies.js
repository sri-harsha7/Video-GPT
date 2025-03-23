import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/options";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUpComingMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        options
      );
      const json = await response.json();
      dispatch(addUpComingMovies(json.results));
    };
    getUpComingMovies();
  }, []);
};
export default useUpcomingMovies;
