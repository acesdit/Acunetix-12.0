import React, { useEffect, useState } from "react";

const Start = ({ onAnimationComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [glitchOffset, setGlitchOffset] = useState({ x: 0, y: 0 });
  const [rgbOffset, setRgbOffset] = useState(0);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchOffset({
        x: Math.random() * 20 - 10,
        y: Math.random() * 20 - 10
      });
      setRgbOffset(Math.random() * 10);
    }, 50);

    const animationTimer = setTimeout(() => {
      setIsVisible(false);
      onAnimationComplete();
    }, 5000);

    return () => {
      clearInterval(glitchInterval);
      clearTimeout(animationTimer);
    };
  }, [onAnimationComplete]);

  return (
    <div className={`fixed inset-0 bg-black flex items-center justify-center z-[999] transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Fractal background */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay animate-fractal">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 border-2 border-cyan-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `scale(${Math.random()}) rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}
      </div>

      {/* Main glitch container */}
      <div className="relative group cursor-none overflow-hidden">
        {/* RGB split effect */}
        <div 
          className="absolute inset-0"
          style={{
            clipPath: 'inset(0 0 0 0)',
            mixBlendMode: 'screen',
            transform: `translate(${glitchOffset.x}px, ${glitchOffset.y}px)`
          }}
        >
          <h1 className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
            Acunetix
          </h1>
        </div>
        
        {/* Base text with dynamic displacement */}
        <div 
          className="relative z-20 animate-hologram"
          style={{
            filter: `url(#displacementFilter)`,
            textShadow: `0 0 30px rgba(110, 231, 183, 0.5)`
          }}
        >
          <h1 className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Acunetix
          </h1>
        </div>

        {/* Glitch layers */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 animate-glitch-layer"
            style={{
              clipPath: `inset(${Math.random() * 30}% 0 ${Math.random() * 30}% 0)`,
              transform: `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`,
              animationDelay: `${i * 0.1}s`
            }}
          >
            <h1 className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Acunetix
            </h1>
          </div>
        ))}

        {/* Version number illusion */}
        <div className="absolute left-full bottom-0 ml-6 animate-version-float">
          <span className="text-4xl md:text-6xl font-mono text-cyan-300">
            -12.0
          </span>
        </div>

        {/* Particle storm */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(200)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-300/50 rounded-full animate-particle-storm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `scale(${0.5 + Math.random()})`
              }}
            />
          ))}
        </div>
      </div>

      {/* SVG Filters */}
      <svg className="hidden">
        <filter id="displacementFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.01 0.02" numOctaves="3" />
          <feDisplacementMap in="SourceGraphic" scale="15" />
          <feGaussianBlur stdDeviation="1.5" />
        </filter>
        <filter id="chromaticAberration">
          <feOffset dx={-rgbOffset} dy="0" in="SourceGraphic" result="red" />
          <feOffset dx={rgbOffset} dy="0" in="SourceGraphic" result="blue" />
          <feBlend mode="screen" in="red" in2="blue" />
        </filter>
      </svg>
    </div>
  );
};

export default Start;