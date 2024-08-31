import PropTypes from 'prop-types';

const Tag = ({tag}) => {
    return (
        <div className='flex'>
            <p className='bg-gray-100 text-base text-[#23BE0A] rounded-3xl work-sans px-4 py-1 font-medium'>{tag}</p>
        </div>
    );
};

Tag.propTypes={
    tag: PropTypes.string
}

export default Tag;