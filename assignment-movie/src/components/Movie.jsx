/* eslint-disable react/prop-types */

const Movie = ({movies}) => {

  return (
    <>
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="col movie-wrapper"
            >
            <img className="movie-img card-img-bottom" src={movie.Poster} />
            <div className="movie-title">
              {movie.Title} ({movie.Year})
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">No movies found</p>
      )}
    </>
  );
};

export default Movie;
