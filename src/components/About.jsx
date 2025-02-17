import React from "react";
import Hyperspeed from "../animation/Backgrounds/Hyperspeed/Hyperspeed";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section 
            className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden"
            id="about"
        >
            {/* Hyperspeed Animated Background - Adjusted for Responsiveness */}
            <motion.div 
                className="absolute inset-0 z-0 w-full h-full"
                initial={{ x: "-60%", scale: 1.2 }}
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

            {/* Content with Floating Effect & Glassmorphic Styling */}
            <motion.div 
                className="relative z-10 w-full max-w-3xl text-center px-6 py-8 sm:px-10 md:px-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            >
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg"
                    initial={{ letterSpacing: "2rem", opacity: 0 }}
                    animate={{ letterSpacing: "0.5rem", opacity: 1 }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                >
                    ABOUT US
                </motion.h1>

                <motion.p
                    className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    🚀 Pioneering the future of digital experiences, we blend cutting-edge technology 
                    with creative vision to deliver transformative solutions. Our team of experts 
                    thrives at the intersection of **innovation** and **execution**.
                </motion.p>
            </motion.div>
        </section>
    );
};

export default About;
