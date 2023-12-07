import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";

export const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl gap-2 mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-2xl sm:text-2xl flex">
            <span className="text-slate-500">Start</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form
          // onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none block h-4"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <nav className="flex gap-6">
          <ul className="sm:flex gap-4 hidden">
            <Link to="/">
              <li className="link">Home</li>
            </Link>
            <Link to="/about">
              <li className="link">About</li>
            </Link>
          </ul>
          <div className="w-full">
            {currentUser ? (
              <Link to="/profile">
                <img
                  className="rounded-full w-7"
                  src={currentUser.avatar}
                  alt="profile"
                />
              </Link>
            ) : (
              <Link to="/sign-in">
                <span className="link"> Sign in</span>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};
