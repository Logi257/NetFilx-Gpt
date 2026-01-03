import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useMainTrailer = (movieId) => {
  const dispatch = useDispatch();

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
    console.log(trailerObj);
    dispatch(addTrailerVideo(trailerObj));
  };

  useEffect(() => {
    getTrailer();
  }, []);
};

export default useMainTrailer;
