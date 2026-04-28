import React from 'react';

export default function GradientText({
  children,
  className = "",
  colors = ["#3b82f6", "#8b5cf6", "#ec4899", "#3b82f6"],
  animationSpeed = 8,
  showBorder = false,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`relative flex max-w-fit flex-row items-center justify-center font-medium backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer ${className}`}>
      {showBorder && (
        <div
          className="absolute inset-0 bg-cover z-0 pointer-events-none rounded-[1.25rem]"
          style={{
            ...gradientStyle,
            backgroundSize: '300% 100%',
            animation: `gradient ${animationSpeed}s linear infinite`,
          }}
        >
          <div className="absolute inset-0 bg-slate-900 rounded-[1.25rem] z-[-1]" />
        </div>
      )}
      <div
        className="inline-block relative z-2 text-transparent bg-cover"
        style={{
          ...gradientStyle,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          backgroundSize: '300% 100%',
          animation: `gradient ${animationSpeed}s linear infinite`,
        }}
      >
        {children}
      </div>
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
}
