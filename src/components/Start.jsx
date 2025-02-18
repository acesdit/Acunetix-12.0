import React, { useState, useEffect } from "react";
import img from "../assets/logo.png";
import "./styles.css";

export default function LogoAnimation() {
  const [moveUp, setMoveUp] = useState(false);
  const [showText, setShowText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const moveTimer = setTimeout(() => setMoveUp(true), 1000);
    const textTimer = setTimeout(() => setShowText(true), 2000);
    const fadeOutTimer = setTimeout(() => setFadeOut(true), 4000);
    
    return () => {
      clearTimeout(moveTimer);
      clearTimeout(textTimer);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  return (

    <div className={`fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black overflow-hidden transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
      {/* Content Container */}
      <div className={`relative flex flex-col items-center z-10 transition-all duration-1000 ${moveUp ? "mt-[-40vh]" : "mt-0"}`}>
        {/* Logo with scaling and translation */}
        <img
          src={img}
          alt="Logo"
          className={`w-24 h-24 md:w-22 md:h-22 transition-transform duration-1000 ${
            moveUp ? "translate-y-[-25vh] max-sm:translate-y-[-20vh] scale-50" : "rotate-360"
          }`}
        />

        

      </div>
    </div>
  );
}