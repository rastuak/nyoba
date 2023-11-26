import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

function Card({ title, desc, image, url }) {
  return (
    // <Link to={url} target='blank_'>
      <Link to={url} target='blank_'
      className="bg-gray-800 relative max-w-xs h-auto overflow-hidden rounded-2xl shadow-md group hover:border hover:border-blue-400 hover:cursor-pointer text-white hover:text-white">
        <img src={image} alt="Card Image"
          className="object-cover w-full h-60 transition-transform group-hover:scale-110 duration-100" />
        <div className="p-3">
          <h2 className="text-lg font-bold mb-1">{title}</h2>
          <p className="text-gray-400 text-justify">{desc}</p>
        </div>
      </Link>
    // </Link>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Card 