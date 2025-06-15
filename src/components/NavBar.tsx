import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMovies, getPopularMovies } from '../services/api';
import { useFavouriteCount } from '../context/FavouritesCountContext';
import Button from './Button';

function NavBar() {
  const { favouritesCount } = useFavouriteCount();
  return (
    <nav>
      <div>
        <Link to="/" className="text-2xl font-bold">
          Movie App
        </Link>
      </div>
      <div className="flex flex-row justify-left">
        <Link to="/">
          <Button description="Home" />
        </Link>
        <Link to="/favourites">
          <Button description="Favourites" count={favouritesCount} />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
