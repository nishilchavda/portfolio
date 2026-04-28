import React from "react";
import { IoSchool } from "react-icons/io5";

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
        className="xl:px-52 lg:px-38 py-20 px-6 h-full w-full overflow-x-hidden"
      >
        <div>
          {/* heading */}
          <h1 className="text-white font-bold sm:text-4xl text-3xl text-center sm:pb-15 pb-8">
            My Education
          </h1>

          {/* education container */}
          <div className="sm:w-full mx-auto relative border-l-2 border-slate-700 ml-4 sm:ml-0">
            {educationData.map((item, index) => (
              <div key={index} className="mb-12 ml-8 relative">
                {/* Timeline Icon Dot */}
                {/* 4. Changed -left-[50px] to -left-[45px] for better centering on the line */}
                <span className="absolute -left-[50px] top-0 bg-blue-500 p-2 rounded-full text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10">
                  <IoSchool size={20} />
                </span>

                {/* Card */}
                <div className="bg-transparent backdrop-blur-xl border-3 border-slate-800 sm:p-6 p-4 rounded-2xl hover:border-blue-500/50 transition-all duration-300 group shadow-xl">
                  <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">
                    {item.duration}
                  </span>
                  <h3 className="sm:text-2xl text-xl font-bold text-white mt-2 group-hover:text-blue-400 transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-slate-300 font-medium mt-1 text-sm sm:text-base">
                    {item.institution}
                  </p>
                  <p className="text-slate-400 mt-4 leading-relaxed text-sm sm:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
