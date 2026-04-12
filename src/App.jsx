import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import AuroraShader from "./Components/lightswind/aurora-shader";

const App = () => {
  return (
    <>
      <div className="inset-0 -z-10 h-auto w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
