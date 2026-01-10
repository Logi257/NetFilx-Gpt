import { FaPlay } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";

const VideoTitle = ({ title, desc }) => {
  return (
    <div className="absolute inset-0 aspect-video bg-gradient-to-r from-black text-white px-6 md:px-16 flex flex-col justify-center">
      <h1 className="text-xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:block py-6 w-1/3">{desc}</p>
      <div className="flex gap-3">
        <button className="bg-white mt-3 md:mt-0 text-black p-1 md:p-2 px-3 md:px-10 text-[13px] md:text-lg rounded-lg bg-opacity-50 flex items-center gap-1 cursor-pointer hover:bg-opacity-80">
          <FaPlay />
          Play
        </button>
        <button className="bg-gray-500/50 hidden  text-white p-2 px-5 text-lg rounded-lg bg-opacity-50 md:flex items-center gap-1 cursor-pointer">
          <FaCircleInfo />
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
