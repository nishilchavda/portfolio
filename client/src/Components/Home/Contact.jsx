import React from "react";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [active, setActive] = useState(false);

  const activeStyle =
    "w-full bg-slate-800/50 border-3 border-red-500 focus:border-blue-500 outline-none rounded-xl px-4 py-2 text-white transition-all resize-none animate-pulse";
  const defaultStyle =
    "w-full bg-slate-800/50 border-3 border-slate-700/50 focus:border-blue-500 outline-none rounded-xl px-4 py-2 text-white transition-all resize-none";

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !msg) {
      setActive(true);
      return;
    }
    try {
      await toast.promise(
        axios.post("http://localhost:3001/api/sendEmail", { name, email, msg }),
        {
          pending: "🚀 Sending your message...",
          success: {
            render({ data }) {
              setName("");
              setEmail("");
              setMsg("");
              setActive(false);
              return `Succes:${data.data.message}`;
            },
          },
          error: {
            render({ data }) {
              return `Error:${data.data.message}`;
            },
          },
        },
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      id="contact"
      className="min-h-screen w-full xl:px-52 lg:px-38 px-6 py-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-white font-bold sm:text-4xl text-3xl mb-4">
            Contact Me
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {/* Left Side: Contact Info */}
          <div className="space-y-8 sm:flex items-center justify-center hidden ">
            <img src="/src/Assets/contact.png" alt="" />
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-transparent backdrop-blur-xl border-3 border-slate-700/50 rounded-3xl p-4 shadow-2xl relative">
            <form className="space-y-5">
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <h1 className="text-white font-bold text-2xl p-1">
                    Get In Touch
                  </h1>
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
                  <input
                    type="email"
                    placeholder={
                      active && !email
                        ? "Please Enter Email Address"
                        : "Email Address"
                    }
                    className={active && !email ? activeStyle : defaultStyle}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
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

              <button
                className="w-full group bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] active:scale-95"
                onClick={handelSubmit}
              >
                <span>Send Message</span>
                <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
