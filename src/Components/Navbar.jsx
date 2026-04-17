import { Menu } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const activeStyle =
    "inset-0 w-full h-full z-0 rounded-full transition-all duration-300 shadow-[inset_0px_0px_20px_-5px_rgba(255,255,255,0.9)] bg-[rgba(255, 255, 255, 0.04)] ring-2 ring-white/60 ring-inset px-4 py-2 font-bold";
  const inactiveStyle = "inset-0 w-full h-full z-0 rounded-full px-4 py-2 font-bold cursor-pointer hover:bg-[rgba(255, 255, 255, 0.04)] transition-all duration-300";

  // navbar links data 
  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Education", to: "education" },
    { name: "Contact", to: "contact" },
  ];

  // Hamburger for mobile view
  const [toggleMenu, settoggleMenu] = useState(false);

  const handleToggleMenu = () => {
    settoggleMenu(!toggleMenu);
  };

  return (
    <>
      {/* navbar  */}
      <nav className="fixed w-full hidden md:flex items-center justify-between lg:px-48 px-5 py-4 text-white z-50 ">
        <h1 className="text-2xl font-bold px-2">Nishil Chavda</h1>
        <ul
          className={`list-none flex items-center justify-between gap-4 select-none ${toggleMenu ? "block" : "hidden"} md:flex`}
        >
          {navLinks.map((link, index) => {
            return (
              <Link
                to={link.to}
                key={index}
                smooth={true}
                spy={true}
                className="inset-0 w-full h-full z-0 rounded-full px-4 py-2 font-bold cursor-pointer hover:bg-[rgba(255, 255, 255, 0.04)] transition-all duration-300"
                activeClass="inset-0 w-full h-full z-0 rounded-full transition-all duration-300 shadow-[inset_0px_0px_20px_-5px_rgba(255,255,255,0.9)] bg-[rgba(255, 255, 255, 0.04)] ring-2 ring-white/60 ring-inset px-4 py-2 font-bold"
              >
                {link.name}
              </Link>
            );
          })}

          {/* inset-0 w-full h-full z-0 rounded-full pointer-events-none shadow-[inset_0px_0px_20px_-5px_rgba(255,255,255,0.7)] bg-[rgba(255, 255, 255, 0.04)] border border-white/70 px-3 py-2 */}
        </ul>
        {/* <h2 className="bg-radial from-green-800  from-1% to-green-900*2 border-2 border-green-700 px-4 py-2 rounded-full font-bold">
          MERN Stack Developer
        </h2> */}
      </nav>

      {/* hamburger  */}
      <nav className="w-full md:hidden flex items-center justify-between pl-3 pr-4 py-4 gap-2 text-white ">
        <h1 className="text-2xl font-bold px-2">Nishil Chavda</h1>
        {/* <h2 className="bg-radial from-green-800 from-1% to-green-900*2 border-2 border-green-700 px-3 py-2 rounded-full text-sm font-semibold">
          MERN Stack Developer
        </h2> */}
        <button className="md:hidden" onClick={handleToggleMenu}>
          <Menu className="text-white" />
        </button>
      </nav>

      {/* sidebar */}

      {toggleMenu && (
        <section className="md:hidden relative flex justify-end">
          <div className="w-4/5 z-20 bg-transparent backdrop-blur-xl h-screen fixed top-0 flex items-center justify-center">
            {/* close button  */}
            <div>
              <button
                onClick={handleToggleMenu}
                className="text-white text-4xl top-10 right-10 absolute"
              >
                &times;
              </button>
            </div>

            <div className="flex items-center justify-center text-white">
              {/* links  */}

              <ul className="flex flex-col items-center text-center justify-center gap-2 text-xl">
                {navLinks.map((link) => {
                  return (
                    <Link
                      to={link.to}
                      onClick={() => {
                        setActive(link.name);
                      }}
                      className={
                        link.name === active ? activeStyle : inactiveStyle
                      }
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Navbar;
