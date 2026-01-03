import { FaPlay } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";

const VideoTitle = ({ title, desc }) => {
  return (
    <div className="w-screen aspect-video bg-linear-to-r from-black absolute text-white pt-[15%] px-16">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 w-1/3">{desc}</p>
      <div className="flex gap-3">
        <button className="bg-white text-black p-2 px-10 text-lg rounded-lg bg-opacity-50 flex items-center gap-1 cursor-pointer hover:bg-opacity-80">
          <FaPlay />
          Play
        </button>
        <button className="bg-gray-400 bg-opacity-50 text-white p-2 px-5 text-lg rounded-lg bg-opacity-50 flex items-center gap-1 cursor-pointer">
          <FaCircleInfo />
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
