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
import ShinyText from "../ui/ShinyText";
import StarBorder from "../ui/StarBorder";
import Magnet from "../ui/Magnet";

const SocialLinks = [
  {
    link: "https://www.linkedin.com/in/nishil-chavda",
    name: "LinkedIn",
    className:
      "bg-radial cursor-pointer from-blue-600 from-1% to-blue-800 sm:border-3 border-2 border-blue-500 p-2 text-white rounded-full text-xl font-bold active:scale-95 transition-all duration-300 shadow-[0_0_10px_rgba(37,99,235,0.3)]",
    icon: <FaLinkedin size={30} />,
  },
  {
    link: "https://github.com/nishilchavda",
    name: "GitHub",
    className:
      "bg-radial cursor-pointer from-slate-700 from-1% to-slate-900 sm:border-3 border-2 border-slate-600 p-2 text-white rounded-full text-xl font-bold active:scale-95 transition-all duration-300 shadow-[0_0_10px_rgba(71,85,105,0.3)]",
    icon: <SiGithub size={30} />,
  },
  {
    link: "https://www.instagram.com/nishil_chavda",
    name: "Instagram",
    className:
      "bg-radial cursor-pointer from-pink-600 from-1% to-pink-800 sm:border-3 border-2 border-pink-500 p-2 text-white rounded-full text-xl font-bold active:scale-95 transition-all duration-300 shadow-[0_0_10px_rgba(219,39,119,0.3)]",
    icon: <BsInstagram size={30} />,
  },
];

const Hero = () => {
  return (
    <>
      {/* 1. Add relative and overflow-hidden here to catch all rogue icons */}
      <div
        id="home"
        className="relative overflow-x-hidden flex flex-row items-center xl:px-50 lg:px-40 sm:pt-0 sm:pb-0 pt-75 pb-10 px-5 sm:h-screen h-full w-full"
      >
        <div className="h-auto sm:w-3/5 w-full z-10">
          {" "}
          {/* Added z-10 to keep text on top */}
          <div className="flex flex-col justify-between sm:gap-6 gap-2">
            <h1 className="text-white font-bold lg:text-4xl xl:text-6xl md:text-5xl sm:text-6xl text-4xl">
              <ShinyText
                text="Hi!"
                speed={2}
                delay={0}
                color="#b5b5b5"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />
            </h1>
            <h1 className="text-white font-bold lg:text-4xl xl:text-6xl md:text-5xl sm:text-6xl text-4xl">
              <ShinyText
                text="I'm Nishil Chavda"
                speed={2}
                delay={0}
                color="#b5b5b5"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />
            </h1>
            <h1 className="text-white font-bold lg:text-3xl xl:text-5xl md:text-4xl sm:text-5xl text-3xl">
              <div className="shiny-text-animation">
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
              </div>
            </h1>
          </div>
          <Link to="contact" smooth={true}>
            <StarBorder color="#86efac" speed="4s" className="sm:mt-10 mt-8">
              <ShinyText text="Contact Me" disabled={false} speed={3} className="" color="#ffffff" shineColor="#86efac" />
            </StarBorder>
          </Link>
          <div className="flex flex-row items-center justify-start sm:mt-5 mt-4 sm:gap-5 gap-2">
            {SocialLinks.map((Social, index) => (
              <a href={Social.link} key={index} target="_blank">
                <Magnet padding={50} magnetStrength={5}>
                  <button className={Social.className}>{Social.icon}</button>
                </Magnet>
              </a>
            ))}
          </div>
        </div>

        {/* 2. Desktop Images stay here */}
        <div className="hidden sm:flex justify-center items-center h-auto sm:w-2/5">
          <RiCodeSSlashLine className="h-120 w-120 text-white/50 animate-pulse duration-500" />
        </div>

        {/* 3. Mobile Images - Positioned relative to the WHOLE #home container */}
        <RiCodeSSlashLine className="absolute z-0 right-5 top-2 h-70 w-70 block sm:hidden  text-white/50 animate-pulse" />
      </div>
    </>
  );
};

export default Hero;
