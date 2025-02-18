import React, { useState, useEffect, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import "./About.css";

// Lazy load the Hyperspeed component
const Hyperspeed = lazy(() => import("../animation/Backgrounds/Hyperspeed/Hyperspeed"));

const About = () => {
  // State to decide whether to render the hyperlapse animation
  const [shouldRenderHyperspeed, setShouldRenderHyperspeed] = useState(false);

  useEffect(() => {
    // Check if the device width is greater than 768px (or any condition you prefer)
    if (window.innerWidth > 768) {
      setShouldRenderHyperspeed(true);
    }
  }, []);

  return (
    <section 
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-4 sm:px-6"
    >
      {/* Conditionally render the Hyperspeed Animated Background */}
      {shouldRenderHyperspeed && (
        <div className="absolute inset-0 z-0 w-full h-full">
          <Suspense fallback={null}>
            <Hyperspeed />
          </Suspense>
        </div>
      )}

      {/* Content with Floating Effect & Glassmorphic Styling */}
      <div 
        className="relative z-10 w-full max-w-3xl text-center px-4 sm:px-8 md:px-12 lg:px-16 py-8"
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg"
        >
          ABOUT US
        </h1>

        <p
          className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8 pt-6 sm:pt-10"
        >
          Pioneering the future of digital experiences, we blend cutting-edge technology 
          with creative vision to deliver transformative solutions. Our team of experts 
          thrives at the intersection of <strong>innovation</strong> and <strong>execution</strong>.
        </p>
      </div>
    </section>
  );
};

export default About;
