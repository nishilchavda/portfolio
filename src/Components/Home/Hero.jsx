import { BsInstagram } from "react-icons/bs";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
const HeroImg =
  "https://i.pinimg.com/736x/3d/3b/f1/3d3bf1f13bc997907db8aa68e4ab5153.jpg";

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
    link: "https://www.instagram.com/nishilchavda",
    name: "Instagram",
    className:
      "bg-radial cursor-pointer from-pink-600  from-1% to-pink-600*2 sm:border-3 border-2 border-pink-500 p-2 text-white rounded-full text-xl font-bold active:scale-95 transition-all duration-300",
    icon: <BsInstagram size={25} />,
  },
];

const Hero = () => {
  return (
    <>
      <div
        id="home"
        className="flex flex-row items-center lg:px-50 sm:pt-0 sm:pb-0 pt-60 pb-10 px-5 sm:h-screen h-full w-full"
      >
        <div className="h-auto sm:w-3/5 w-full">
          <div className="flex flex-col justify-between sm:gap-6 gap-2">
            <h1 className="text-white font-bold sm:text-6xl text-3xl">Hi!</h1>
            <h1 className="text-white font-bold sm:text-6xl text-3xl">
              I'm Nishil Chavda
            </h1>
            <h1 className="text-white font-bold sm:text-5xl text-2xl">
              {/* MERN Stack Developer */}
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  1000, // Wait 1s
                  "Full Stack Developer",
                  1000,
                  "Frontend Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50} // Typing speed (ms per char)
                repeat={Infinity} // Loop infinitely
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
            {/* social */}
            {SocialLinks.map((Social, index) => {
              return (
                <a href={Social.link} key={index} target="_blank">
                  <button className={Social.className}>
                    {Social.icon}
                  </button>
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex justify-end h-auto sm:w-2/5">
          <img
            src={HeroImg}
            className="hidden sm:block rounded-full w-100 h-100 object-cover"
            alt=""
          />
          <img
            src={HeroImg}
            className="block sm:hidden rounded-full w-50 h-50 object-cover absolute top-25 right-5"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
