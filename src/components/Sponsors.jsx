import React, { useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

// Import images from assets folder
import eduallianceLogo from "../assets/sponsor/edualliance-logo.png";
import  gsSapLogo from "../assets/sponsor/gs-sap-logo.jpg";
import learnomateLogo from "../assets/sponsor/learnomate-logo.svg";

const sponsors = [
  {
    id: 1,
    name: "Edualliance",
    logo: eduallianceLogo,
    description: "A co-operative and friendly place to guide and assist you about abroad education",
    website: "https://example.com",
  },
  {
    id: 2,
    name: "Learnomate Technologies",
    logo: learnomateLogo,
    description: "Software Training Institute Learn all top IT Technologies at the best prices",
    website: "https://example.com",
  },
  {
    id: 3,
    name: "GS SAP",
    logo: gsSapLogo,
    description: "GS SAP Education Institute is one of the Top Professional SAP Education Institute in Pune",
    website: "https://example.com",
  },
];

const SponsorCard = ({ sponsor }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateY = useTransform(mouseX, [0, 300], [-15, 15], { clamp: true });
  const rotateX = useTransform(mouseY, [0, 300], [15, -15], { clamp: true });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  return (
    <motion.div
      className="relative perspective-1000 group flex justify-center p-4"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ rotateY, rotateX, transformPerspective: 1000 }}
    >
      <motion.div
        className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 relative overflow-hidden border-2 border-gray-800/50 shadow-2xl w-80 h-96 flex flex-col items-center justify-center"
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Static glow layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Card content with fixed positioning */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
          {/* Logo container with fixed size */}
          <motion.div
            className="w-48 h-48 mb-6 flex items-center justify-center"
            style={{ transform: "translateZ(30px)" }}
          >
            <motion.img
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-full h-full object-contain rounded-lg"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>

          <h3 className="text-2xl font-bold text-white">{sponsor.name}</h3>

          {/* Hover overlay with same dimensions */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 bg-black/95 backdrop-blur-lg rounded-2xl flex flex-col items-center justify-center p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-4 text-center">
                  <h3 className="text-2xl font-bold text-white">
                    {sponsor.name}
                  </h3>
                  <motion.p
                    className="text-gray-300 text-base"
                    initial={{ y: 10 }}
                    animate={{ y: 0 }}
                  >
                    {sponsor.description}
                  </motion.p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Sponsors = () => {
  return (
    <section className="relative bg-black min-h-screen flex flex-col items-center justify-center py-24 overflow-hidden px-4">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 rounded-full blur-[1px]"
            initial={{
              x: Math.random() * 100 - 50 + "vw",
              y: Math.random() * 100 - 50 + "vh",
              rotate: Math.random() * 360,
            }}
            animate={{
              x: ["0%", Math.random() * 100 - 50 + "%", "0%"],
              y: ["0%", Math.random() * 100 - 50 + "%", "0%"],
              rotate: 360,
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "linear",
              },
            }}
          />
        ))}
      </div>

      {/* Section title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Our Sponsors
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Visionary organizations powering our journey through innovation and collaboration.
        </p>
      </motion.div>

      {/* Sponsor Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={sponsor.id}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            <SponsorCard sponsor={sponsor} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;