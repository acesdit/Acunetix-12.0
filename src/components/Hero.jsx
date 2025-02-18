import React, { useRef, useEffect } from 'react';
import video from '../assets/Background.mp4';
// import poster from '../assets/poster.jpg'; // Add a poster frame

const Hero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            // Improve video loading
            videoRef.current.preload = 'metadata';
            videoRef.current.defaultPlaybackRate = 1.0;
            videoRef.current.playbackRate = 1.0;
        }
    }, []);

    return (
        <div className="relative w-full flex items-center justify-center h-screen overflow-hidden">
            <video 
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop 
                muted 
                playsInline
                preload="auto"
                // poster={poster} // Add poster image
                style={{
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    willChange: 'transform'
                }}
            >
                <source src={video} type="video/mp4" />
                {/* Add WebM format for better performance */}
                <source src={video.replace('.mp4', '.webm')} type="video/webm" />
                Your browser does not support the video tag.
            </video>
            
            <div className="relative z-10 text-center text-white px-4" 
                 style={{ 
                     textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
                     transform: 'translateZ(0)'
                 }}>
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold leading-tight">
                    Acunetix 12.0
                </h1>
                <p className="text-lg md:text-2xl mt-4 md:mt-6 opacity-90">
                    Dive into world of illusions
                </p>
            </div>
        </div>
    );
};

export default Hero;