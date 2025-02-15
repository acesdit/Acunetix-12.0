import React from "react";
import { motion } from "framer-motion";
import abhi from "../assets/abhi.png";
import yash from "../assets/yash.png";
import akanksha from "../assets/akansha.png";

const sponsorsData = [
  {
    name: "Abhishek",
    image: abhi,
    description: "Abhi is Our Platinum Sponsor. He will be our prime sponsor for the entire event.",
  },
  {
    name: "Yash",
    image: yash,
    description: "Yash is Our Gold Sponsor. He will be our secondary sponsor for the entire event.",
  },
  {
    name: "Akanksha",
    image: akanksha,
    description: "Akanksha is Our Silver Sponsor. She will be our tertiary sponsor for the entire event.",
  },
  {
    name: "Abhishek",
    image: abhi,
    description: "Abhi is Our Platinum Sponsor. He will be our prime sponsor for the entire event.",
  },
  {
    name: "Yash",
    image: yash,
    description: "Yash is Our Gold Sponsor. He will be our secondary sponsor for the entire event.",
  },
  {
    name: "Akanksha",
    image: akanksha,
    description: "Akanksha is Our Silver Sponsor. She will be our tertiary sponsor for the entire event.",
  },
];

const Sponsors = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white py-12">
      <h1 className="text-4xl font-bold mb-10">OUR SPONSORS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sponsorsData.map((sponsor, index) => (
          <motion.div
            key={index}
            className="relative w-64 h-80 bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            whileHover={{ rotateY: 15, scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Front Side (Image) */}
            <motion.div className="absolute inset-0 flex items-center justify-center p-4 bg-gray-700"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img src={sponsor.image} alt={sponsor.name} className="w-32" />
            </motion.div>

            {/* Back Side (Description) */}
            <motion.div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gray-800 text-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-semibold mb-2">{sponsor.name}</h2>
              <p className="text-sm text-gray-300">{sponsor.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
