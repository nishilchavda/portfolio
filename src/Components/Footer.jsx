import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="lg:px-52 px-5 relative mt-2 border-t border-slate-800 bg-slate-950/20 backdrop-blur-md">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand/Logo Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white tracking-tighter">
              NISHIL CHAVDA
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xs">
              Building digital experiences with precision and modern aesthetics. 
              Let's create something amazing.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-8 text-sm font-medium text-slate-400">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-all hover:scale-110">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-all hover:scale-110">
                <SiGithub size={20} />
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="p-3 bg-slate-800/50 border border-slate-700 rounded-full text-blue-400 hover:bg-blue-500 hover:text-white transition-all active:scale-90"
              aria-label="Scroll to top"
            >
              <FiArrowUp size={20} />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-10 pt-10 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Nishil Chavda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;