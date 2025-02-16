

import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import TiltedCard from "./TitleCard";
import Particles from "./Particles";

const cardsData = [{
  id: 1,
  image: "https://images.squarespace-cdn.com/content/v1/58c9fe99f5e231f0df86179b/1504017391390-HK35326DFYJSSYIVZSIO/party.jpg?format=1500w",
  title: "Event 1",
  description: "This is the first event.",
  // buttonText: "Learn More",
},
{
  id: 2,
  image: "https://www.campustimespune.com/wp-content/uploads/2016/02/sympuls-symbiosis-event-college-life-events-pune.jpg",
  title: "Event 2",
  description: "This is the second event.",
  // buttonText: "Learn More",
},
{
  id: 3,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVkzTHskrCa14QFF3VZS8PFivaif6PeFLJ_w&s",
  title: "Event 3",
  description: "This is the third event.",
  // buttonText: "Learn More",
},
{
  id: 4,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4F65kk7xAC64Q2YTe3ZCUu_BYxFTL3xCjAQ&s",
  title: "Event 4",
  description: "This is the fourth event.",
  // buttonText: "Learn More",
},
{
  id: 5,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPAhI1tH8qypZE4oYMrRz7aULbjMnWUflTXA&s",
  title: "Event 5",
  description: "This is the fifth event.",
  // buttonText: "Learn More",
},
{
  id: 6,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4n_sbg1Yb2nveOyRq_27P8U0O1p0caFwpMw&s",
  title: "Event 6",
  description: "This is the sixth event.",
  // buttonText: "Learn More",
},
{
  id: 7,
  image: "https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/reverie.jpg",
  title: "Event 7",
  description: "This is the seventh event.",
  // buttonText: "Learn More",
},
{
  id: 8,
  image: "https://www.hire4event.com/blogs/wp-content/uploads/2020/12/Kolkata-Wedding.jpg",
  title: "Event 8",
  description: "This is the eighth event.",
  // buttonText: "Learn More",
},
{
  id: 9,
  image: "https://fashionherald.in/wp-content/uploads/2025/01/image-33-1024x606.png",
  title: "Event 9",
  description: "This is the ninth event.",
  // buttonText: "Learn More",
},];

function Event() {
  return (
    <ParallaxProvider>
      <div className="app bg-black relative min-h-screen">
        {/* Particles Background */}
        <div className="absolute inset-0 z-0">
          <Particles
            particleColors={["#5f20d4", "#ffffff"]}
            particleCount={500}
            particleSpread={10}
            speed={0.2}
            particleBaseSize={300}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Compact Header */}
          <div className="pt-12 pb-8 text-center">
            <h1 className="text-6xl font-bold text-white mb-0 pb-10">EVENTS</h1>
          </div>

          {/* Tilted Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 pb-12">
            {cardsData.map((card) => (
              <div key={card.id} className="p-4">
                <TiltedCard
                  imageSrc={card.image}
                  altText={card.title}
                  captionText={card.title}
                  containerHeight="300px"
                  containerWidth="100%"
                  imageHeight="300px"
                  imageWidth="100%"
                  rotateAmplitude={15}
                  scaleOnHover={1.1}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <div className="h-full flex flex-col justify-between p-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {card.title}
                        </h3>
                        <p className="text-gray-200 mb-4 text-sm line-clamp-3">
                          {card.description}
                        </p>
                      </div>
                      {/* <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300">
                        {card.buttonText}
                      </button> */}
                    </div>
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default Event;