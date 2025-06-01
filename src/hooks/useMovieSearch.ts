import { useState } from "react";
import { searchMovies } from "../services/api";

type Movie = {
  id: string;
  title: string;
  release_date: string;
};

export function useMovieSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]); // ✅ typed!
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery.trim() || loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
      setSearchQuery("");
    }
  };

  return {
    searchQuery,
    setSearchQuery,
    movies,
    setMovies,
    error,
    setError,
    loading,
    setLoading,
    handleSearch,
  };
}
