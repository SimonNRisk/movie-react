// src/pages/Home.tsx
import { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import { getPopularMovies } from "../services/api";
import { useMovieSearch } from "../hooks/useMovieSearch";

type Movie = {
  id: string;
  title: string;
  release_date: string;
};

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
  } = useMovieSearch(); // ✅ no arguments now

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
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
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
