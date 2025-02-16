import { motion } from "framer-motion";
import React from "react";
import Hyperspeed from "../animation/Backgrounds/Hyperspeed/Hyperspeed";


const About = () => {
    return (
        <section data-scroll-container className="bg-black w-full min-h-screen flex flex-col items-center justify-center text-white">
            <Hyperspeed />
            <div className="container mx-auto p-4" id="about">
                <motion.div 
                    data-scroll 
                    data-scroll-speed="-2" 
                    data-scroll-direction="horizontal"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="text-6xl font-bold mb-4">About Us</h1>
                    <p className="text-lg mb-2">Welcome to our website! We are dedicated to providing the best service possible.</p>
                    <p className="text-lg mb-2">Our team is composed of experienced professionals who are passionate about what they do.</p>
                    <p className="text-lg">Thank you for visiting our site. We hope you find what you're looking for!</p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
