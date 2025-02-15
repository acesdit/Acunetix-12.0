
import React from 'react';

const Card = ({ image, title, description, buttonText }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-transparent bg-gradient-to-br from-gray-800 to-gray-900 p-0.5 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Card Content */}
      <div className="relative rounded-lg bg-gray-900 p-6 h-full flex flex-col">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 group-hover:scale-110"
        />

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

        {/* Description */}
        <p className="text-gray-400 mb-4 flex-grow">{description}</p>

        {/* Centered Button */}
        <div className="flex justify-center">
          <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-300">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card; 