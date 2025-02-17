import React, { useEffect, useState } from "react";

const Start = ({ onAnimationComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [glitchEffect, setGlitchEffect] = useState(0);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchEffect(Math.floor(Math.random() * 10));
    }, 100);

    const animationTimer = setTimeout(() => {
      setIsVisible(false);
      onAnimationComplete();
    }, 3000);

    return () => {
      clearInterval(glitchInterval);
      clearTimeout(animationTimer);
    };
  }, [onAnimationComplete]);

  return (
    <div className={`fixed inset-0 bg-black flex items-center justify-center z-[999] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="relative group">
        {/* Glitch effect layer */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ clipPath: `inset(${glitchEffect}% 0 ${100 - glitchEffect}% 0)` }}
        >
          <h1 className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse">
            Acunetix-12.0
          </h1>
        </div>
        
        {/* Main text with gradient animation */}
        <h1 className="text-7xl md:text-9xl font-bold relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 animate-gradient-x">
            Acunetix
          </span>
          <span className="absolute left-0 -bottom-6 text-2xl md:text-4xl text-cyan-300 opacity-80 animate-bounce">
            -12.0
          </span>
        </h1>

        {/* Animated particles background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Start;