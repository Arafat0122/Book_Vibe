import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { MdOutlineRestorePage } from "react-icons/md";
import { Link } from 'react-router-dom';

const WishBook = ({ wishBook }) => {
    const { image, bookName, author, category, tags, totalPages, publisher, yearOfPublishing, rating, bookId } = wishBook;

    return (
        <div className="flex flex-col lg:flex-row items-center border rounded-lg shadow-lg mt-6 p-6 bg-white">
            <figure className="flex-shrink-0">
                <img className='h-64 w-40 object-cover rounded-md' src={image} alt={bookName} />
            </figure>
            <div className="flex-1 ml-6 space-y-4">
                <h2 className="text-3xl font-bold text-gray-800">{bookName}</h2>
                <p className='text-lg text-gray-600'>By: {author}</p>
                <div className='flex flex-col lg:flex-row gap-4'>
                    <div className='flex flex-wrap gap-2'>
                        <span className='font-semibold text-gray-700'>Tags:</span>
                        {tags.map((tag, index) => (
                            <span key={index} className='bg-gray-200 text-[#23BE0A] rounded-full px-4 py-1 text-sm font-medium'>
                                #{tag}
                            </span>
                        ))}
                    </div>
                    <p className='flex items-center text-gray-600'>
                        <CiLocationOn className='text-xl mr-2' /> Year: {yearOfPublishing}
                    </p>
                </div>
                <div className='flex flex-col lg:flex-row gap-4'>
                    <p className='flex items-center text-gray-600'>
                        <BsPeople className='text-xl mr-2' /> Publisher: {publisher}
                    </p>
                    <p className='flex items-center text-gray-600'>
                        <MdOutlineRestorePage className='text-xl mr-2' /> Pages: {totalPages}
                    </p>
                </div>
                <div className='flex flex-col lg:flex-row lg:space-x-4 space-y-2 lg:space-y-0'>
                    <span className='text-[#328EFF] bg-[#328eff26] rounded-full text-center px-4 py-1 font-medium'>Category: {category}</span>
                    <span className='text-[#FFAC33] bg-[#ffac3326] rounded-full text-center px-4 py-1 font-medium'>Rating: {rating}</span>
                    <Link to={`/book/${bookId}`}>
                        <button className='text-white bg-[#23BE0A] rounded-full px-4 py-2 font-medium hover:bg-[#1a9d2d] transition-colors duration-300'>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

WishBook.propTypes = {
    wishBook: PropTypes.shape({
        image: PropTypes.string.isRequired,
        bookName: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        totalPages: PropTypes.number.isRequired,
        publisher: PropTypes.string.isRequired,
        yearOfPublishing: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        bookId: PropTypes.number.isRequired
    }).isRequired
};

export default WishBook;