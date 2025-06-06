import './App.css';
import Favourites from './pages/Favourites';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import NavBar from './components/NavBar';
import { FavouriteCountProvider } from './context/FavouritesCountContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <MovieProvider>
      <FavouriteCountProvider>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </main>
        <ToastContainer />
      </FavouriteCountProvider>
    </MovieProvider>
  );
}

export default App;
