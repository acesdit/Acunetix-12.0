import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';

const About = () => {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        if (scrollContainerRef.current) {
            const scroll = new LocomotiveScroll({
                el: scrollContainerRef.current,
                smooth: true,
                direction: 'horizontal', // Optional: Set to 'horizontal' if you want horizontal scrolling
                multiplier: 1, // Adjust the scroll speed
                smartphone: {
                    smooth: true,
                },
                tablet: {
                    smooth: true,
                },
            });

            return () => {
                scroll.destroy();
            };
        }
    }, []);

    return (
        <div ref={scrollContainerRef} data-scroll-container className="bg-black w-full fixed top-0 h-18 z-50 flex items-center">
            <div className="container mx-auto p-4" id="about">
                <div data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
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