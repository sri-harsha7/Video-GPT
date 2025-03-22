import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-45 px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title} </h1>
      <p className="py-6 text-lg w-5/12">{overview}</p>
      <div>
        <button className="mx-2 bg-white text-black p-4 text-xl bg-opacity-70 rounded-lg">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 text-xl bg-opacity-70 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
