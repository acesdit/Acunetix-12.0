import React from "react";
import video1 from "../assets/Reel-Acunetix5.mp4";
import video2 from "../assets/Reel-Acunetix6.mp4";
import video3 from "../assets/Reel-Acunetix7.mp4";


function Reel() {
  return (
    <section className="w-full bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl py-4 font-bold text-white text-center mb-8">
          Carrying the Legacy
        </h2>

        <div className="flex overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-3 md:gap-6 lg:gap-8 md:overflow-visible">
          {/* First Reel */}
          <a
          href="https://www.instagram.com/acunetix.dit/reel/DHblKP0qE4C/"
            
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-full mr-4 md:mr-0 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative h-120 rounded-2xl overflow-hidden shadow-xl">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src={video1}
                 type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </a>

          {/* Second Reel */}
          <a
            href="https://www.instagram.com/acunetix.dit/reel/DHeK-3ISMWk/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-full mr-4 md:mr-0 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative h-120 rounded-2xl overflow-hidden shadow-xl">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src={video2}
                 type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </a>

          {/* Third Reel */}
          <a
            
            href="https://www.instagram.com/acunetix.dit/reel/DHdYGQDKG0E/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-full mr-4 md:mr-0 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative h-120 rounded-2xl overflow-hidden shadow-xl">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src={video3}
                 type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Reel;
