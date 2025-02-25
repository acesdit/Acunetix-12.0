import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import LetterGlitch from "../components/LetterGlitch";
import brainiacImg from "../assets/Brainiac.png";
import logo from "../assets/logo.png";

const Brainiac = () => {
  const navigate = useNavigate();

  const handleLinkClick = () => {
    navigate("/");
  };

  const handleBackClick = () => {
    navigate("/", {
      state: {
        scrollToEvent: true,
        timestamp: Date.now(),
      },
      replace: true,
    });
  };

  const handleRegisterClick = () => {
    window.open("https://forms.gle/VP6Ti6g6JSLWnqnx9", "_blank");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      {/* Navigation Header */}
      <div className="fixed top-4 md:top-6 left-0 right-0 z-50">
        <div className="flex-1 flex justify-center">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick();
            }}
          >
            <img
              src={logo}
              alt="Logo"
              width={48}
              height={48}
              className="transform hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="fixed top-3 left-3 md:top-6 md:left-6 text-white p-2 rounded-full shadow-lg flex items-center z-50 hover:bg-white/10 transition-colors duration-200"
      >
        <IoArrowBack className="text-2xl md:text-xl" />
      </button>

      {/* Main Content */}
      <div className="relative min-h-screen pt-20 md:pt-24 pb-12">
        <div className="absolute inset-0">
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="flex flex-col md:flex-row items-center gap-8 w-full">
            {/* Left Column - Content */}
            <div className="w-full md:w-1/2 flex flex-col items-center text-center space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-8">
                Brainiac
              </h1>

              {/* Mobile View */}
              <div className="md:hidden w-full max-w-md mx-auto space-y-6">
                <img
                  src={brainiacImg}
                  alt="Event Poster"
                  className="rounded-xl shadow-2xl w-full max-w-[280px] mx-auto object-contain"
                />
                <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-gray-500/50 p-6 shadow-lg">
                  <p className="text-gray-200 text-base leading-relaxed">
                    Engage in a battle of wits with Brainiac! Test your knowledge across various 
                    domains including science, technology, pop culture, and general trivia. 
                    Compete individually or in teams for exciting prizes and the title of Ultimate Brainiac!
                  </p>
                </div>
                <button
                  onClick={handleRegisterClick}
                  className="w-full max-w-xs mx-auto py-3 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition-transform duration-200"
                >
                  Register Now
                </button>
              </div>

              {/* Desktop View */}
              <div className="hidden md:flex flex-col items-center space-y-8 w-full">
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl border border-gray-500/50 p-8 shadow-xl w-full max-w-2xl">
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Brainiac is our flagship trivia competition that challenges participants'
                    knowledge across a wide range of subjects. With multiple difficulty levels
                    and interactive rounds, contestants will face questions in STEM, current events,
                    entertainment, and more. The competition features:
                    <ul className="list-disc list-inside mt-4 text-left space-y-2">
                      <li>Rapid-fire buzzer rounds</li>
                      <li>Multimedia-based questions</li>
                      <li>Team collaboration challenges</li>
                      <li>Final puzzle showdown</li>
                    </ul>
                  </p>
                </div>
                <button
                  onClick={handleRegisterClick}
                  className="px-16 py-4 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white rounded-full text-lg font-semibold shadow-xl hover:scale-105 transition-transform duration-200"
                >
                  Register Now
                </button>
              </div>
            </div>

            {/* Right Column - Image (Desktop Only) */}
            <div className="hidden md:flex md:w-1/2 justify-center items-center">
              <img
                src={brainiacImg}
                alt="Event Poster"
                className="rounded-2xl shadow-2xl w-full max-w-xl object-contain transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brainiac;