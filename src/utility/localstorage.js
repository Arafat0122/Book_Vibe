const getWishlistBook = () => {
    const WishBook = localStorage.getItem('wish-book');
    if (WishBook) {
        return JSON.parse(WishBook);
    }
    return [];
}

const saveWishlistBook = id => {
    const WishBooks = getWishlistBook();
    const exists = WishBooks.find(bookId => bookId === id);
    if (!exists) {
        WishBooks.push(id);
        localStorage.setItem('wish-book', JSON.stringify(WishBooks))
    }
}

const getReadBook = () => {
    const ReadBook = localStorage.getItem('read-book');
    if (ReadBook) {
        return JSON.parse(ReadBook);
    }
    return [];
}

const saveReadBook = id => {
    const ReadBooks = getReadBook();
    const exists = ReadBooks.find(bookId => bookId === id);
    if (!exists) {
        ReadBooks.push(id);
        localStorage.setItem('read-book', JSON.stringify(ReadBooks))
    }
}

export { getReadBook, saveReadBook, getWishlistBook, saveWishlistBook };