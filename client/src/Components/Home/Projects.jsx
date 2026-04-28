import React, { useState } from "react";
import { FaBookOpen, FaEye, FaTimes } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import ScrollFloat from "../ui/ScrollFloat";
import SpotlightCard from "../ui/SpotlightCard";
import ShinyText from "../ui/ShinyText";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const ProjectData = [
  {
    image: "https://github.com/nishilchavda/Airstro/raw/main/frontend/src/assets/homepage.png",
    title: "Airstro",
    desc: "A streamlined flight booking platform built with the MERN stack, offering users a seamless interface for searching, selecting, and managing flight reservations.",
    caseStudy: {
      challenge:
        "Simplifying the flight booking process to reduce user friction while ensuring real-time data accuracy for flight availability and pricing.",
      solution:
        "Developed a responsive booking engine using the MERN stack that handles dynamic search queries, secure user authentication, and reservation state management.",
      results: "Successfully created an intuitive booking flow that improves search efficiency and provides a smooth, reliable experience for travelers.",
    },
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/nishilchavda/Airstro",
    live: "https://airstro.onrender.com",
  },
  {
    image: "https://github.com/nishilchavda/SpoCars/raw/main/img/homepage.png",
    title: "Spocars",
    desc: "A high-performance automotive showcase website platform designed to present high-end vehicle collections with a focus on visual impact and performance.",
    caseStudy: {
      challenge:
        "Need for a lightweight, visually engaging interface to display automotive photography and specifications without heavy load times or performance bottlenecks.",
      solution:
        "Leveraged a Bootstrap-based responsive framework to create a mobile-first, clean UI, emphasizing high-quality imagery and fast rendering.",
      results: "Delivered a performant, visually cohesive site that highlights vehicle aesthetics while maintaining a professional and user-friendly browsing experience.",
    },
    techStack: ["HTML", "CSS", "Bootstrap"],
    github: "https://github.com/nishilchavda/SpoCars",
    live: "https://spocars-website.vercel.app/",
  },
];

  return (
    <>
      <div
        id="projects"
        className="w-full xl:px-50 lg:px-40 md:px-20 px-6 pt-18 pb-10 sm:min-h-screen overflow-hidden z-0"
      >
        <div>
          {/* heading */}
          <h1 className="text-white font-bold sm:text-4xl text-3xl text-center pb-8">
            <ScrollFloat>My Projects</ScrollFloat>
          </h1>
          {/* projects grid box  */}

          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Project Card */}
            {ProjectData.map((project, index) => {
              return (
                <SpotlightCard
                  key={index}
                  className="group relative bg-slate-900/40 backdrop-blur-xl border-3 border-slate-700/50 hover:border-blue-500 transition-all duration-500 rounded-3xl overflow-hidden shadow-2xl"
                  spotlightColor="rgba(59, 130, 246, 0.15)"
                >
                  {/* Image Container with Overlay */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt="Project"
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-40" />
                  </div>

                  {/* Content */}

                  <div className="p-3">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-500 transition-colors duration-500">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-sans mb-2 text-justify">
                      {project.desc}
                    </p>

                    <div className="pb-3">
                      <div className="flex flex-wrap items-center justify-start gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className=" flex items-center gap-1.5 px-2 py-1 rounded-xl text-sm font-medium bg-slate-800/50 text-white border-3 border-slate-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                        {/* {project.techStack.length > 3 && (
                          <span className="text-xs text-slate-500 self-center">
                            +{project.techStack.length - 3} more
                          </span>
                        )} */}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-end justify-between relative z-20">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className=" flex items-center justify-center gap-2 p-2.5 rounded-xl bg-radial from-gray-800 from-1% to-gray-900 border-3 border-slate-700/50 group-hover:border-white text-white transition-all duration-500 active:scale-90"
                      >
                        <FaBookOpen size={16} /> <ShinyText text="Case Study" disabled={false} speed={3} className="text-sm font-medium" />
                      </button>

                      <div className="flex gap-2 items-center justify-center relative z-20">
                        <a href={project.github} target="_blank">
                          <button className="p-2.5 rounded-xl bg-radial from-gray-800 from-1% to-gray-900 border-3 border-slate-700/50 group-hover:border-white text-white transition-all duration-500 active:scale-90">
                            <SiGithub className="h-5 w-5" />
                          </button>
                        </a>
                        <a href={project.live} target="_blank">
                          <button className="p-2.5 rounded-xl bg-radial from-green-800  from-1% to-green-900*2 border-3 border-slate-700/50 group-hover:border-green-500 text-white transition-all duration-500 active:scale-90">
                            <MdOpenInNew className="h-5 w-5" />
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </div>

      {/* Case Study Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent backdrop-blur-md">
          <div className="bg-slate-900 border-3 border-slate-700/50 p-8 rounded-3xl max-w-2xl w-full relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white"
            >
              <FaTimes size={24} className="active:scale-95 transition-all duration-75" />
            </button>
            <h2 className="text-3xl font-bold text-white mb-6">
              {selectedProject.title} - Case Study
            </h2>

            <div className="space-y-4 text-slate-300">
              <h4 className="text-blue-400 font-bold uppercase text-sm">
                The Challenge
              </h4>
              <p>{selectedProject.caseStudy.challenge}</p>

              <h4 className="text-blue-400 font-bold uppercase text-sm">
                The Solution
              </h4>
              <p>{selectedProject.caseStudy.solution}</p>

              <h4 className="text-blue-400 font-bold uppercase text-sm">
                Results
              </h4>
              <p>{selectedProject.caseStudy.results}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
