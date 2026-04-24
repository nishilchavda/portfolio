import React from "react";
import { FaEye } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import { SiGithub } from "react-icons/si";

const Projects = () => {
  const ProjectData = [
    {
      title: "Project One",
      desc: "A high-performance web application built with modern architecture. Focusing on scalability and seamless user experience.",
      github: "",
      live: "",
    },
    {
      title: "Project One",
      desc: "A high-performance web application built with modern architecture. Focusing on scalability and seamless user experience.",
      github: "",
      live: "",
    },
    {
      title: "Project One",
      desc: "A high-performance web application built with modern architecture. Focusing on scalability and seamless user experience.",
      github: "",
      live: "",
    },
    {
      title: "Project One",
      desc: "A high-performance web application built with modern architecture. Focusing on scalability and seamless user experience.",
      github: "",
      live: "",
    },
    {
      title: "Project One",
      desc: "A high-performance web application built with modern architecture. Focusing on scalability and seamless user experience.",
      github: "",
      live: "",
    },
    {
      title: "Project One",
      desc: "A high-performance web application built with modern architecture. Focusing on scalability and seamless user experience.",
      github: "",
      live: "",
    },
  ];

  return (
    <>
      <div
        id="projects"
        className="xl:px-52 lg:px-38 py-20 px-6 min-h-screen w-full overflow-x-hidden z-0"
      >
        <div>
          {/* heading */}
          <h1 className="text-white font-bold sm:text-4xl text-3xl text-center sm:pb-15 pb-8">
            My Projects
          </h1>
          {/* projects grid box  */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {/* Project Card */}
            {ProjectData.map((project, index) => {
              return (
                <div
                  key={index}
                  className="group relative bg-slate-900/40 backdrop-blur-xl border-3 border-slate-700/50 hover:border-blue-500 transition-all duration-500 rounded-3xl overflow-hidden shadow-2xl"
                >
                  {/* Image Container with Overlay */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src="https://i.pinimg.com/736x/a6/b4/17/a6b4177bb2f9bc580c381fd9d488359f.jpg"
                      alt="Project"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Content */}

                  <div className="p-3">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-500 transition-colors duration-500">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-sans mb-2 text-justify">
                      {project.desc}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-end">
                      {/* <div className="flex gap-2 items-center justify-center">
                      <span className="text-[10px] px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20">
                        React
                      </span>
                      <span className="text-[10px] px-2 py-1 bg-purple-500/10 text-purple-400 rounded-md border border-purple-500/20">
                        Tailwind
                      </span>
                    </div> */}

                      <div className="flex gap-2 items-center justify-center">
                        <a href={project.github}>
                          <button className="p-2.5 rounded-xl bg-radial from-gray-800 from-1% to-gray-900 border-3 border-slate-700/50 group-hover:border-white text-white transition-all duration-500 active:scale-90">
                            <SiGithub className="h-5 w-5" />
                          </button>
                        </a>
                        <a href={project.live}>
                          <button className="p-2.5 rounded-xl bg-radial from-green-800  from-1% to-green-900*2 border-3 border-slate-700/50 group-hover:border-green-500 text-white transition-all duration-500 active:scale-90">
                            <MdOpenInNew className="h-5 w-5" />
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
