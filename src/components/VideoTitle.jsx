import React from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[22%] px-[5%] text-white absolute bg-gradient-to-r from-black w-full aspect-video top-[69px] h-[115vh]">
      <h1 className="text-4xl font-extrabold">{title}</h1>
      <p className="text-lg p-4 font-medium w-2/4 opacity-80">{overview}</p>
      <div className="flex gap-4 mt-4">
        <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-lg text-lg font-semibold hover:bg-gray-300 transition duration-300 cursor-pointer">
          <FaPlay />
          Play
        </button>
        <button className="flex items-center gap-2 bg-gray-700 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-gray-600 transition duration-300 cursor-pointer">
          <FaInfoCircle />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
