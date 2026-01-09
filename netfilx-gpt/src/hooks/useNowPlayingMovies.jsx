import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_API } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovie = async () => {
    const data = await fetch(NOW_PLAYING_API, API_OPTIONS);
    const json = await data.json();

    // console.log(json.results);

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovie();
  }, []);
};

export default useNowPlayingMovies;
