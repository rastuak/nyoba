import { PropTypes } from 'prop-types'
function Card({ title, desc, image,}) {
  return (
    <div className="bg-gray-800 relative max-w-xs h-auto overflow-hidden rounded-2xl shadow-md group hover:border hover:border-blue-400 hover:cursor-pointer">
      <img src={image} alt="Card Image"
        className="object-cover w-full h-60 transition-transform group-hover:scale-110 duration-100" />
      <div className="p-3">
        <h2 className="text-lg font-bold mb-1">{title}</h2>
        <p className="text-gray-400 text-justify">{desc}</p>
      </div>
    </div>
  );
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Card 