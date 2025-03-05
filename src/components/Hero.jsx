import React, { useState, useEffect } from 'react';
import video from '../assets/Background.mp4';

const Hero = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const targetDate = new Date('2025-03-20T10:00:00');

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
                playbackRate="2"
            >
                <source 
                    // src="https://cdn.jsdelivr.net/gh/sujal-pawar/video@main/Background6.mp4" 
                    src={video}
                    type="video/mp4" 
                />
                Your browser does not support the video tag.
            </video>
            {/* <div className="absolute inset-0 bg-black/50 pb-0 "></div> */}
            {/* Content Container */}
            <div className="relative z-10 text-center text-white p-2 md:p-12 lg:p-16 flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-10" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>

                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-sans">Acunetix 12.0</h1>
                <p className="text-md sm:text-lg md:text-2xl lg:text-3xl">Dive into the world of illusions</p>

                {/* Countdown Timer */}
                <div className="flex flex-wrap gap-4 sm:gap-8 md:gap-10 text-2xl sm:text-2xl md:text-2xl font-bold justify-center">
                    <div className="flex flex-col items-center w-17 sm:w-24 md:w-28">
                        <span>{timeLeft.days.toString().padStart(2, '0')}</span>
                        <span className="text-[12px] sm:text-lg md:text-xl">DAYS</span>
                    </div>
                    <div className="flex flex-col items-center w-17 sm:w-24 md:w-28">
                        <span>{timeLeft.hours.toString().padStart(2, '0')}</span>
                        <span className="text-[12px] sm:text-lg md:text-xl">HOURS</span>
                    </div>
                    <div className="flex flex-col items-center w-17 sm:w-24 md:w-28">
                        <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>
                        <span className="text-[12px] sm:text-lg md:text-xl">MINUTES</span>
                    </div>
                    <div className="flex flex-col items-center w-17 sm:w-24 md:w-28">
                        <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
                        <span className="text-[12px] sm:text-lg md:text-xl">SECONDS</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;