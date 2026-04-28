import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const BubbleMenu = ({ navLinks, active, setActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-100 md:hidden flex flex-col items-end pointer-events-none">
      {/* Main Bubble */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-transparent flex items-center justify-center text-white z-50 active:scale-90 transition-transform pointer-events-auto"
      >
        <Motion.div
          initial={false}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </Motion.div>
      </button>

      {/* Child Bubbles */}
      <div className="absolute top-14 right-2 flex flex-col items-end gap-3 w-max">
        <AnimatePresence>
        {isOpen && navLinks.map((link, index) => (
          <Motion.div
            key={link.name}
            initial={{ opacity: 0, y: -20, scale: 0.8, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, scale: 0.8, filter: "blur(5px)" }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: index * 0.05 
            }}
            className="pointer-events-auto"
          >
            <Link
              to={link.to}
              smooth={true}
              spy={true}
              onClick={() => {
                setActive(link.name);
                setIsOpen(false);
              }}
              className={`px-6 py-3 rounded-full shadow-xl backdrop-blur-xl font-bold text-sm whitespace-nowrap cursor-pointer block border border-slate-700/50 ${
                active === link.name 
                  ? "bg-blue-600/90 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                  : "bg-slate-900/90 text-white/70 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          </Motion.div>
        ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BubbleMenu;
