import React, { useState } from "react";
import { BiLogoMongodb, BiLogoTailwindCss } from "react-icons/bi";
import { BsClaude } from "react-icons/bs";
import {
  FaAngular,
  FaBootstrap,
  FaCss3,
  FaCss3Alt,
  FaFigma,
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
import { RiFirebaseFill, RiGeminiFill } from "react-icons/ri";
import {
  SiCanva,
  SiCplusplus,
  SiDotnet,
  SiExpress,
  SiGithub,
  SiJavascript,
  SiMysql,
  SiPostman,
  SiVercel,
  SiOpenai,
  SiAnthropic,
  SiXampp,
  SiRender,
} from "react-icons/si";
import { GoCopilot } from "react-icons/go";
import { VscVscode } from "react-icons/vsc";

const Skill = () => {
  const ActiveTab =
    "bg-radial from-green-800 cursor-pointer from-1% to-green-900*2 ring-2 ring-green-700 sm:px-6 px-4 py-2 text-white rounded-full text-lg font-bold active:scale-95 transition-all select-none";
  const DefaultTab =
    "bg-transparent sm:px-6 px-4 py-2 text-white rounded-full text-lg font-bold cursor-pointer hover:bg-[rgba(255, 255, 255, 0.04)] transition-all active:scale-95 select-none";

  const [active, setActive] = useState("Frontend");

  const TabName = [
    { name: "Frontend", id: 1 },
    { name: "Backend", id: 2 },
    { name: "Tools & Others", id: 3 },
  ];

  const frontendSkills = [
    { name: "React.js", icon: FaReact, color: "text-[#61DAFB]" },
    { name: "TailwindCSS", icon: BiLogoTailwindCss, color: "text-[#06B6D4]" },
    { name: "Bootstrap", icon: FaBootstrap, color: "text-[#7952B3]" },
    { name: "HTML5", icon: FaHtml5, color: "text-[#E34F26]" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572B6]" },
    { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
    { name: "Angular", icon: FaAngular, color: "text-[#DD0031]" },
  ];

  const backendSkills = [
    { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
    { name: "Node.js", icon: FaNode, color: "text-[#339933]" },
    { name: "MongoDB", icon: BiLogoMongodb, color: "text-[#47A248]" },
    { name: "Java", icon: FaJava, color: "text-[#ED8B00]" },
    { name: "PHP", icon: FaPhp, color: "text-[#777BB4]" },
    { name: "Python", icon: FaPython, color: "text-[#3776AB]" },
    { name: "C++", icon: SiCplusplus, color: "text-[#00599C]" },
    { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
    { name: ".NET", icon: SiDotnet, color: "text-purple-600" },
    { name: "Xampp", icon: SiXampp, color: "text-orange-600" },
    { name: "Firebase", icon: RiFirebaseFill, color: "text-[#FFCA28]" },
  ];

  const toolsSkills = [
    { name: "VS Code", icon: VscVscode, color: "text-[#007ACC]" },
    { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" },
    { name: "Github", icon: SiGithub, color: "text-white" },
    { name: "Vercel", icon: SiVercel, color: "text-white" },
    { name: "Render", icon: SiRender, color: "text-white" },
    { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
    { name: "Figma", icon: FaFigma, color: "text-[#F24E1E]" },
    { name: "Canva", icon: SiCanva, color: "text-[#00C4CC]" },
    { name: "Claude", icon: BsClaude, color: "text-[#D97757]" }, // Claude Orange-Brown
    { name: "Gemini", icon: RiGeminiFill, color: "text-[#8E75B2]" }, // Google's Sparkle Purple
    { name: "ChatGPT", icon: SiOpenai, color: "text-[#74AA9C]" }, // OpenAI Teal
    { name: "Copilot", icon: GoCopilot, color: "text-[#007ACC]" }, // Copilot Blue
  ];

  const getSkills = () => {
    if (active === "Frontend") return frontendSkills;
    if (active === "Backend") return backendSkills;
    return toolsSkills;
  };

  return (
    <>
      <div
        id="skill"
        className="xl:px-50 lg:px-34 py-20 px-0 sm:h-screen h-full w-full"
      >
        <div>
          {/* heading  */}
          <h1 className="text-white font-bold sm:text-4xl text-3xl text-center sm:pb-15 pb-8">
            My Skills
          </h1>
          {/* toggle button for change tab */}
          <div className="flex justify-center items-center">
            <div className="flex justify-between items-center sm:gap-4 gap mb-2 bg-transparent backdrop-blur-3xl border-slate-700 border-3 w-max h-max rounded-full p-2">
              {TabName.map((tab, index) => {
                return (
                  <button
                    aria-selected={tab.name === active}
                    role="tab"
                    className={tab.name === active ? ActiveTab : DefaultTab}
                    onClick={() => setActive(tab.name)}
                    key={index}
                  >
                    {tab.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* skills in boxes  */}
          <div className="p-2">
            <div className="w-full h-full bg-transparent backdrop-blur-2xl rounded-4xl border-slate-700 border-3">
              <div className="grid sm:grid-cols-5 grid-cols-3 justify-evenly items-center gap-2">
                {getSkills().map((skill, index) => (
                  <div
                    className="p-4 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2"
                    key={index}
                  >
                    <skill.icon
                      className={skill.color + " sm:text-6xl text-5xl"}
                    />
                    <h1 className="text-white">{skill.name}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
