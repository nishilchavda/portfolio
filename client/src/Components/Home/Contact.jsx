import React from "react";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import axios from "axios";
import { toast } from "react-toastify";
import contact from "../../Assets/contact.png";
import ScrollFloat from "../ui/ScrollFloat";
import GradientText from "../ui/GradientText";
import SpotlightCard from "../ui/SpotlightCard";
import Magnet from "../ui/Magnet";
import TiltedCard from "../ui/TiltedCard";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [subject, setSubject] = useState("");
  const [active, setActive] = useState(false);

  const activeStyle =
    "w-full bg-slate-800/50 border-3 border-red-500 focus:border-blue-500 outline-none rounded-xl px-4 py-2 text-white transition-all resize-none animate-pulse";
  const defaultStyle =
    "w-full bg-slate-800/50 border-3 border-slate-700/50 focus:border-blue-500 outline-none rounded-xl px-4 py-2 text-white transition-all resize-none";
  const hideSpan = "hidden";
  const blockSpan = "text-red-500 px-3";

  const isEmailValid = (email) => {
    return /^[A-Za-z0-9._]{3,}@[a-zA-Z]{3,}[.]{1,1}[a-zA-Z.]{2,6}$/g.test(
      email,
    );
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !isEmailValid(email)  || !msg || !subject) {
      setActive(true);
      return;
    }
    try {
      await toast.promise(axios.post("api/sendEmail", { name, email, subject, msg }), {
        pending: "🚀 Sending your message...",
        success: {
          render({ data }) {
            setName("");
            setEmail("");
            setMsg("");
            setSubject("");
            setActive(false);
            return `Succes:${data.message}`;
          },
        },
        error: {
          render({ data }) {
            return `Error:${data.message}`;
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      id="contact"
      className="w-full xl:px-50 lg:px-40 md:px-20 px-6 pt-18 pb-10 sm:min-h-screen relative overflow-hidden"
    >
      <div>
        {/* Header */}
        <div className="text-center">
          <h1 className="text-white font-bold sm:text-4xl text-3xl pb-8">
            <ScrollFloat>Contact Me</ScrollFloat>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {/* Left Side: Contact Info */}
          <div className="space-y-8 sm:flex items-center justify-center hidden ">
            <TiltedCard className="w-full max-w-md cursor-grab active:cursor-grabbing">
              <img 
                src={contact} 
                alt="Contact Illustration" 
                className="w-full h-auto drop-shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:drop-shadow-[0_0_50px_rgba(139,92,246,0.6)] transition-all duration-500" 
              />
            </TiltedCard>
          </div>

          {/* Right Side: Contact Form */}
          <SpotlightCard 
            className="bg-transparent backdrop-blur-xl border-3 border-slate-700/50 rounded-3xl p-4 shadow-2xl relative"
            spotlightColor="rgba(59, 130, 246, 0.15)"
          >
            <form className="space-y-5 relative z-20">
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <GradientText className="text-2xl pb-2 font-bold justify-start ml-1" animationSpeed={6}>
                    Get In Touch
                  </GradientText>
                  <p className="text-white/50 font-sans text-sm p-1">
                    Have a project in mind or just want to say hi? Feel free to
                    reach out. I'm always open to discussing new projects and
                    creative ideas.
                  </p>
                </div>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder={
                      active && !name ? "Please Enter Full Name" : "Full Name"
                    }
                    className={active && !name ? activeStyle : defaultStyle}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <span
                    className={active && email.length > 0 && !isEmailValid(email) ? blockSpan : hideSpan}
                  >
                    {active && !isEmailValid(email) ? "*Enter Valid Email Address" : ""}
                  </span>

                  <input
                    type="email"
                    placeholder={
                      active && !email
                        ? "Please Enter Email Address"
                        : "Email Address"
                    }
                    className={
                      active && (!email || !isEmailValid(email))
                        ? activeStyle
                        : defaultStyle
                    }
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (active) setActive(false);
                    }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <input
                  type="text"
                  placeholder={
                    active && !subject ? "Please Enter Subject" : "Subject"
                  }
                  className={active && !subject ? activeStyle : defaultStyle}
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <textarea
                  rows="4"
                  placeholder={
                    active && !msg
                      ? "Please Fill this Field"
                      : "Tell me about your project..."
                  }
                  className={active && !msg ? activeStyle : defaultStyle}
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                ></textarea>
              </div>

              <Magnet padding={40} magnetStrength={3} className="w-full">
                <button
                  className="w-full group bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] active:scale-95"
                  onClick={handelSubmit}
                >
                  <span>Send Message</span>
                  <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </Magnet>
            </form>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
};

export default Contact;
