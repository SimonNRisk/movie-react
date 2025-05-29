import { useMovieContext } from "../context/MovieContext";
import FavouriteButton from "./FavouriteButton";

interface Movie {
  id: string;
  title?: string;
  release_date?: string;
  poster_path?: string;
}
interface MovieCardProps {
  movie: Movie;
}
function MovieCard({ movie }: MovieCardProps) {
  const { isFavourite, addToFavourites, removeFavourite } = useMovieContext();
  const favourite = isFavourite(movie.id);

  function onFavouriteClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (favourite) removeFavourite(movie.id);
    else addToFavourites(movie);
  }
  return (
    <div className="flex flex-col items-center p-4 my-8 bg-gray-100 text-black rounded-lg w-full hover:opacity-80 transition-opacity duration-300 shadow-lg">
      <div className="rounded-sm">
        <img
          className="rounded-lg"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <FavouriteButton onClick={onFavouriteClick} favourited={favourite} />
        </div>
      </div>
      <div>
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
