import React from "react";
import { BiLogoMongodb, BiLogoTailwindCss } from "react-icons/bi";
import { FaBootstrap, FaCss3, FaCss3Alt, FaHtml5, FaJava, FaNode, FaPhp, FaPython, FaReact } from "react-icons/fa";
import { FaCss } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiJavascript } from "react-icons/si";

const Skill = () => {
  return (
    <>
      <div className="lg:px-34 py-15 px-0 sm:h-screen h-full w-full">
        <div>
          {/* heading  */}
          <h1 className="text-white font-bold sm:text-4xl text-3xl text-center pb-10">
            My Skills
          </h1>
          {/* skills in boxes  */}
          <div className="grid sm:grid-cols-6 grid-cols-3 justify-evenly items-center gap-2">
            <div className=" p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <FaReact className="text-blue-400 sm:text-6xl text-5xl" />
              <h1 className="text-white">React.js</h1>
            </div>
            <div className=" p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <SiExpress className="text-black sm:text-6xl text-5xl" />{" "}
              <h1 className="text-white">Express.js</h1>
            </div>
            <div className=" p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <FaNode className="text-green-400 sm:text-6xl text-5xl" />{" "}
              <h1 className="text-white">Node.js</h1>
            </div>
            <div className=" p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <BiLogoMongodb className="text-green-700 sm:text-6xl text-5xl" />{" "}
              <h1 className="text-white">MongoDB</h1>
            </div>
            <div className=" p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <BiLogoTailwindCss className="text-blue-400 sm:text-6xl text-5xl" />{" "}
              <h1 className="text-white">TailwindCSS</h1>
            </div>
            <div className=" p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <FaBootstrap className="text-purple-800 sm:text-6xl text-5xl" />{" "}
              <h1 className="text-white">Bootstrap</h1>
            </div>
            <div className=" p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <FaHtml5 className="text-[#e65100] sm:text-6xl text-5xl" />{" "}
              <h1 className="text-white">HTML5</h1>
            </div>
            <div className=" p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <FaCss3Alt className="text-[#0277bd] sm:text-6xl text-5xl" />{" "}
              <h1 className="text-white">CSS3</h1>
            </div>
            <div className=" p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <SiJavascript className="text-[#ffd600] sm:text-6xl text-5xl" />{" "}
              <h1 className="text-white">JavaScript</h1>
            </div>
            <div className=" p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <FaJava className="text-[#1358ab] sm:text-6xl text-5xl" />{" "}
              <h1 className="text-white">Java</h1>
            </div>
            <div className=" p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <FaPhp className="text-[#7176ac] sm:text-6xl text-5xl" />{" "}
              <h1 className="text-white">PHP</h1>
            </div>
            <div className=" p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <FaPython className="text-purple-800 sm:text-6xl text-5xl" />{" "}
              <h1 className="text-white">Python</h1>
            </div>
            <div className=" p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <FaReact className="text-blue-400 sm:text-6xl text-5xl" />{" "}
              <h1 className="text-white">HTML5</h1>
            </div>
            <div className=" p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <SiExpress className="text-black sm:text-6xl text-5xl" />{" "}
              <h1 className="text-white">Express.js</h1>
            </div>
            <div className=" p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <FaNode className="text-green-400 sm:text-6xl text-5xl" />{" "}
              <h1 className="text-white">Node.js</h1>
            </div>
            <div className=" p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <BiLogoMongodb className="text-green-700 sm:text-6xl text-5xl" />{" "}
              <h1 className="text-white">MongoDB</h1>
            </div>
            <div className=" p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <BiLogoTailwindCss className="text-blue-400 sm:text-6xl text-5xl" />{" "}
              <h1 className="text-white">TailwindCSS</h1>
            </div>
            <div className=" p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <FaBootstrap className="text-purple-800 sm:text-6xl text-5xl" />{" "}
              <h1 className="text-white">Bootstrap</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
