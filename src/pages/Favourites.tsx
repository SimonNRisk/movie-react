import { useMovieContext } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';
import Banner from '../components/Banner';

function Favourites() {
  const { favourites } = useMovieContext();

  const isFavourites = favourites.length != 0;

  return (
    <div>
      <h2>Your Favourites</h2>
      {isFavourites ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {favourites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <div>
          <p> hi </p>
          <Banner />
        </div>
      )}
    </div>
  );
}

export default Favourites;
