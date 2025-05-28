import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav>
      <div>
        <Link to="/">Movie App</Link>
      </div>
      <div className="flex flex-row justify-left">
        <Link to="/" className="mr-6 mt-6 mb-6 hover:opacity-50">
          Home
        </Link>
        <Link to="/favourites" className="m-6 hover:opacity-50">
          Favourites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
