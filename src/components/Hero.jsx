import React, { useState, useRef } from 'react';
import video from '../assets/Background.mp4';

const Hero = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className="relative w-full flex items-center justify-center h-screen">
            <video 
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                loop 
                muted 
                playsInline
                preload="auto"
            >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            <div className="relative z-10 text-center text-white" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>
                <h1 className="text-4xl md:text-8xl font-bold">Acunetix 12.0</h1>
                <p className='text-lg md:text-2xl md:h-12 pt-4'>Dive into world of illusions</p>
                
                <button 
                    onClick={handlePlayPause}
                    className="mt-8 bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                    <svg 
                        className="w-12 h-12 md:w-16 md:h-16"
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        {isPlaying ? (
                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                        ) : (
                            <path d="M8 5v14l11-7z"/>
                        )}
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Hero;