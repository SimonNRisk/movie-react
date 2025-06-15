import { useMovieContext } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';
import Banner from '../components/Banner';

function Favourites() {
  const { favourites } = useMovieContext();

  const isFavourites = favourites.length != 0;

  return (
    <div>
      <h1 className="text-2xl mb-4">Your Favourites</h1>
      {isFavourites ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {favourites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <div>
          <Banner
            title="No favourites added"
            message="You have no favourites add. Add your favourite moves on the home page, and view them here!"
            type="info"
          />
        </div>
      )}
    </div>
  );
}

export default Favourites;
