import React, { useState, useEffect, useMemo, memo } from 'react';
import videoMobile from '../assets/Background.mp4';
import videoDesktop from '../assets/Background.mp4';
import "../index.css";

const CountdownUnit = memo(({ value, label }) => (
  <div className="flex flex-col items-center w-16 sm:w-20 md:w-24">
    <span className="text-2xl font-bold tabular-nums">{value}</span>
    <span className="text-xs sm:text-sm md:text-base">{label}</span>
  </div>
));

const Hero = () => {
    const [timeDiff, setTimeDiff] = useState(0);
    const targetDate = useMemo(() => new Date('2025-03-20T10:00:00').getTime(), []);

    const calculateTimeLeft = useMemo(() => {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        
        return {
            days: days.toString().padStart(2, '0'),
            hours: hours.toString().padStart(2, '0'),
            minutes: minutes.toString().padStart(2, '0'),
            seconds: seconds.toString().padStart(2, '0')
        };
    }, [timeDiff]);

    useEffect(() => {
        const updateTimer = () => {
            const now = Date.now();
            setTimeDiff(Math.max(targetDate - now, 0));
        };

        updateTimer();
        let rafId = requestAnimationFrame(function update() {
            updateTimer();
            rafId = requestAnimationFrame(update);
        });

        return () => cancelAnimationFrame(rafId);
    }, [targetDate]);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-label="Background video"
                disablePictureInPicture
                disableRemotePlayback
            >
                <source src={videoMobile} type="video/mp4" media="(max-width: 768px)" />
                <source src={videoDesktop} type="video/mp4" />
            </video>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
                    Acunetix 12.0
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-8">
                    Dive into the world of illusions
                </p>

                <div className="flex gap-4 sm:gap-6 md:gap-8">
                    <CountdownUnit value={calculateTimeLeft.days} label="DAYS" />
                    <CountdownUnit value={calculateTimeLeft.hours} label="HOURS" />
                    <CountdownUnit value={calculateTimeLeft.minutes} label="MINUTES" />
                    <CountdownUnit value={calculateTimeLeft.seconds} label="SECONDS" />
                </div>
            </div>
        </div>
    );
};

export default memo(Hero);