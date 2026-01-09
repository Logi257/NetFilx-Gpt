import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIES_API } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);

  const getUpcomingMovie = async () => {
    const data = await fetch(UPCOMING_MOVIES_API, API_OPTIONS);
    const json = await data.json();

    //console.log(json.results);

    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upComingMovies && getUpcomingMovie();
  }, []);
};

export default useUpcomingMovies;
