import React, { useState, useEffect, lazy, Suspense } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./About.css";

const Hyperspeed = lazy(() => import("../animation/Backgrounds/Hyperspeed/Hyperspeed"));

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-4 sm:px-6">
      {/* Mobile-Optimized Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Suspense fallback={<div className="bg-black absolute inset-0" />}>
          <Hyperspeed mobileOptimized={isMobile} />
        </Suspense>
      </div>

      {/* Mobile-First Animations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.8,
          ease: "easeOut"
        }}
        className="relative z-10 w-full max-w-3xl text-center px-4 sm:px-8 md:px-12 lg:px-16 py-8"
      >
        <motion.h1
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 1.2,
            ease: "backOut"
          }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg"
        >
          ABOUT US
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: prefersReducedMotion ? 0 : 0.3,
            duration: prefersReducedMotion ? 0 : 0.8
          }}
          className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8 pt-6 sm:pt-10"
        >
          <strong>Acunetix 12.0 </strong> is a flagship event organised by ACES and CSI, offering a range  of Tech & Non-Tech events. Participants take part in diverse competitions, showcasing their skills and earning recognition. With exciting prizes and a mix of solo and team events, it's a unique opportunity for students to shine and be part of an unforgettable experience.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;