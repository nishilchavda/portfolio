import React from "react";
import Hero from "../Components/Home/Hero";
import AboutMe from "../Components/Home/AboutMe";
import Skill from "../Components/Home/Skill";
import Projects from "../Components/Home/Projects";
import Education from "../Components/Home/Education";
import Contact from "../Components/Home/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skill />
      <Projects />
      <Education />
      <Contact />
    </>
  );
};

export default Home;
