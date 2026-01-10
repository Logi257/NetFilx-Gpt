import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  /*
  MovieList - Popular
    MovieCard * n
  MovieList - Now Playing
  MovieList - Trending
  Movie List - Horror
*/
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-52 relative z-20">
          <MovieList
            title={"Now Playing"}
            movieList={movies.nowPlayingMovies}
          />
        </div>

        <MovieList title={"Top Rated"} movieList={movies.topRatedMovies} />
        <MovieList title={"Upcoming"} movieList={movies.upComingMovies} />
        <MovieList title={"Popular"} movieList={movies.popularMovies} />
      </div>
    )
  );
};

export default SecondaryContainer;
