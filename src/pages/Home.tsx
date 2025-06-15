// src/pages/Home.tsx
import { useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import { getPopularMovies } from '../services/api';
import { useMovieSearch } from '../hooks/useMovieSearch';
import Modal from '../components/Modal';
import { useState } from 'react';
import Button from '../components/Button';
import useColumnsPerRow from '../hooks/useColumnsPerRow';

interface Movie {
  id: string;
  title?: string;
  release_date?: string;
  poster_path?: string;
  overview?: string;
}

function Home() {
  const {
    searchQuery,
    setSearchQuery,
    movies,
    setMovies,
    loading,
    setLoading,
    error,
    setError,
    handleSearch,
  } = useMovieSearch();

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllMovies, setShowAllMovies] = useState(false);

  function openModal(movie: Movie) {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelectedMovie(null);
  }

  const columns = useColumnsPerRow();
  const displayedMovies = showAllMovies ? movies : movies.slice(0, columns * 2);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError('Failed to load movies...');
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  return (
    <div>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
        disabled={loading}
      />
      <div className="w-full">
        {error && <div>{error}</div>}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {displayedMovies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} onClick={openModal} />
            ))}
          </div>
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedMovie?.title || 'Untitled'}
        message={`${selectedMovie?.overview || 'Unknown'}`}
      />
      {!showAllMovies && (
        <div className="my-6">
          <Button
            description="Show more"
            colour="bg-blue-500"
            onClick={() => setShowAllMovies(true)}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
