import React, { useState, useEffect, lazy, Suspense, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./About.css";

const Hyperspeed = lazy(() => import("../animation/Backgrounds/Hyperspeed/Hyperspeed"));

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Throttled resize handler
  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      requestAnimationFrame(checkMobile);
    };

    checkMobile();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [checkMobile]);

  // Simplified animations for mobile
  const titleAnimation = {
    initial: { scale: isMobile ? 1 : 0.95 },
    animate: { scale: 1 },
    transition: {
      duration: prefersReducedMotion ? 0 : (isMobile ? 0.5 : 1.2),
      ease: "backOut"
    }
  };

  const containerAnimation = {
    initial: { opacity: 0, y: isMobile ? 10 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: prefersReducedMotion ? 0 : 0.8,
      ease: "easeOut"
    }
  };

  const textAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      delay: prefersReducedMotion ? 0 : 0.3,
      duration: prefersReducedMotion ? 0 : (isMobile ? 0.5 : 0.8)
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-4 sm:px-6">
      {/* Conditional background rendering */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 w-full h-full">
          <Suspense fallback={null}>
            <Hyperspeed mobileOptimized={false} />
          </Suspense>
        </div>
      )}

      {/* Optimized motion containers */}
      <motion.div
        {...containerAnimation}
        className="relative z-10 w-full max-w-3xl text-center px-4 sm:px-8 md:px-12 lg:px-16 py-8"
      >
        <motion.h1
          {...titleAnimation}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg"
        >
          ABOUT US
        </motion.h1>

        <motion.p
          {...textAnimation}
          className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8 pt-6 sm:pt-10"
        >
          <strong>Acunetix 12.0 </strong> is a flagship event organised by ACES and CSI, offering a range of Tech & Non-Tech events. Participants take part in diverse competitions, showcasing their skills and earning recognition. With exciting prizes and a mix of solo and team events, it's a unique opportunity for students to shine and be part of an unforgettable experience.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default React.memo(About);