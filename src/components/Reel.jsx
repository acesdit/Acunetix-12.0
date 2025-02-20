import React from "react";
import "./styles.css"
import videosrc from "../assets/Reel Acunetix.mp4"

function Reel() {
  const Reeldata = [
    {
      video: "https://www.instagram.com/p/C4SnEGfKtDg/",
      thumbnail: "https://images.unsplash.com/photo-1515577756537-d9af957a75dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnRzfGVufDB8fDB8fHww",
      title: "Acunetix 12.0 Launch"
    },
    {
      video: "https://www.instagram.com/p/C4M-m-_q1Lq/",
      thumbnail: "https://images.unsplash.com/photo-1568721721169-dc9a5b5acf7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnRzJTIwdmVydGljYWwlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
      title: "Events"
    },
    {
      video: "https://www.instagram.com/p/C3kdYnsNrF8/",
      thumbnail: "https://plus.unsplash.com/premium_photo-1680965942284-38fbf394d71f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGV2ZW50cyUyMHZlcnRpY2FsJTIwaW1hZ2VzfGVufDB8fDB8fHww",
      title: "Legacy"
    },
    // Add more reels as needed
  ];

  return (
    <section className="w-full bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          Carrying the Legacy
        </h2>

        <div className="flex overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-3 md:gap-6 lg:gap-8 md:overflow-visible">
          {Reeldata.map((reel, index) => (
            <a
              key={index}
              href={reel.video}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-full mr-4 md:mr-0 transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-120 rounded-2xl overflow-hidden shadow-xl">
                {/* Thumbnail Image Container */}
                {/* <div> {/* 16:9 aspect ratio
                  <img
                    src={reel.thumbnail}
                    alt={`Thumbnail for ${reel.title}`}
                    className=" top-0 left-0 w-full h-full object-cover"
                    loading="lazy"
                  />                
                </div>*/}

                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src={videosrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reel;
