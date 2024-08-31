import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadBook, saveWishlistBook } from "../../utility/localstorage";

const BookDetails = () => {
    const [clickedOnce, setClickedOnce] = useState(false);
    const books = useLoaderData();
    const { id } = useParams();
    const IntId = parseInt(id);

    const handleClick = () => {
        saveReadBook(IntId);
        if (!clickedOnce) {
            toast.success('Added to Read Book list');
            setClickedOnce(true);
        } else {
            toast.info('You have already read the book');
        }
    };

    const handleClickWish = () => {
        saveWishlistBook(IntId);
        toast.success('Added to Wishlist');
    };

    const book = books.find(book => book.bookId === IntId);
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

    return (
        <div className="my-10 grid grid-cols-1 lg:grid-cols-2 gap-12 work-sans">
            <div className="bg-gray-100 rounded-2xl p-10 flex justify-center items-center shadow-md">
                <img className="h-[400px] lg:h-[560px] object-cover rounded-md" src={image} alt={bookName} />
            </div>
            <div className="space-y-6">
                <h2 className="text-4xl font-bold playfair">{bookName}</h2>
                <p className="text-xl font-medium text-gray-700">By: {author}</p>
                <hr />
                <p className="text-lg font-medium text-gray-600">{category}</p>
                <hr />
                <p><span className="font-bold">Review: </span>{review}</p>
                <div className="flex gap-5">
                    <span className="font-bold">Tags: </span>
                    {
                        tags.map((tag, idd) => (
                            <p key={idd} className="bg-gray-100 text-base text-[#23BE0A] rounded-3xl work-sans px-4 py-1 font-medium">#{tag}</p>
                        ))
                    }
                </div>
                <hr />
                <div className="flex gap-14">
                    <div className="space-y-3">
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div className="font-semibold space-y-3 text-gray-700">
                        <p>{totalPages}</p>
                        <p>{publisher}</p>
                        <p>{yearOfPublishing}</p>
                        <p>{rating}</p>
                    </div>
                </div>
                <div className="space-x-4 font-semibold">
                    <Link to="#">
                        <button onClick={handleClick} className="rounded-lg px-7 py-4 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition">Read</button>
                    </Link>
                    <Link to="#">
                        <button onClick={handleClickWish} className="rounded-lg px-7 py-4 text-white bg-[#59C6D2] hover:bg-slate-700 transition">Wishlist</button>
                    </Link>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;