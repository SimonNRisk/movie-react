import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
//use effect to add side ffects to your function and decide when they should run
//call useEffect, put function into it that you want to call when the thing in useEffect changes
//check dependency array to see if change every render. If something in dependency array changes, we run the sueEffect function again
type Movie = {
  id: number;
  title: string;
  release_date: string;
};

function Home() {
  //Name of what you want the state to be, the function to actually set the state
  const [searchQuery, setSearchQuery] = useState("");
  //ts generic syntax, tells useState what type of value the state should hold
  //string | null means the value can be a string (error message) or a null (no error)!
  //without this, ts assumes type is deafault null, so then when we do setError(string), get error
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
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

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

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
    }

    setSearchQuery("");
  };
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {error && <div>{error}</div>}

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
