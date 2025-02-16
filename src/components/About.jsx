import React from "react";
import Hyperspeed from "../animation/Backgrounds/Hyperspeed/Hyperspeed";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section 
            className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black py-16 px-4"
            id="about"
            data-scroll-section
        >
            {/* Background Animation */}
            <motion.div 
                className="absolute inset-0 z-0"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
            >
                <Hyperspeed />
            </motion.div>

            {/* Content Container */}
            <motion.div 
                className="relative z-10 max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                {/* Title */}
                <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                    initial={{ letterSpacing: ["1rem", "2rem"] }}
                    animate={{ letterSpacing: "0.5rem" }}
                    transition={{ 
                        duration: 1.5, 
                        ease: "circOut",
                        letterSpacing: {
                            duration: 1.2,
                            ease: "easeOut"
                        }
                    }}
                >
                    ABOUT US
                </motion.h1>

                {/* Description */}
                <motion.p
                    className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed md:leading-loose mb-6 md:mb-8 max-w-[90%] mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    Pioneering the future of digital experiences, we combine cutting-edge technology 
                    with creative vision to deliver transformative solutions. Our team of experts 
                    thrives at the intersection of innovation and execution.
                </motion.p>

                {/* Buttons */}
                {/* <motion.div
                    className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 sm:px-8 sm:py-3 rounded-full hover:scale-105 transition-transform text-sm sm:text-base">
                        Learn More
                    </button>
                    <button className="border border-white/30 px-6 py-2 sm:px-8 sm:py-3 rounded-full hover:bg-white/10 transition-colors text-sm sm:text-base">
                        Our Team
                    </button>
                </motion.div> */}
            </motion.div>

            {/* Floating Elements (Mobile Optimized) */}
            <motion.div
                className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-0"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r from-blue-500 to-purple-600 blur-xl sm:blur-2xl md:blur-3xl opacity-30 rounded-full" />
            </motion.div>
        </section>
    );
};

export default About;