import { useDispatch } from "react-redux";
import { API_OPTIONS, TOP_RATED_MOVIES_API } from "../utils/constants";
import {addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovie = async () => {
    const data = await fetch(TOP_RATED_MOVIES_API, API_OPTIONS);
    const json = await data.json();

    ///console.log(json.results);

    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovie();
  }, []);
};

export default useTopRatedMovies;
