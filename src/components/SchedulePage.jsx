import React from 'react';

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

  return (
    <div className="min-h-screen bg-black py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Top Heading with Dates */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white animate-pulse">
          Schedule
        </h1>
        <p className="text-lg md:text-xl text-cyan-300 mt-2 bg-gray-900/50 px-4 py-2 rounded-lg inline-block 
        border border-cyan-500/30 shadow-lg animate-fade-in">
          27, 28, 29 March 2025
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col lg:grid lg:grid-cols-3 gap-6">
        {days.map((day) => (
          <div
            key={day.day}
            className="w-full bg-gray-800 rounded-2xl shadow-xl p-6 transition-all duration-500 
            hover:shadow-2xl hover:shadow-purple-500/50 hover:-translate-y-2"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-purple-400 mb-6 border-b border-purple-500/50 pb-2 text-center 
            transition-all duration-300 hover:text-purple-300">
              Day {day.day} - {day.date}
            </h2>

            <div className="space-y-4">
              {day.events.map((event) => (
                <div
                  key={event.name}
                  className="bg-gray-700/40 rounded-xl p-4 border border-gray-600/20 transition-all duration-300 
                  hover:bg-gray-700/70 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between items-center flex-wrap gap-2">
                      <h3 className="text-lg font-semibold text-red-500 transition-colors duration-300 hover:text-red-400">
                        {event.name}
                      </h3>
                      {event.time && (
                        <span className="text-sm text-cyan-300 bg-gray-800 px-3 py-1 rounded-lg 
                        border border-cyan-500/30 shadow-md transition-all duration-300 
                        hover:bg-cyan-900/50 hover:shadow-cyan-500/40 hover:-translate-y-0.5 hover:scale-105">
                          {event.time}
                        </span>
                      )}
                    </div>

                    {event.rounds && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {event.rounds.map((round, index) => (
                          <span
                            key={index}
                            className="inline-block text-xs text-cyan-300 bg-gray-800 px-3 py-1 rounded-lg 
                            border border-cyan-500/30 shadow-md transition-all duration-300 
                            hover:shadow-lg hover:shadow-cyan-500/40 hover:-translate-y-0.5 hover:scale-105 
                            hover:bg-cyan-900/50 hover:border-cyan-400"
                          >
                            {round}
                          </span>
                        ))}
                      </div>
                    )}

                    <p className="text-sm text-gray-300 transition-colors duration-300 hover:text-gray-200">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full animate-float opacity-75"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SchedulePage;