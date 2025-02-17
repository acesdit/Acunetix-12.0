import React from "react";
import Hyperspeed from "../animation/Backgrounds/Hyperspeed/Hyperspeed";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section 
            className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-4 sm:px-6"
            id="about"
        >
            {/* Mobile-optimized Background Animation */}
            <motion.div 
                className="absolute inset-0 z-0 w-full h-full"
                initial={{ x: "-30%", scale: 1.1 }} // Reduced values for mobile
                animate={{ x: "0%", scale: 1, filter: "blur(0px)" }}
                transition={{
                    duration: 4,
                    ease: "easeOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            >
                <Hyperspeed />
            </motion.div>

            {/* Content Container with Mobile Fixes */}
            <motion.div 
                className="relative z-30 w-full max-w-3xl text-center px-4 sm:px-8 md:px-12 lg:px-16 py-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            >
                {/* Glassmorphism Container for Better Mobile Visibility */}
                <div className="backdrop-blur-sm bg-black/40 rounded-xl p-6 sm:p-8 border border-white/10">
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg px-2"
                        initial={{ letterSpacing: "2rem", opacity: 0 }}
                        animate={{ letterSpacing: "0.5rem", opacity: 1 }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        style={{ WebkitTextFillColor: 'transparent' }} // iOS fix
                    >
                        ABOUT US
                    </motion.h1>

                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed mb-6 sm:mb-8 pt-6 sm:pt-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        🚀 Pioneering the future of digital experiences, we blend cutting-edge technology 
                        with creative vision to deliver transformative solutions. Our team of experts 
                        thrives at the intersection of <strong className="text-blue-300">innovation</strong> and 
                        <strong className="text-purple-300"> execution</strong>.
                    </motion.p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;