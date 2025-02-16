import React from "react";
import Hyperspeed from "../animation/Backgrounds/Hyperspeed/Hyperspeed";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section 
            className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black"
            id="about"
            // data-scroll-section    for animation
        >
            {/* Full-screen Hyperspeed Background */}
            <motion.div 
                className="absolute inset-0 z-0"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
            >
                <Hyperspeed />
            </motion.div>

            {/* Animated Gradient Overlay
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 z-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            /> */}

            {/* Content */}
            <motion.div 
                className="relative z-10 max-w-4xl mx-auto px-4 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                    initial={{ letterSpacing: "2rem" }}
                    animate={{ letterSpacing: "0.5rem" }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                >
                    ABOUT US
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    Pioneering the future of digital experiences, we combine cutting-edge technology 
                    with creative vision to deliver transformative solutions. Our team of experts 
                    thrives at the intersection of innovation and execution.
                </motion.p>

                {/* <motion.div
                    className="flex justify-center gap-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full hover:scale-105 transition-transform">
                        Learn More
                    </button>
                    <button className="border border-white/30 px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                        Our Team
                    </button>
                </motion.div> */}
            </motion.div>

            {/* Floating Elements
            <motion.div
                className="absolute bottom-20 left-1/2 -translate-x-1/2 z-0"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-30 rounded-full" />
            </motion.div> */}
        </section>
    );
};

export default About;