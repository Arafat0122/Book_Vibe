import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadBook } from "../../utility/localstorage";
import ReadBook from "../ReadBook/ReadBook";


const Read = () => {
    const books = useLoaderData();

    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        const storedBookIds = getReadBook();
        if (books.length > 0){
            const booksRead = books.filter(book => storedBookIds.includes(book.bookId));
            setReadBooks(booksRead);
        }
    }, [books]);
    return (
        <div>
            <div>
                {
                    readBooks.map(readBook => <ReadBook key={readBook.bookId} readBook={readBook}></ReadBook>)
                }
            </div>
        </div>
    );
};

export default Read;