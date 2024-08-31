import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="playfair">
            <div className="bg-gray-700 rounded-3xl px-6 lg:px-24 py-10 lg:py-20 flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
                <div className="text-center lg:text-left">
                    <h2 className="text-2xl lg:text-5xl font-bold text-white leading-tight">
                        Books to freshen up your bookshelf
                    </h2>
                    <div className="mt-6">
                        <NavLink to={'/listed'}>
                            <button className="px-6 lg:px-10 py-3 lg:py-4 rounded-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white lg:text-lg font-semibold shadow-lg transition-all duration-300">
                                View The List
                            </button>
                        </NavLink>
                    </div>
                </div>
                <figure className="flex justify-center lg:justify-end">
                    <img className="w-60 lg:w-80 object-contain" src="https://i.ibb.co/9tHk8SS/pngwing-1.png" alt="Books" />
                </figure>
            </div>
        </div>
    );
};

export default Banner;