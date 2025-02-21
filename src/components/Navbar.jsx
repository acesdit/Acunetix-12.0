import { useState, useEffect } from "react";
import React from "react";
import logo from "../assets/logo.png";

const Navbar = ({ scrollToRefs, isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`text-white py-6 max-sm:px-5 md:px-4 lg:px-12 fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Left - Desktop */}
        <div className="hidden md:flex space-x-12 gap-16">
          <button onClick={() => handleLinkClick(scrollToRefs.heroRef)} className="nav-link">
            Home
          </button>
          <button onClick={() => handleLinkClick(scrollToRefs.eventRef)} className="nav-link">
            Events
          </button>
        </div>

        {/* Center Logo */}
        <div className="flex-1 flex justify-center">
          <button onClick={() => handleLinkClick(scrollToRefs.heroRef)}>
            <img src={logo} alt="Logo" width={48} height={48} className="hover:scale-105 transition-transform duration-300" />
          </button>
        </div>

        {/* Right - Desktop */}
        <div className="hidden md:flex space-x-12 gap-16">
          <button onClick={() => handleLinkClick(scrollToRefs.scheduleRef)} className="nav-link">
            Schedule
          </button>
          <button onClick={() => handleLinkClick(scrollToRefs.aboutRef)} className="nav-link">
            About
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-48 text-white backdrop-blur-xl transition-transform duration-500 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } bg-black/90 z-50`}
      >
        <div className="flex flex-col text-center p-6 space-y-6">
          <button className="self-end p-2" onClick={() => setIsMenuOpen(false)}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button onClick={() => handleLinkClick(scrollToRefs.heroRef)} className="mobile-nav-link">
            Home
          </button>
          <button onClick={() => handleLinkClick(scrollToRefs.aboutRef)} className="mobile-nav-link">
            About
          </button>
          <button onClick={() => handleLinkClick(scrollToRefs.eventRef)} className="mobile-nav-link">
            Events
          </button>
          <button onClick={() => handleLinkClick(scrollToRefs.scheduleRef)} className="mobile-nav-link">
            Schedule
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
