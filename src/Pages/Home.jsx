import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Home/Hero";
import AboutMe from "../Components/Home/AboutMe";
import Skill from "../Components/Home/Skill";
import Education from "../Components/Home/Education";
import Projects from "../Components/Home/Projects";

const Home = () => {
  return (
    <>
      <Hero/>
      <AboutMe/>
      <Skill/>
      <Projects/>
      <Education/>
    </>
  );
};

export default Home;
