import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen w-full lg:px-52 px-6 py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-white font-bold sm:text-4xl text-3xl mb-4">
            Contact Me
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Contact Info */}
          <div className="space-y-8 flex items-center justify-center">
            <img src="/src/Assets/contact.png" alt="" />
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-transparent backdrop-blur-xl border border-slate-700/50 rounded-3xl p-4 shadow-2xl relative">
            <form className="space-y-5">
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <h1 className="text-white font-bold text-2xl p-1">Get In Touch</h1>
                  <p className="text-white/50 font-sans text-sm p-1">
                    Have a project in mind or just want to say hi? Feel free to
                    reach out. I'm always open to discussing new projects and
                    creative ideas.
                  </p>
                </div>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-slate-800/50 border border-slate-700 focus:border-blue-500 outline-none rounded-xl px-4 py-2 text-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-slate-800/50 border border-slate-700 focus:border-blue-500 outline-none rounded-xl px-4 py-2 text-white transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <textarea
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-800/50 border border-slate-700 focus:border-blue-500 outline-none rounded-xl px-4 py-2 text-white transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full group bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] active:scale-95">
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
