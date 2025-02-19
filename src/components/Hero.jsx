import React from 'react';
import video from '../assets/Background.mp4';

const Hero = () => {
    return (
        <div className="relative w-full flex items-center justify-center h-screen">
            <video 
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop 
                muted 
                playsInline
                preload="auto"
            >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            <div className="relative z-10 text-center text-white" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>
                <h1 className="text-4xl md:text-8xl uppercase font-bold">Acunetix 12.0</h1>
                <p className='text-lg md:text-2xl md:h-12 pt-4'>Dive into world of illusions</p>
            </div>
        </div>
    );
};

export default Hero;