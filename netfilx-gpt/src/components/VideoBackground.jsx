import { useSelector } from "react-redux";
import useMainTrailer from "../hooks/useMainTrailer";
import { IMG_CDN_URL } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  useMainTrailer(movieId);

  const poster = useSelector((store) => store.movies.nowPlayingMovies);
  //const trailer = useSelector((store) => store.movies.trailerVideo);

  return (
    <div className="w-screen">
      {/* <iframe
        src={
          "https://www.youtube.com/embed/TBCVOMLVgHY?si=" +
          trailer?.key +
          "?&autoplay=1&mute=1&controls=0&loop=1"
        }
        className="w-screen aspect-video"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe> */}
      <img src={IMG_CDN_URL + poster[0].backdrop_path} className="w-screen" />
    </div>
  );
};

export default VideoBackground;
