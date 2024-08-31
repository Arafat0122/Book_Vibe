import { useState } from "react";
import { Link, Outlet } from "react-router-dom";


const ListedBooks = () => {
    const [activeTab, setActiveTab] = useState(0);


    return (
        <div className="work-sans mt-10 min-h-screen">
            <div className="bg-gradient-to-r from-[#23BE0A] to-[#1E3A8A] p-6 rounded-xl shadow-lg text-white">
                <div className="flex items-center justify-center space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                        <path d="M3 12l2 2 4-4 4 4 8-8"></path>
                    </svg>
                    <h2 className="text-4xl font-extrabold">Books</h2>
                </div>
            </div>
            <div className="w-56 mx-auto my-5">
                <select className="p-2 bg-[#23BE0A] rounded-xl text-white font-medium ">
                    <option>Sort By</option>
                    <option>Rating</option>
                    <option>Number of pages</option>
                    <option> Published year</option>
                </select>
            </div>
            <div>
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                    <Link
                        to={``}
                        onClick={() => setActiveTab(0)}
                        rel="noopener noreferrer"
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${activeTab === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>Read Books</span>
                    </Link>
                    <Link
                        to={`wishlist`}
                        onClick={() => setActiveTab(1)}
                        rel="noopener noreferrer"
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${activeTab === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Wishlist Books</span>
                    </Link>
                </div>
                <hr className="my-5" />
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ListedBooks;