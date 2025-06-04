import { useMovieContext } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';

function Favourites() {
  const { favourites } = useMovieContext();

  if (favourites) {
    return (
      <div>
        <h2>Your Favourites</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {favourites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2>No favourite movies yet</h2>
      <p>Start adding movies to your favourites and they will appear here</p>
    </div>
  );
}

export default Favourites;
