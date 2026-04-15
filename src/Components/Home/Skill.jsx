import React from "react";
import { BiLogoMongodb, BiLogoTailwindCss } from "react-icons/bi";
import {
  FaBootstrap,
  FaCss3,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaNode,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { FaCss } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiCplusplus,
  SiExpress,
  SiGithub,
  SiJavascript,
  SiMysql,
  SiVercel,
} from "react-icons/si";

const Skill = () => {
  return (
    <>
      <div className="lg:px-34 py-15 px-0 sm:h-screen h-full w-full">
        <div>
          {/* heading  */}
          <h1 className="text-white font-bold sm:text-4xl text-3xl text-center sm:pb-15 pb-8">
            My Skills
          </h1>
          {/* skills in boxes  */}
          <div className="grid sm:grid-cols-6 grid-cols-3 justify-evenly items-center gap-2">
            {/* React.js - Official Cyan */}
            <div className="p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <FaReact className="text-[#61DAFB] sm:text-6xl text-5xl" />
              <h1 className="text-white">React.js</h1>
            </div>

            {/* Express.js - Official is usually white or black; using Gray-400 for visibility on dark bg */}
            <div className="p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <SiExpress className="text-gray-400 sm:text-6xl text-5xl" />
              <h1 className="text-white">Express.js</h1>
            </div>

            {/* Node.js - Node Green */}
            <div className="p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <FaNode className="text-[#339933] sm:text-6xl text-5xl" />
              <h1 className="text-white">Node.js</h1>
            </div>

            {/* MongoDB - Leaf Green */}
            <div className="p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <BiLogoMongodb className="text-[#47A248] sm:text-6xl text-5xl" />
              <h1 className="text-white">MongoDB</h1>
            </div>

            {/* TailwindCSS - Sky Blue */}
            <div className="p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <BiLogoTailwindCss className="text-[#06B6D4] sm:text-6xl text-5xl" />
              <h1 className="text-white">TailwindCSS</h1>
            </div>

            {/* Bootstrap - Deep Purple */}
            <div className="p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <FaBootstrap className="text-[#7952B3] sm:text-6xl text-5xl" />
              <h1 className="text-white">Bootstrap</h1>
            </div>

            {/* HTML5 - Deep Orange */}
            <div className="p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <FaHtml5 className="text-[#E34F26] sm:text-6xl text-5xl" />
              <h1 className="text-white">HTML5</h1>
            </div>

            {/* CSS3 - Blue */}
            <div className="p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <FaCss3Alt className="text-[#1572B6] sm:text-6xl text-5xl" />
              <h1 className="text-white">CSS3</h1>
            </div>

            {/* JavaScript - Yellow */}
            <div className="p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <SiJavascript className="text-[#F7DF1E] sm:text-6xl text-5xl" />
              <h1 className="text-white">JavaScript</h1>
            </div>

            {/* Java - Red/Blue combo (Using the distinct Red-Orange) */}
            <div className="p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <FaJava className="text-[#ED8B00] sm:text-6xl text-5xl" />
              <h1 className="text-white">Java</h1>
            </div>

            {/* PHP - Dark Blue-ish Purple */}
            <div className="p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <FaPhp className="text-[#777BB4] sm:text-6xl text-5xl" />
              <h1 className="text-white">PHP</h1>
            </div>

            {/* Python - Blue/Yellow (Using primary Blue) */}
            <div className="p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <FaPython className="text-[#3776AB] sm:text-6xl text-5xl" />
              <h1 className="text-white">Python</h1>
            </div>

            {/* C++ - ISO Blue */}
            <div className="p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <SiCplusplus className="text-[#00599C] sm:text-6xl text-5xl" />
              <h1 className="text-white">C++</h1>
            </div>

            {/* MySQL - Blue/Orange (Using the branding Blue) */}
            <div className="p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <SiMysql className="text-[#4479A1] sm:text-6xl text-5xl" />
              <h1 className="text-white">MySQL</h1>
            </div>

            {/* Git - Orange-Red */}
            <div className="p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <FaGitAlt className="text-[#F05032] sm:text-6xl text-5xl" />
              <h1 className="text-white">Git</h1>
            </div>

            {/* Github - Usually White/Black (Using White for dark backgrounds) */}
            <div className="p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <SiGithub className="text-white sm:text-6xl text-5xl" />
              <h1 className="text-white">Github</h1>
            </div>

            {/* Vercel - White/Black (Using White for dark backgrounds) */}
            <div className="p-6 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2">
              <SiVercel className="text-white sm:text-6xl text-5xl" />
              <h1 className="text-white">Vercel</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
