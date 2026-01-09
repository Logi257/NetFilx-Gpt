import { useEffect } from "react";
import { API_OPTIONS, POPULAR_MOVIES_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const getPopularMovie = async () => {
    const data = await fetch(POPULAR_MOVIES_API, API_OPTIONS);
    const json = await data.json();

    // console.log(json.results);

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovie();
  }, []);
};

export default usePopularMovies;
