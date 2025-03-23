import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/options";
const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPopularMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        options
      );
      const json = await response.json();
      dispatch(addPopularMovies(json.results));
    };
    getPopularMovies();
  }, []);
};
export default usePopularMovies;
