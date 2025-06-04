// src/pages/Home.tsx
import { useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import { getPopularMovies } from '../services/api';
import { useMovieSearch } from '../hooks/useMovieSearch';
import Modal from '../components/Modal';
import { useState } from 'react';
import Button from '../components/Button';

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

  function openModal(movie: Movie) {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelectedMovie(null);
  }

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
            {movies.map((movie) => (
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
      <Button description="test" colour="bg-blue-500" />
    </div>
  );
}

export default Home;
