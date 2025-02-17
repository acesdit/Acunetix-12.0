import React, { useEffect, useState } from "react";

const Start = ({ onAnimationComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [glitchEffect, setGlitchEffect] = useState({ x: 0, y: 0 });
  const [hueRotate, setHueRotate] = useState(0);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchEffect({
        x: Math.random() * 10 - 5,
        y: Math.random() * 10 - 5
      });
      setHueRotate(Math.random() * 360);
    }, 50);

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
        {/* Main text with multiple distortion layers */}
        <div className="relative">
          {/* Base text */}
          <h1 className="text-7xl md:text-9xl font-bold relative z-10 transform-gpu">
            <span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
              style={{
                filter: `hue-rotate(${hueRotate}deg)`,
                transform: `translate(${glitchEffect.x}px, ${glitchEffect.y}px)`
              }}
            >
              Acunetix
            </span>
            <span 
              className="absolute left-0 -bottom-6 text-2xl md:text-4xl text-cyan-300 opacity-80"
              style={{
                transform: `translate(${glitchEffect.x * 2}px, ${glitchEffect.y * 2}px)`
              }}
            >
              -12.0
            </span>
          </h1>

          {/* Glitch layers */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 animate-glitch"
              style={{
                clipPath: `polygon(${Math.random() * 100}% 0, ${Math.random() * 100}% ${Math.random() * 100}%, 0 ${Math.random() * 100}%)`,
                animationDelay: `${i * 0.2}s`
              }}
            >
              <h1 className="text-7xl md:text-9xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Acunetix
                </span>
                <span className="absolute left-0 -bottom-6 text-2xl md:text-4xl text-pink-300 opacity-80">
                  -12.0
                </span>
              </h1>
            </div>
          ))}
        </div>

        {/* Matrix-style falling characters background */}
        <div className="absolute inset-0 overflow-hidden opacity-50 mix-blend-screen">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400 animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * -100}%`,
                animationDelay: `${Math.random() * 5}s`,
                fontSize: `${Math.random() * 20 + 10}px`,
                opacity: Math.random()
              }}
            >
              {String.fromCharCode(0x30A0 + Math.random() * 96)}
            </div>
          ))}
        </div>

        {/* Electric pulse effect */}
        <div className="absolute inset-0 animate-pulse-glow" />
      </div>
    </div>
  );
};

export default Start;