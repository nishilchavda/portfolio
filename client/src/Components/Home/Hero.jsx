import { BiBracket } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import {
  FaHashtag,
  FaInstagram,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { PiBracketsCurly } from "react-icons/pi";
import { RiCodeSSlashLine } from "react-icons/ri";
import { SiGithub, SiMongodb } from "react-icons/si";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

const SocialLinks = [
  {
    link: "https://www.linkedin.com/in/nishil-chavda",
    name: "LinkedIn",
    className:
      "bg-radial cursor-pointer from-blue-600  from-1% to-blue-600*2 sm:border-3 border-2 border-blue-500 p-2 text-white rounded-full text-xl font-bold active:scale-95 transition-all duration-300",
    icon: <FaLinkedin size={25} />,
  },
  {
    link: "https://github.com/nishilchavda",
    name: "GitHub",
    className:
      "bg-radial cursor-pointer from-black-600  from-1% to-black-600*2 sm:border-3 border-2 border-black-500 p-2 text-white rounded-full text-xl font-bold active:scale-95 transition-all duration-300",
    icon: <SiGithub size={25} />,
  },
  {
    link: "https://www.instagram.com/nishil_chavda",
    name: "Instagram",
    className:
      "bg-radial cursor-pointer from-pink-600  from-1% to-pink-600*2 sm:border-3 border-2 border-pink-500 p-2 text-white rounded-full text-xl font-bold active:scale-95 transition-all duration-300",
    icon: <BsInstagram size={25} />,
  },
];

const Hero = () => {
  return (
    <>
      {/* 1. Add relative and overflow-hidden here to catch all rogue icons */}
      <div
        id="home"
        className="relative overflow-x-hidden flex flex-row items-center xl:px-50 lg:px-40 sm:pt-0 sm:pb-0 pt-60 pb-10 px-5 sm:h-screen h-full w-full"
      >
        <div className="h-auto sm:w-3/5 w-full z-10">
          {" "}
          {/* Added z-10 to keep text on top */}
          <div className="flex flex-col justify-between sm:gap-6 gap-2">
            <h1 className="text-white font-bold lg:text-4xl xl:text-6xl md:text-5xl sm:text-6xl text-4xl">Hi!</h1>
            <h1 className="text-white font-bold lg:text-4xl xl:text-6xl md:text-5xl sm:text-6xl text-4xl">
              I'm Nishil Chavda
            </h1>
            <h1 className="text-white font-bold lg:text-3xl xl:text-5xl md:text-4xl sm:text-5xl text-3xl">
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  1000,
                  "Full Stack Developer",
                  1000,
                  "Frontend Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{ fontSize: "1em", display: "inline-block" }}
              />
            </h1>
          </div>
          <Link to="contact" smooth={true}>
            <button className="bg-radial from-green-800 cursor-pointer from-1% to-green-900*2 sm:border-3 border-2 border-green-700 px-6 py-2 text-white rounded-full text-2xl font-bold sm:mt-10 mt-8 active:scale-95 transition-all">
              Contact Me
            </button>
          </Link>
          <div className="flex flex-row items-center justify-items-start sm:mt-5 mt-4 gap-5">
            {SocialLinks.map((Social, index) => (
              <a href={Social.link} key={index} target="_blank">
                <button className={Social.className}>{Social.icon}</button>
              </a>
            ))}
          </div>
        </div>

        {/* 2. Desktop Images stay here */}
        <div className="hidden sm:flex justify-center items-center h-auto sm:w-2/5">
          <RiCodeSSlashLine className="h-120 w-120 text-white/50 animate-pulse duration-500" />
        </div>

        {/* 3. Mobile Images - Positioned relative to the WHOLE #home container */}
        <RiCodeSSlashLine className="absolute z-0 right-5 top-2 h-60 w-60 block sm:hidden  text-white/50 animate-pulse" />
      </div>
    </>
  );
};

export default Hero;
