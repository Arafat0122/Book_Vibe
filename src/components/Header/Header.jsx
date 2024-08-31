import { Link, NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {

    const links = <>
        <li><NavLink exact to={'/'} activeClassName="active">Home</NavLink></li>
        <li><NavLink to={'/listed'} activeClassName="active">Listed Books</NavLink></li>
        <li><NavLink to={'/pages'} activeClassName="active">Pages to Read</NavLink></li>
        <li><NavLink to={'/about'} activeClassName="active">About Us</NavLink></li>
    </>;

    return (
        <div className="work-sans bg-gray-800 text-white shadow-lg">
            <nav className="navbar container mx-auto flex justify-between items-center p-4 lg:px-8">
                <div className="navbar-start flex items-center">
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu dropdown-content mt-3 p-2 shadow-lg bg-gray-900 rounded-box w-52 text-sm space-y-2">
                            {links}
                        </ul>
                    </div>
                    <a href="/" className="text-3xl font-bold text-gradient bg-gradient-to-r from-green-400 via-blue-400 to-blue-500">
                        Book Vibe
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-6 space-x-4 font-medium">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    <button className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white text-sm lg:text-lg font-semibold shadow-md transition-all duration-300">
                        <Link to={'/login'} activeClassName="active">Login</Link>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Header;