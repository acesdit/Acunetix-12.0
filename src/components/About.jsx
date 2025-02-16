import React from 'react';

const About = () => {
    return (
        <div className="bg-black w-full fixed top-0 h-screen z-50 flex items-center justify-center">
            <div className="container mx-auto p-4" id="about">
                <div className="text-center">
                    <h1 className="text-6xl font-bold mb-4">About Us</h1>
                    <p className="text-lg mb-2">Welcome to our website! We are dedicated to providing the best service possible.</p>
                    <p className="text-lg mb-2">Our team is composed of experienced professionals who are passionate about what they do.</p>
                    <p className="text-lg">Thank you for visiting our site. We hope you find what you're looking for!</p>
                </div>
            </div>
        </div>
    );
};

export default About;
