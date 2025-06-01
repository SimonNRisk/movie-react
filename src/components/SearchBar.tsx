import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
  disabled: boolean;
}
function SearchBar({
  searchQuery,
  setSearchQuery,
  onSearch,
  disabled,
}: SearchBarProps) {
  return (
    <form onSubmit={onSearch} className="mb-4">
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="px-4 py-2 rounded shadow border mr-2"
      />
      <button
        type="submit"
        disabled={disabled}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
