import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
// import LetterGlitch from '../components/LetterGlitch'
import TimescapeImg from '../assets/timeScape.png'
import Squares from '../components/Squares'
import logo from "../assets/logo.png";
import { IoArrowBack } from "react-icons/io5"; // Import back icon
import { useNavigate } from "react-router-dom";


const Timescape = () => {
  const navigate = useNavigate();
  const handleLinkClick = () =>{
     navigate("/");
   }
   // Function to navigate back to the Event section in the main page
   const handleBackClick = () => {
     navigate("/", { state: { scrollToEvent: true } }); // Pass state for scrolling
   };
  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-6 left-0 right-0 z-50">
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
              className="transform hover:scale-105 ml-8 transition-transform duration-300 "
            />
          </a>
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="fixed top-6 left-6  text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-all duration-200 z-50"
      >
        <IoArrowBack className="text-lg" /> 
      </button>

      {/* Outer container with top and bottom padding */}
      <div className="relative min-h-screen pt-24 pb-12">
        {/* Glitch Background with Dark Overlay */}
        <div className="absolute inset-0">
        <Squares 
  speed={0.5} 
  squareSize={40}
  direction='diagonal' // up, down, left, right, diagonal
  borderColor='#fff'
  hoverFillColor='#222'
  />
          {/* <LetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          /> */}
        
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 py-12 h-full">
          <div className="flex mx-auto flex-col md:flex-row items-center gap-8 h-full">
            {/* Left Column */}
            <div className="w-full md:w-1/2 flex m-auto flex-col justify-center items-center text-center h-full space-y-10">
              {/* Centered Heading */}
              <h1 className="text-5xl md:text-6xl font-bold text-white">
             Time Scape
              </h1>

              {/* Mobile View: Poster + Centered Content */}
              <div className="md:hidden flex flex-col items-center space-y-8">
                {/* Mobile Image */}
                <img 
                  src={TimescapeImg}
                  alt="Event Poster"
                  className="rounded-xl shadow-2xl w-full max-w-sm max-h-[500px] object-contain transform hover:scale-105 transition-all duration-300"
                />

                {/* Description Card - Centered */}
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl border border-gray-500 p-10 shadow-xl hover:shadow-2xl transition-all duration-300 w-full max-w-sm">
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>

                {/* Register Button - Centered */}
                <button className="bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-950 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all hover:ring-2 hover:ring-blue-300 hover:scale-105 shadow-xl">
                  Register Now
                </button>
              </div>

              {/* Desktop View: Description & Register Button */}
              <div className="hidden md:flex flex-col items-center space-y-6">
                {/* Description Card */}
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl border border-gray-500 p-10 shadow-xl hover:shadow-2xl transition-all duration-300 w-full max-w-xl">
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>

                {/* Centered Register Button */}
                <div className="flex justify-center">
                  <button className="bg-gradient-to-r from-violet-800 to-violet-900 hover:from-violet-900 hover:to-violet-950 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all hover:ring-2 hover:ring-blue-300 hover:scale-105 shadow-xl">
                    Register Now
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Desktop Image; hidden on mobile */}
            <div className="hidden md:flex md:w-1/2 justify-center">
              <img 
                src={TimescapeImg}
                alt="Event Poster"
                className="rounded-xl shadow-2xl w-full md:w-auto max-w-xl max-h-[550px] object-contain transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Timescape;

