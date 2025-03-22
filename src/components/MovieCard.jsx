import React from 'react';
import { IMAGE_CDN } from '../utils/constants';
import { FaStar } from 'react-icons/fa';

const MovieCard = ({ posterPath, moviename, vote }) => {
  return (
    <div className="group w-56 rounded-xl overflow-hidden shadow-lg bg-[#1c1c1c] transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
      <img
        src={IMAGE_CDN + posterPath}
        alt={moviename}
        className="w-full h-80 object-cover"
      />
     <div className="p-4">
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-md font-semibold text-white truncate">{moviename}</h3>
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <span className="text-gray-300">{vote?.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
