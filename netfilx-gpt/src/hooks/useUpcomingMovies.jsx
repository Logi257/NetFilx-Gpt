import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIES_API } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovie = async () => {
    const data = await fetch(UPCOMING_MOVIES_API, API_OPTIONS);
    const json = await data.json();

    ///console.log(json.results);

    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovie();
  }, []);
};

export default useUpcomingMovies;
