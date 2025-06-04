import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMovies, getPopularMovies } from '../services/api';

function NavBar() {
  return (
    <nav>
      <div>
        <Link to="/">Movie App</Link>
      </div>
      <div className="flex flex-row justify-left">
        <Link
          to="/"
          className="mr-6 mt-6 mb-6 p-2 rounded-md bg-gray-600 text-white hover:opacity-50"
        >
          Home
        </Link>
        <Link
          to="/favourites"
          className="mr-6 mt-6 mb-6 p-2 rounded-md bg-gray-600 text-white hover:opacity-50"
        >
          Favourites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
