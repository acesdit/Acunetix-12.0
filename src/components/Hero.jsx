import React, { useState, useEffect } from 'react';
import video from '../assets/Background.mp4';

const Hero = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const targetDate = new Date('2025-02-21T10:00:00');

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

            {/* Content Container */}
            <div className="relative z-10 text-center text-white p-6 md:p-10" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>
                
                {/* Title Positioned Slightly Higher */}
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4 mt-4">Acunetix 12.0</h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-10">Dive into the world of illusions</p>

                {/* Countdown Timer */}
                <div className="flex gap-4 sm:gap-6 md:gap-12 text-2xl sm:text-4xl md:text-6xl font-bold justify-center">
                    <div className="flex flex-col items-center">
                        <span>{timeLeft.days.toString().padStart(2, '0')}</span>
                        <span className="text-xs sm:text-sm md:text-lg">DAYS</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span>{timeLeft.hours.toString().padStart(2, '0')}</span>
                        <span className="text-xs sm:text-sm md:text-lg">HOURS</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>
                        <span className="text-xs sm:text-sm md:text-lg">MINUTES</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
                        <span className="text-xs sm:text-sm md:text-lg">SECONDS</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
