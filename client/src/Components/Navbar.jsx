import React, { useState } from "react";
import { Link } from "react-scroll";
import GlassSurface from "./ui/GlassSurface";
import BubbleMenu from "./ui/BubbleMenu";

const Navbar = () => {
  // 1. Initialize state with "Home" (or your default)
  const [active, setActive] = useState("Home");
  
  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skill" },
    { name: "Projects", to: "projects" },
    { name: "Education", to: "education" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <>
      <nav className="fixed w-full hidden md:flex items-center justify-between xl:px-48 lg:px-38 px-5 py-4 text-white z-50 ">
        <h1 className="text-2xl font-bold px-2">Nishil Chavda</h1>
        <ul className="list-none flex items-center justify-between gap-4 select-none">
          {navLinks.map((link, index) => (
            <Link
              to={link.to}
              key={index}
              smooth={true}
              spy={true}
              onSetActive={() => setActive(link.name)} // 2. Track the active state
              className="cursor-pointer"
            >
              {/* 3. Conditionally render GlassSurface */}
              {active === link.name ? (
                <GlassSurface>
                  {link.name}
                </GlassSurface>
              ) : (
                <span className="px-4 py-2 font-bold hover:bg-[rgba(255,255,255,0.04)] rounded-full transition-all duration-300">
                  {link.name}
                </span>
              )}
            </Link>
          ))}
        </ul>
      </nav>

      {/* Mobile Top Header */}
      <nav className="w-full md:hidden flex items-center justify-between pl-3 pr-4 py-4 text-white">
        <h1 className="text-2xl font-bold px-2">Nishil Chavda</h1>
      <BubbleMenu navLinks={navLinks} active={active} setActive={setActive} />
      </nav>

      {/* Bubble Menu for Mobile */}
    </>
  );
};

export default Navbar;