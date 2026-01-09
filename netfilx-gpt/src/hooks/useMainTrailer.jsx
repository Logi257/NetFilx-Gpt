import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useMainTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results);

    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailerObj = filteredData.length ? filteredData[0] : json.results[0];
    //console.log(trailerObj);
    dispatch(addTrailerVideo(trailerObj));
  };

  useEffect(() => {
    !trailerVideo && getTrailer();
  }, []);
};

export default useMainTrailer;
