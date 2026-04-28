import React from 'react';

const StarBorder = ({
  className = "",
  color = "white",
  speed = "6s",
  children,
  ...rest
}) => {
  return (
    <div className={`relative inline-block py-px overflow-hidden rounded-full ${className}`} {...rest}>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animation: `star-movement-bottom ${speed} linear infinite alternate`,
        }}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animation: `star-movement-top ${speed} linear infinite alternate`,
        }}
      ></div>
      <div className="relative z-1 bg-radial from-green-800 to-green-900 border-3 border-green-700/50 backdrop-blur-md text-white text-center rounded-full sm:px-8 px-6 py-2 sm:text-2xl text-xl font-bold active:scale-95 transition-all shadow-[0_0_15px_rgba(34,197,94,0.3)]">
        {children}
      </div>
      <style>
        {`
          @keyframes star-movement-bottom {
            0% { transform: translate(0%, 0%); opacity: 1; }
            100% { transform: translate(-100%, 0%); opacity: 0; }
          }
          @keyframes star-movement-top {
            0% { transform: translate(0%, 0%); opacity: 1; }
            100% { transform: translate(100%, 0%); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default StarBorder;
