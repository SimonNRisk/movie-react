import React, { createContext, useContext, useState } from 'react';
import { useMovieContext } from './MovieContext';

const FavouriteCountContext = createContext<{ count: number }>({
  count: 0,
});

export function FavouriteCountProvider({ children }: { children: React.ReactNode }) {
  const { favourites } = useMovieContext();
  const count = favourites.length;

  return (
    <FavouriteCountContext.Provider value={{ count }}>{children}</FavouriteCountContext.Provider>
  );
}

export function useFavouriteCount() {
  return useContext(FavouriteCountContext);
}
