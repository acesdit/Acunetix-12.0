import { useState } from "react"
import React from "react"
import logo from "../assets/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="text-white py-6 max-sm:px-5 md:px-4 lg:px-12 fixed w-full z-5 ">
      <div className="flex items-center justify-between" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Left as - Desktop */}
        <div className="hidden md:flex space-x-12 gap-16">
          <a href="#home" className="hover:text-zinc-400 transition-colors duration-200 text-lg font-medium px-4 mx-5">
            Home
          </a>
          <a href="#about" className="hover:text-zinc-400 transition-colors duration-200 text-lg font-medium px-4">
            About
          </a>
        </div>

        {/* Center Logo */}
        <div className="flex-1 flex justify-center">
          <img
            src={logo}
            alt="Logo"
            width={48}
            height={48}
            className="transform hover:scale-105 transition-transform  max-sm:ml-10  sm:ml-22 duration-300 "
          />
        </div>

        {/* Right as - Desktop */}
        <div className="hidden md:flex space-x-12 gap-16 px-3">
          <a
            href="#services"
            className="hover:text-zinc-400 transition-colors duration-200 text-lg font-medium px-4"
          >
            Services
          </a>
          <a href="#contact" className="hover:text-zinc-400 transition-colors duration-200 text-lg font-medium px-4">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
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
        className={`fixed backdrop-blur-xl z-50 top-0 right-0 h-full text-white transition-transform duration-500 ease-in-out transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ width: "190px", background: "rgba(0, 0, 0, 0.92)" }}
      >
        <div className="flex flex-col space-y-4 text-center bg-black">
          <button
            className="self-end focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            style={{ padding: "1rem 1.5rem" }}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex justify-around  flex-col py-4" style={{ height: "90vh" }}>
          <div className="flex justify-center align-middle  flex-col py-4" style={{ gap: "1rem" }}>
            <a
              href="#home"
              className="py-2 hover:text-gray-400 transition-colors duration-300"
              style={{ fontSize: "1.5rem", padding: "1rem 2rem" }}
            >
              Home
            </a>
            <a
              href="#about"
              className="py-2 hover:text-gray-400 transition-colors duration-300"
              style={{ fontSize: "1.5rem", padding: "1rem 1rem" }}
            >
              About
            </a>
            <a
              href="#services"
              className="py-2 hover:text-gray-400 transition-colors duration-300"
              style={{ fontSize: "1.5rem", padding: "1rem 1rem" }}
            >
              Services
            </a>
            <a
              href="#contact"
              className="py-2 hover:text-gray-400 transition-colors duration-300"
              style={{ fontSize: "1.5rem", padding: "1rem 1rem" }}
            >
              Contact
            </a>
          </div>
          <div className="flex justify-center mt-auto bottom-0 pb-4">
            <img
              src={logo}
              alt="Logo"
              width={48}
              height={48}
              className="transform hover:scale-105 transition-transform duration-300"
            />
        </div>
        </div> 
      </div>
      </div>
    </nav>
  )
}

export default Navbar
