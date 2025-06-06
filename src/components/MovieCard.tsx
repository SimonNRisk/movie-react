import { useMovieContext } from '../context/MovieContext';
import FavouriteButton from './FavouriteButton';
import { formatDate } from '../../utils/DateFormatter';
import { showAddFavouriteToast, showRemoveFavouriteToast } from '../utils/toast';

interface Movie {
  id: string;
  title?: string;
  release_date?: string;
  poster_path?: string;
}
interface MovieCardProps {
  movie: Movie;
  onClick?: (movie: Movie) => void;
}
function MovieCard({ movie, onClick }: MovieCardProps) {
  const { isFavourite, addToFavourites, removeFavourite } = useMovieContext();
  const favourite = isFavourite(movie.id);

  function onFavouriteClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (favourite) {
      removeFavourite(movie.id);
      showRemoveFavouriteToast(movie.title);
    } else {
      addToFavourites(movie);
      showAddFavouriteToast(movie.title);
    }
  }
  return (
    <div
      className="group relative center my-4 bg-gray-100 text-black rounded-lg w-full aspect-[2/3] hover:opacity-80 transition-opacity duration-300 shadow-2xl hover:scale-105 transition-transform duration-300"
      onClick={() => onClick?.(movie)}
    >
      {/* Image Background */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        \
      </div>
      {/* Foreground Content (text and heart) */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full p-4 text-white">
        <div className="flex justify-end">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FavouriteButton
              onClick={onFavouriteClick}
              favourited={favourite}
              className={'shadow-xl bg-black bg-opacity-30 backdrop-blur-sm rounded-full p-2'}
            />
          </div>
        </div>
        <div className="text-left font-bold">
          <div className="inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-700 bg-opacity-100 px-2 py-1 rounded-lg">
            <p>{formatDate(movie.release_date || '')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
