import React, { useState, useRef } from "react";
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
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion as Motion } from "framer-motion";
import ScrollFloat from "../ui/ScrollFloat";
import Magnet from "../ui/Magnet";
import SpotlightCard from "../ui/SpotlightCard";

const Skill = () => {
  const ActiveTab =
    "bg-radial from-green-800 cursor-pointer from-1% to-green-900*2 ring-2 ring-green-700 sm:px-6 px-4 py-2 text-white rounded-full text-lg font-bold active:scale-95 transition-all select-none";
  const DefaultTab =
    "bg-transparent sm:px-6 px-4 py-2 text-white rounded-full text-lg font-bold cursor-pointer hover:bg-[rgba(255, 255, 255, 0.04)] transition-all active:scale-95 select-none";

  const [active, setActive] = useState("Frontend");
  const containerRef = useRef(null);

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

  useGSAP(() => {
    gsap.fromTo(
      ".skill-card",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
    );
  }, { dependencies: [active], scope: containerRef });

  return (
    <div id="skill" className="w-full xl:px-50 lg:px-40 md:px-20 px-6 pt-18 pb-10 sm:min-h-screen overflow-hidden">
      <div>
        <h1 className="text-white font-bold sm:text-4xl text-3xl text-center pb-8">
          <ScrollFloat>My Skills</ScrollFloat>
        </h1>

        {/* Toggle buttons */}
        <div className="flex justify-center items-center">
           <div className="flex justify-between items-center sm:gap-2 gap-1 mb-2 bg-slate-900/40 backdrop-blur-3xl border-slate-700 border-3 w-max h-max rounded-full p-2">
             {TabName.map((tab, index) => (
                <button
                  key={index}
                  aria-selected={tab.name === active}
                  role="tab"
                  className={`relative cursor-pointer sm:px-6 px-4 py-2 rounded-full sm:text-lg text-sm font-bold transition-colors select-none ${
                    tab.name === active ? "text-white" : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setActive(tab.name)}
                >
                  {tab.name === active && (
                    <Motion.div
                      layoutId="active-tab-indicator"
                      className="absolute inset-0 bg-radial from-green-800 to-green-900 ring-2 ring-green-700 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.3)] z-0"
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10">{tab.name}</span>
                </button>
             ))}
           </div>
        </div>

        {/* Animated Skills Grid */}
        <SpotlightCard className="w-full h-full bg-transparent backdrop-blur-2xl rounded-4xl border-slate-700 border-3 mt-8 p-4" spotlightColor="rgba(59, 130, 246, 0.15)">
          <div ref={containerRef} className="grid sm:grid-cols-5 grid-cols-3 justify-evenly items-center gap-4">
            {getSkills().map((skill, index) => (
              <Magnet key={index} padding={40} magnetStrength={4} className="flex justify-center">
                <div
                  className="skill-card p-4 font-bold sm:text-xl text-sm rounded-3xl flex flex-col items-center gap-2 transition-colors hover:bg-slate-800/50 cursor-pointer"
                >
                  <skill.icon className={skill.color + " sm:text-6xl text-5xl drop-shadow-xl"} />
                  <h1 className="text-white text-center text-xs sm:text-sm">{skill.name}</h1>
                </div>
              </Magnet>
            ))}
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};

export default Skill;
