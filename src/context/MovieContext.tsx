import { createContext, useState, useContext, useEffect } from 'react';

interface Movie {
  id: string;
  title?: string;
  release_date: string;
  vote_average: number;
  popularity: number;
}

interface MovieContextType {
  favourites: Movie[];
  addToFavourites: (movie: Movie) => void;
  removeFavourite: (movieId: string) => void;
  isFavourite: (movieId: string) => boolean;
}

interface MovieProviderProps {
  children: React.ReactNode;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
};

export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [favourites, setFavourites] = useState<Movie[]>(() => {
    const stored = localStorage.getItem('favourites');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    const storedFavs = localStorage.getItem('favourites');
    if (storedFavs) setFavourites(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const addToFavourites = (movie: Movie) => {
    setFavourites((prev) => [...prev, movie]);
  };

  const removeFavourite = (movieId: string) => {
    setFavourites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavourite = (movieId: string) => {
    return favourites.some((movie) => movie.id === movieId);
  };

  const value: MovieContextType = {
    favourites,
    addToFavourites,
    removeFavourite,
    isFavourite,
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};
