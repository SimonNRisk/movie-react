import React, { createContext, useContext, useState } from 'react';
import { useMovieContext } from './MovieContext';

const FavouriteCountContext = createContext<{ favouritesCount: number }>({
  favouritesCount: 0,
});

export function FavouriteCountProvider({ children }: { children: React.ReactNode }) {
  const { favourites } = useMovieContext();
  const favouritesCount = favourites.length;

  return (
    <FavouriteCountContext.Provider value={{ favouritesCount }}>
      {children}
    </FavouriteCountContext.Provider>
  );
}

export function useFavouriteCount() {
  return useContext(FavouriteCountContext);
}
