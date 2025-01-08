import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div className="w-full font-montserrat  text px-12 pt-4 pb-1 flex justify-between items-center shadow-md">
        <Link to="/">
          <img
            className="w-24"
            src="flag_atlas_logo.png"
            alt="Flag Atlas logo"
          ></img>
        </Link>
        <div className="space-x-12 pr-4 font-semibold">
          <Link to="/">
            <a className="decoration-green-500 decoration-4 underline-offset-8 hover:underline transition duration-150 ease-in-out">
              Country flags
            </a>
          </Link>
          <Link to="/flag_history">
            <a className="decoration-purple-700 decoration-4 underline-offset-8 hover:underline transition duration-150 ease-in-out">
              Flag history
            </a>
          </Link>
          <Link to="/world_map">
            <a className="decoration-blue-800 decoration-4 underline-offset-8 hover:underline transition duration-150 ease-in-out">
              World map
            </a>
          </Link>
          <Link>
            <a className="decoration-yellow-500 decoration-4 underline-offset-8 hover:underline transition duration-150 ease-in-out">
              Trivia
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
