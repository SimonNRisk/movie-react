import { useMovieContext } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';
import Banner from '../components/Banner';
import { useState, useMemo } from 'react';

type SortOption = 'vote' | 'popularity' | 'alphabetical' | 'release_date' | undefined;

function Favourites() {
  const { favourites } = useMovieContext();

  const [sortBy, setSortBy] = useState<SortOption>(undefined);

  const sortedFavourites = useMemo(() => {
    if (!sortBy) return favourites;
    const sorted = [...favourites];

    switch (sortBy) {
      case 'vote':
        return sorted.sort((a, b) => b.vote_average - a.vote_average);
      case 'popularity':
        return sorted.sort((a, b) => b.popularity - a.popularity);
      case 'alphabetical':
        return sorted.sort((a, b) =>
          (a.title ?? '')
            .trim()
            .toLowerCase()
            .localeCompare((b.title ?? '').trim().toLowerCase())
        );
      case 'release_date':
        return sorted.sort(
          (a, b) =>
            new Date(b.release_date ?? '').getTime() - new Date(a.release_date ?? '').getTime()
        );
      default:
        return sorted;
    }
  }, [favourites, sortBy]);

  const isFavourites = favourites.length != 0;

  return (
    <div>
      <h1 className="text-2xl mb-4">Your Favourites</h1>
      <div className="mb-4">
        <label htmlFor="sort" className="mr-2 font-medium">
          Sort by:
        </label>
        <select
          id="sort"
          className="border rounded px-3 py-1"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
        >
          <option value="vote">Rating</option>
          <option value="popularity">Popularity</option>
          <option value="alphabetical">Alphabetical (A-Z)</option>
          <option value="release_date">Release Date (Newest)</option>
        </select>
      </div>

      {isFavourites ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {sortedFavourites.map((movie) => (
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
