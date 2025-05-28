interface Movie {
  title: string;
  release_date: string;
  poster_path?: string;
}
interface MovieCardProps {
  movie: Movie;
}
function MovieCard({ movie }: MovieCardProps) {
  function onFavouriteClick() {
    alert("clicked");
  }
  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <button onClick={onFavouriteClick}>heart</button>
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
