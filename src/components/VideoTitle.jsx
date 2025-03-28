import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[22%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black ">
      <h1 className=" p-3 text-3xl md:text-6xl font-bold md:p-0 pb-2">
        {title}{" "}
      </h1>
      <p className=" hidden md:inline-block py-6 text-lg w-5/12 ">{overview}</p>
      <div className="p-3 5">
        <button className="mx-2 p-1.5 bg-white text-black md:p-4 text-xl bg-opacity-70 rounded-lg">
          ▶ Play
        </button>
        <button className=" p-1.5 mx-2 bg-gray-500 text-white md:p-4 text-xl bg-opacity-70 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
