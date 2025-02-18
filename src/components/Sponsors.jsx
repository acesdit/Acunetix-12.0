import React, { useState } from "react";
import { motion } from "framer-motion";

const sponsors = [
  {
    name: "Google",
    image: "https://storage.googleapis.com/gd-prod/images/a910d418-7123-4bc4-aa3b-ef7e25e74ae6.60c498c559810aa0.webp",
    description: "Google is a global technology leader, specializing in internet-related services and products.",
  },
  {
    name: "Microsoft",
    image: "https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen-1024x376.jpg",
    description: "Microsoft is a multinational technology company known for its software, hardware, and cloud services.",
  },
  {
    name: "Amazon",
    image: "https://img.freepik.com/premium-vector/amazon-logotype-white-background-logo-internet-service-sale-goods-online-store-platform-arrow-free-shipping-worldwide-shopping-editorial_661108-8065.jpg",
    description: "Amazon is a global e-commerce and cloud computing giant, revolutionizing online shopping and technology.",
  },
  {
    name: "Facebook",
    image: "https://cdn.pixabay.com/photo/2021/11/11/12/41/facebook-6786210_1280.png",
    description: "Facebook is a social media and technology company connecting billions of people worldwide.",
  },
];

export default function Sponsors() {
  const [selectedSponsor, setSelectedSponsor] = useState(sponsors[0]);
  const [hoveredSponsor, setHoveredSponsor] = useState(null);

  return (
    <div className="flex flex-col h-screen bg-black text-white p-8 items-center justify-center relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/50 to-black/0 pointer-events-none" />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
      >
        OUR SPONSORS
      </motion.h1>

      <div className="flex flex-col md:flex-row w-full items-center justify-center gap-8">
        {/* Left Side - Sponsors List */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/4 flex flex-col space-y-4 border-b md:border-b-0 md:border-r border-gray-700 pb-4 md:pb-0 pr-0 md:pr-4 text-center md:text-left"
        >
          {sponsors.map((sponsor) => (
            <motion.button
              key={sponsor.name}
              onClick={() => setSelectedSponsor(sponsor)}
              onMouseEnter={() => setHoveredSponsor(sponsor)}
              onMouseLeave={() => setHoveredSponsor(null)}
              whileHover={{ scale: 1.05, backgroundColor: "#3f3f46" }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-lg transition-all duration-300 font-semibold ${
                selectedSponsor?.name === sponsor.name
                  ? "bg-gray-700 shadow-lg shadow-purple-500/20"
                  : "bg-gray-800 hover:shadow-lg hover:shadow-purple-500/10"
              }`}
            >
              {sponsor.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Right Side - Image Frame */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full md:w-3/4 flex flex-col justify-center items-center mt-4 md:mt-0"
        >
          {(hoveredSponsor || selectedSponsor) && (
            <motion.div
              key={(hoveredSponsor || selectedSponsor).name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              {/* Sponsor Image */}
              <motion.img
                src={(hoveredSponsor || selectedSponsor).image}
                alt={(hoveredSponsor || selectedSponsor).name}
                whileHover={{ scale: 1.05 }}
                className="rounded-lg shadow-lg w-full md:w-3/4 h-auto object-cover border border-gray-700"
              />

              {/* Sponsor Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-0 right-0 p-4 bg-black/80 backdrop-blur-sm rounded-b-lg text-sm text-gray-300"
              >
                {(hoveredSponsor || selectedSponsor).description}
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}