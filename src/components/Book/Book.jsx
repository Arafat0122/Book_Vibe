import PropTypes from 'prop-types';
import Tag from '../Tag/Tag';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { image, tags, bookName, author, category, rating, bookId } = book;

    return (
        <div className="transition-transform transform hover:scale-105">
            <Link to={`/book/${bookId}`}>
                <div className="card border rounded-2xl p-6 shadow-lg hover:shadow-xl bg-white">
                    <figure className='bg-blue-100 py-14 rounded-lg'>
                        <img className='h-36 mx-auto' src={image} alt={bookName} />
                    </figure>
                    <div className="card-body space-y-4">
                        <div className='flex flex-wrap gap-2'>
                            {tags.map((tag, idx) => (
                                <Tag key={idx} tag={tag} />
                            ))}
                        </div>
                        <h2 className="card-title text-2xl font-bold text-gray-800">{bookName}</h2>
                        <p className='font-medium text-gray-600'>By: {author}</p>
                        <hr className='border-dashed border-gray-300' />
                        <div className="flex justify-between items-center text-gray-600 font-medium">
                            <p>{category}</p>
                            <p className='flex gap-1 items-center'>
                                {rating}
                                <CiStar className='text-yellow-500 text-lg' />
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired
};

export default Book;