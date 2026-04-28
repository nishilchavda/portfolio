import React from "react";
import { IoSchool } from "react-icons/io5";
import ScrollFloat from "../ui/ScrollFloat";
import SpotlightCard from "../ui/SpotlightCard";
import ShinyText from "../ui/ShinyText";

const Education = () => {
  const educationData = [
    {
      institution: "LaMinds",
      degree: "Web Developer Internship",
      duration: "DEC 2025 - MAY 2026",
      desc: "Gained hands-on experience in building responsive web applications, working with real-world APIs, and collaborating in a development team environment.",
    },
    {
      institution:
        "Sutex Bank College of Computer Applications and Science | VNSGU",
      degree: "Bachelor of Computer Applications",
      duration: "2023 - 2026",
      desc: "Currently pursuing a degree in computer applications with a focus on software development and database management.",
    },
    {
      institution: "Ashadeep Vidhyalay 4 | GSHSEB",
      degree: "HSC Commerce",
      duration: "2021 - 2023",
      desc: "Completed higher secondary education with a focus on commerce and accounting fundamentals.",
    },
  ];

  return (
    <>
      <div
        id="education"
        className="w-full xl:px-50 lg:px-40 md:px-20 px-6 pt-18 pb-10 sm:min-h-screen overflow-hidden"
      >
        <div>
          {/* heading */}
          <h1 className="text-white font-bold sm:text-4xl text-3xl text-center pb-8">
            <ScrollFloat>My Education</ScrollFloat>
          </h1>

          {/* education container */}
          <div className="sm:w-full mx-auto relative border-l-2 border-slate-700 ml-4 sm:ml-0">
            {educationData.map((item, index) => (
              <div key={index} className="mb-12 ml-8 relative">
                {/* Timeline Icon Dot */}
                {/* 4. Changed -left-[50px] to -left-[45px] for better centering on the line */}
                <span className="absolute -left-12.5 top-0 bg-blue-500 p-2 rounded-full text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10">
                  <IoSchool size={20} />
                </span>

                {/* Card */}
                <SpotlightCard 
                  className="bg-transparent backdrop-blur-xl border-3 border-slate-800 sm:p-6 p-4 rounded-2xl hover:border-blue-500/50 transition-all duration-300 group shadow-xl relative z-20"
                  spotlightColor="rgba(59, 130, 246, 0.15)"
                >
                  <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase inline-block">
                    <ShinyText text={item.duration} disabled={false} speed={3} className="" color="#60a5fa" shineColor="#ffffff" />
                  </span>
                  <h3 className="sm:text-2xl text-xl font-bold text-white mt-2 group-hover:text-blue-400 transition-colors relative z-20">
                    {item.degree}
                  </h3>
                  <p className="text-slate-300 font-medium mt-1 text-sm sm:text-base relative z-20">
                    {item.institution}
                  </p>
                  <p className="text-slate-400 mt-4 leading-relaxed text-sm sm:text-base relative z-20">
                    {item.desc}
                  </p>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
