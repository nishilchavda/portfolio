import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div
        id="home"
        className="relative overflow-x-hidden flex flex-col items-center justify-center xl:px-50 lg:px-40 sm:pt-0 sm:pb-0 pt-60 pb-10 px-5 sm:h-screen h-full w-full"
      >
        <h1 className="mx auto text-white font-bold lg:text-4xl xl:text-6xl md:text-5xl sm:text-6xl text-4xl">
          404 Page Not Found
        </h1>
          <button className="bg-radial from-green-800 cursor-pointer from-1% to-green-900*2 sm:border-3 border-2 border-green-700 px-6 py-2 text-white rounded-full text-2xl font-bold sm:mt-10 mt-8 active:scale-95 transition-all">
          <Link to="/">Go To Homepage</Link>
        </button>
        
      </div>
    </>
  );
};

export default NotFound;
