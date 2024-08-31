import { useLoaderData } from "react-router-dom";
import PropTypes from 'prop-types';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// Custom bar shape with triangles
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
  fill: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

const PagesToRead = () => {
  const pages = useLoaderData();
  const data = pages;

  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF5722', '#9C27B0'];

  return (
    <div className="mt-5 min-h-screen px-4 lg:px-0">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg shadow-xl mb-8">
        <div className="flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <h2 className="text-5xl font-extrabold text-gray-800 mb-3 leading-tight">Books to Read</h2>
        <p className="text-lg text-gray-700">Discover how many pages each book you plan to read has, visualized through this interactive chart.</p>
      </div>
      <div className="flex justify-center">
        <BarChart
          width={1200}
          height={600}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 60,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" angle={-30} textAnchor="end" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="totalPages" shape={<TriangleBar />} label={{ position: 'top' }}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

PagesToRead.propTypes = {
  // PropTypes are not needed here if TriangleBar is not directly receiving props.
};

export default PagesToRead;