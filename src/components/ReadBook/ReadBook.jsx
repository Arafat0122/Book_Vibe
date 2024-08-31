import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { MdOutlineRestorePage } from "react-icons/md";
import { Link } from 'react-router-dom';

const ReadBook = ({ readBook }) => {
    const { image, bookName, author, category, tags, totalPages, publisher, yearOfPublishing, rating, bookId } = readBook;

    return (
        <div className="flex flex-col lg:flex-row items-center border border-gray-200 rounded-lg mt-8 p-6 items-start bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <figure className="flex-shrink-0">
                <img className='h-56 rounded-md object-cover' src={image} alt={bookName} />
            </figure>
            <div className="flex-1 ml-4 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">{bookName}</h2>
                <p className='text-lg text-gray-600'>By: {author}</p>
                <div className='flex flex-col lg:flex-row lg:space-x-4 space-y-2 lg:space-y-0'>
                    <div className='flex flex-wrap gap-2'>
                        <span className='font-semibold text-gray-700'>Tags:</span>
                        {
                            tags.map((tag, idd) => (
                                <p key={idd} className='bg-gray-100 text-base text-[#23BE0A] rounded-full px-4 py-1 font-medium'>{`#${tag}`}</p>
                            ))
                        }
                    </div>
                    <p className='flex items-center text-gray-600'>
                        <CiLocationOn className='text-xl mr-2' /> Year of Publishing: {yearOfPublishing}
                    </p>
                </div>
                <div className='flex flex-col lg:flex-row lg:space-x-4 space-y-2 lg:space-y-0'>
                    <p className='flex items-center gap-2 text-gray-600'>
                        <BsPeople className='text-xl' /> Publisher: {publisher}
                    </p>
                    <p className='flex items-center gap-2 text-gray-600'>
                        <MdOutlineRestorePage className='text-xl' /> Pages: {totalPages}
                    </p>
                </div>
                <hr className='border-gray-300 my-4' />
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

ReadBook.propTypes = {
    readBook: PropTypes.shape({
        image: PropTypes.string.isRequired,
        bookName: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        totalPages: PropTypes.number.isRequired,
        publisher: PropTypes.string.isRequired,
        yearOfPublishing: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        bookId: PropTypes.string.isRequired,
    }).isRequired
};

export default ReadBook;