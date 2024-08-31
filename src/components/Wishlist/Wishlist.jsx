import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishlistBook } from "../../utility/localstorage";
import WishBook from "../WishBook/WishBook";

const Wishlist = () => {
    const wishlist = useLoaderData();
    const [wishBooks, setWishBooks] = useState([]);

    useEffect(() => {
        const storedBookIds = getWishlistBook();
        if (wishlist && wishlist.length > 0) {
            const booksWish = wishlist.filter(book => storedBookIds.includes(book.bookId));
            setWishBooks(booksWish);
        }
    }, [wishlist]);

    return (
        <div>
            <div>
                {wishBooks.length > 0 ? (
                    wishBooks.map(wishBook => (
                        <WishBook key={wishBook.bookId} wishBook={wishBook} />
                    ))
                ) : (
                    <p>No books in your wishlist.</p>
                )}
            </div>
        </div>
    );
};

export default Wishlist;