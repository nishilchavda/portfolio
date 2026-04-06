import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between px-5 py-4 text-white ">
        <h1 className="text-2xl font-bold px-2">Nishil Chavda</h1>
        <ul className="list-none flex items-center justify-between gap-10 select-none">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          {/* className="active:shadow-[inset_0px_0px_20px_-5px_rgba(0,50,200)]" */}
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/resume">Resume</Link>
        </ul>
        <h2 className="bg-radial from-green-800  from-1% to-green-900*2 border border-green-700 px-4 py-2 rounded-full font-bold">
          MERN Stack Developer
        </h2>
      </div>
      {/* <button className="isolate bg-transparent relative overflow-hidden border-none outline-none select-none flex items-center justify-center font-semibold transition-all duration-150 cursor-pointer px-6 py-3 text-base border-radius: 12px; box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 24px;">
        <span className="absolute inset-0 w-full h-full z-0 rounded-full pointer-events-none shadow-[inset_0px_0px_20px_-5px_rgba(255,255,255,0.7)] bg-[rgba(255, 255, 255, 0.04)]"></span>
        <span className="absolute inset-0 w-full h-full z-[-1] rounded-full pointer-events-none isolate backdrop-blur-[2px]"></span>
        <span className="relative text-white font-bold">small Button</span>
      </button> */}
    </>
  );
};

export default Navbar;
