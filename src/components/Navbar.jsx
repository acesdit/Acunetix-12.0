import { useState } from "react";
import React from "react";
import logo from "../assets/logo.png";

const Navbar = ({ scrollToRefs, scrollToSection, isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (ref) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      scrollToSection(ref);
    }, 300);
  };

  return (
    <nav
      className={`text-white py-4 px-5 md:px-4 lg:px-12 fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-[1200px] mx-auto">
        {/* Left - Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {["Home", "Events"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(scrollToRefs[`${label.toLowerCase()}Ref`]);
              }}
              className="hover:text-gray-400 transition-colors duration-200 text-lg font-medium"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Center - Logo */}
        <div className="flex justify-center flex-1 md:flex-none">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(scrollToRefs.heroRef);
            }}
          >
            <img
              src={logo}
              alt="Logo"
              width={48}
              height={48}
              className="hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>

        {/* Right - Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {["Schedule", "About"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(scrollToRefs[`${label.toLowerCase()}Ref`]);
              }}
              className="hover:text-gray-400 transition-colors duration-200 text-lg font-medium"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
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
        className={`fixed inset-0 z-50 bg-black bg-opacity-95 flex flex-col items-center justify-center space-y-6 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          className="absolute top-6 right-6 focus:outline-none"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {["Home", "About", "Events", "Schedule"].map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(scrollToRefs[`${label.toLowerCase()}Ref`]);
            }}
            className="text-xl text-white hover:text-gray-400 transition-colors duration-300"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
