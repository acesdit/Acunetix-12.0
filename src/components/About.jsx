    import React from "react";
    import Hyperspeed from "../animation/Backgrounds/Hyperspeed/Hyperspeed";
    import { motion } from "framer-motion";
    import "./About.css";

    const About = () => {
        return (
            <section 
                className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-4 sm:px-6"
            >
                {/* Hyperspeed Animated Background */}
                <div 
                    className="absolute inset-0 z-0 w-full h-full"
                >
                    <Hyperspeed />
                </div>

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
                        🚀 Pioneering the future of digital experiences, we blend cutting-edge technology 
                        with creative vision to deliver transformative solutions. Our team of experts 
                        thrives at the intersection of <strong>innovation</strong> and <strong>execution</strong>.
                    </p>
                </div>
            </section>
        );
    };

    export default About;
