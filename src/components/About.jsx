import { div } from 'framer-motion/client';
import React, { useState, useEffect } from 'react';

const About = () => {
    return (
        <div data-scroll-container className="bg-black w-full fixed top-0 h-18 z-50 flex items-center">
        <div className="container mx-auto p-4" id="about">
        <div data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal" >
            <h1 className="text-6xl font-bold mb-4 text-center">About Us</h1>
            <p className="text-lg mb-2 text-center">Welcome to our website! We are dedicated to providing the best service possible.</p>
            <p className="text-lg mb-2 text-center">Our team is composed of experienced professionals who are passionate about what they do.</p>
            <p className="text-lg text-center">Thank you for visiting our site. We hope you find what you're looking for!</p>
            </div>
        </div>
        </div>
    );
};

export default About;