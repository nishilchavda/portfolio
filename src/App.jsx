import React from "react";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./Components/Home/AboutMe";
import Projects from "./Components/Home/Projects";
import Education from "./Components/Home/Education";
import Contact from "./Components/Home/Contact";

const App = () => {
  return (
    <>
      {/* <div className="inset-0 -z-10 h-auto w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"> */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-slate-950">
        {/* Top radial glow (Purple) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(139,92,246,0.3),transparent)]" />

        {/* Bottom radial glow (Green) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(34,197,94,0.15),transparent)]" />

        {/* The Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      {/* </div> */}
    </>
  );
};

export default App;
