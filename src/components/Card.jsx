const Card = ({ title, link, live }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="h-48 overflow-hidden">
        <img
          src={link}
          alt={title}
          className="h-full w-full object-cover hover:shadow-xl hover:scale-110  transition-transform duration-300"
        />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
        <a
          href={live}
          className="inline-block mt-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
        >
          Live Here
        </a>
      </div>
    </div>
  );
};

export default Card;
