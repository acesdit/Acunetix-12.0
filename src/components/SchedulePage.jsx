import React from 'react';
import { motion } from 'framer-motion';

const SchedulePage = () => {
  const days = [
    {
      day: 1,
      date: '27 March 2025',
      events: [
        { name: 'Gamestrom', time: '7:30 AM - 6:30 PM', description: 'Location: 508 ' },
        { name: 'Escape Room', time: '7:30 AM - 6:30 PM', description: 'Location: 409 & 411 ' },
        { name: 'Ctrl Alt Elite', rounds: ['ROUND 1 & 2 10:00 AM - 1:00 PM', 'ROUND 3 3:00 PM - 5:30 PM'], description: 'Coding Competition' },
        { name: 'Buildathon', time: '7:30 AM - 9:00 AM', description: 'Location: 504,505,506' },
        { name: 'DPL', rounds: ['ROUND 1 & ROUND 2 : 9:30 AM - 12:30 PM'], description: 'Location: 509,511' },
        { name: 'Code of Lies', time: '1:00 PM - 3:00 PM', description: 'CTF event' },
        { name: 'Brainaic', rounds: ['ROUND 1 8:30 AM - 9:00 AM', 'ROUND 2 2:30 PM - 5:30 PM'], description: 'Location: 402,509,511' },
      ]
    },
    {
      day: 2,
      date: '28 March 2025',
      events: [
        { name: 'Gamestrom', time: '8:00 AM - 7:00 PM', description: 'Location: 4th Floor ' },
        { name: 'Escape Room', time: '8:00 AM - 7:00 PM', description: 'Location: 409 & 411 ' },
        { name: 'Bug Bounty', time: '8:00 AM - 10:00 AM', description: 'Broken Code' },
        { name: 'DPL (Auction)', time: '11:00 AM - 7:00 PM', description: 'Auction' },
        { name: 'Brainiac (Interview)', time: '8:00 AM - 11:00 AM', description: 'Interview' },
      ]
    },
    {
      day: 3,
      date: '29 March 2025',
      events: [
        { name: 'Gamestorm', time: '9:00 AM - 3:00 PM', description: 'Location: 4th Floor ' },
        { name: 'Treasure Trove', time: '9:00 AM - 5:00 PM', description: 'Treasure Hunt' },
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const dayVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const eventVariants = {
    hover: {
      y: -5,
      scale: 1.02,
      boxShadow: '0px 10px 30px rgba(111, 76, 255, 0.5)',
      background: 'linear-gradient(45deg, rgba(17, 24, 39, 0.8), rgba(8, 14, 44, 0.9))',
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjZmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==')]"></div>
      </div>

      {/* Animated Glitch Text */}
      <motion.div 
        className="text-center mb-16 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 mb-4 glitch pb-2">
          SCHEDULE
        </h1>
        <p className="text-xl md:text-2xl text-cyan-300 font-mono bg-black/50 px-6 py-3 rounded-full inline-block border-2 border-cyan-400/50 shadow-glow">
          27-29 MARCH 2025
        </p>
      </motion.div>

      {/* Schedule Timeline */}
      <motion.div 
        className="max-w-7xl mx-auto grid gap-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {days.map((day) => (
          <motion.div 
            key={day.day}
            variants={dayVariants}
            className="group relative overflow-hidden rounded-2xl border-2 border-purple-500/30 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl shadow-cyber"
          >
            {/* Day Header */}
            <div className="p-6 bg-gradient-to-r from-purple-600/30 to-cyan-500/30 border-b-2 border-cyan-400/50">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300 font-mono">
                DAY {day.day} <span className="text-cyan-400 ml-4">{day.date}</span>
              </h2>
            </div>

            {/* Holographic Effect */}
            <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/holo-square.png')] animate-holo"></div>
            </div>

            {/* Events Grid */}
            <div className="p-6 grid gap-4">
              {day.events.map((event) => (
                <motion.div
                  key={event.name}
                  variants={eventVariants}
                  whileHover="hover"
                  className="p-4 rounded-xl border-2 border-cyan-500/20 bg-gray-900/50 backdrop-blur-sm relative overflow-hidden"
                >
                  {/* Event Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-30 transition-opacity"></div>

                  <div className="flex flex-col space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-cyan-400 font-mono">{event.name}</h3>
                      {event.time && (
                        <span className="text-sm text-purple-300 bg-black/50 px-3 py-1 rounded-full border border-cyan-400/30">
                          {event.time}
                        </span>
                      )}
                    </div>

                    {event.rounds && (
                      <div className="flex flex-wrap gap-2">
                        {event.rounds.map((round, index) => (
                          <span 
                            key={index}
                            className="text-xs text-cyan-300 bg-black/50 px-2 py-1 rounded-md border border-cyan-400/20 font-mono"
                          >
                            ⚡ {round}
                          </span>
                        ))}
                      </div>
                    )}

                    <p className="text-sm text-cyan-200/80 font-mono leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              scale: 0,
              opacity: 0
            }}
            animate={{
              x: ['0%', Math.random() * 100 + '%', '0%'],
              y: ['0%', Math.random() * 100 + '%', '0%'],
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              rotate: 360
            }}
            transition={{
              duration: Math.random() * 4 + 6,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      {/* Scanlines Overlay */}
      <div className="fixed inset-0 pointer-events-none z-20 opacity-20" 
           style={{background: 'repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 2px, transparent 4px)'}}>
      </div>
    </div>
  );
};

export default SchedulePage;