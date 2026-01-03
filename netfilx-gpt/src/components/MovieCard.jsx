import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster, altTitle }) => {
  return (
    <div className="w-24 md:w-48 transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer">
      <img src={IMG_CDN_URL + poster} alt={altTitle} />
    </div>
  );
};

export default MovieCard;
