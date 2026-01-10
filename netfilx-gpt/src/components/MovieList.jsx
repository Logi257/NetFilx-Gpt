import MovieCard from "./MovieCard";

const MovieList = ({ title, movieList }) => {
  return (
    <div className="px-6 md:px-12 py-4 text-white">
      <h1 className="text-lg md:text-3xl font-semibold py-4">{title}</h1>

      <div className="flex overflow-x-scroll scroll-smooth scrollbar-hide">
        <div className="flex gap-4">
          {movieList?.map((movie) => (
            <MovieCard
              key={movie.id}
              poster={movie.poster_path}
              altTitle={movie.original_title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
