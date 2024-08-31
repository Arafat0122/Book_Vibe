import { useEffect, useState } from "react";
import Book from "../Book/Book";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    return (
        <div className="playfair pb-20">
            <h3 className="text-4xl lg:text-5xl text-center font-bold mt-24 mb-9 text-black relative"
                data-aos="fade-up">
                <span className="bg-gradient-to-r from-blue-500 via-green-600 to-teal-700 text-transparent bg-clip-text">
                    Books
                </span>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mt-2 rounded"></div>
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    books.map(book => (
                        <div data-aos="fade-up" key={book.bookId}>
                            <Book book={book} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Books;