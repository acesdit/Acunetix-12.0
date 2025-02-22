import React, { useState, useEffect } from 'react';
import video from '../assets/Background.mp4';
import poster from '../assets/poster.jpg'; // Add a poster frame
import VideoJS from '@videojs-player/react';
import 'video.js/dist/video-js.css';

const Hero = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const targetDate = new Date('2025-03-20T10:00:00');

    // Video.js options
    const videoJsOptions = {
        autoplay: true,
        controls: false,
        loop: true,
        muted: true,
        playsInline: true,
        preload: 'auto',
        responsive: true,
        fluid: true,
        poster: poster,
        sources: [{
            src: video,
            type: 'video/mp4'
        }]
    };

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full flex items-center justify-center h-screen">
            {/* Video.js Player */}
            <div className="absolute inset-0 w-full h-full">
                <VideoJS 
                    options={videoJsOptions}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 text-center text-white p-2 md:p-12 lg:p-16 flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-10" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-sans">Acunetix 12.0</h1>
                <p className="text-md sm:text-lg md:text-2xl lg:text-3xl">Dive into the world of illusions</p>

                {/* Countdown Timer */}
                <div className="flex flex-wrap gap-4 sm:gap-8 md:gap-10 text-2xl sm:text-2xl md:text-2xl font-bold justify-center">
                    {Object.entries(timeLeft).map(([unit, value]) => (
                        <div key={unit} className="flex flex-col items-center w-17 sm:w-24 md:w-28">
                            <span>{value.toString().padStart(2, '0')}</span>
                            <span className="text-[12px] sm:text-lg md:text-xl">{unit.toUpperCase()}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;