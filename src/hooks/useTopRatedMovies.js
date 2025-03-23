import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/options";
const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTopRatedMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        options
      );
      const json = await response.json();
      dispatch(addTopRatedMovies(json.results));
    };
    getTopRatedMovies();
  }, []);
};
export default useTopRatedMovies;
