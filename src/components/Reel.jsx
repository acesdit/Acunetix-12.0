import React from "react";
import "./styles.css";
import reel from "../assets/Reel Acunetix.mp4";
import reel2 from "../assets/Reel Acunetix2.mp4";
import reel3 from "../assets/Reel Acunetix3.mp4";
import reel4 from "../assets/Reel Acunetix4.mp4";

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
          href="https://www.instagram.com/reel/DGFQyUtKCLu/"
            
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
                <source src={reel4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </a>

          {/* Second Reel */}
          <a
            href="https://www.instagram.com/reel/C16YeEQKCe5/"
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
                <source src={reel} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </a>

          {/* Third Reel */}
          <a
            
            href="https://www.instagram.com/reel/C4SnEGfKtDg/"
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
                <source src={reel3} type="video/mp4" />
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
