import React, { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { Routes, Route, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import 'locomotive-scroll/dist/locomotive-scroll.css';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Event from './components/Event';
import '../locomotive-custom.scss';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import Chatbot from "./components/Chatbot";
import Start from "./components/Start";
import SchedulePage from "./components/SchedulePage";
import chatbotIcon from "./assets/AcunetixChatbot.png";
import EventCard from "./pages/EventCard";
import Reel from "./components/Reel";
import Brainiac from "./pages/Brainiac";
import CodeOfLies from "./pages/CodeOfLies";
import Timescape from "./pages/TimeScape";
import CtrlAltElite from "./pages/CtrlAltElite";
import CinemaEyesLens from "./pages/CinemaEyesLens";

function MainContent() {
  const scrollRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const eventRef = useRef(null);
  const sponsorsRef = useRef(null);
  const scheduleRef = useRef(null);
  const reelRef = useRef(null);
  const footerRef = useRef(null);
  const locomotiveScroll = useRef(null);
  const location = useLocation();
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let scrollInstance;
    
    const initLocomotiveScroll = () => {
      if (typeof window === 'undefined' || !scrollRef.current) return;

      scrollInstance = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        inertia: 1.1, // Smoother momentum scrolling
        smartphone: { smooth: true },
        tablet: { smooth: true },
        getSpeed: true,
        multiplier: 0.8,
        firefoxMultiplier: 50,
        touchMultiplier: 1.2,
      });

      // Smooth element transitions
      scrollInstance.on('scroll', ({ scroll }) => {
        document.documentElement.setAttribute('data-scroll', scroll.y);
        
        if (heroRef.current) {
          const heroHeight = heroRef.current.offsetHeight;
          setIsScrolled(scroll.y > heroHeight);
        }
      });

      locomotiveScroll.current = scrollInstance;
    };

    const handleResize = () => {
      if (locomotiveScroll.current) {
        locomotiveScroll.current.update();
      }
    };

    if (location.pathname === '/') {
      window.requestAnimationFrame(() => {
        initLocomotiveScroll();
        window.scrollTo(0, 0);
      });

      window.addEventListener('resize', handleResize);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (scrollInstance) {
        scrollInstance.destroy();
        locomotiveScroll.current = null;
      }
    };
  }, [location.pathname]);

  const toggleChatbot = () => setIsChatbotVisible(!isChatbotVisible);

  const scrollToSection = (ref) => {
    if (locomotiveScroll.current && ref.current) {
      locomotiveScroll.current.scrollTo(ref.current, {
        offset: '-10%', // Adjust scroll position
        duration: 1500, // Smoother scroll duration
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      });
    }
  };

  return (
    <>
      <Navbar  
        isScrolled={isScrolled}
        scrollToRefs={{ heroRef, aboutRef, eventRef, sponsorsRef, scheduleRef, reelRef, footerRef }} 
        scrollToSection={scrollToSection} 
      />
      
      <div ref={scrollRef} data-scroll-container style={{ minHeight: '100vh' }}>
        <section ref={heroRef} data-scroll-section className="flex flex-col items-center justify-center h-screen w-full bg-cover bg-center">
          <Hero />
        </section>

        <section ref={aboutRef} data-scroll-section className='flex bg-black text-white flex-col items-center justify-center min-h-screen w-full'>
          <About />
        </section>

        <section ref={eventRef} data-scroll-section className='min-h-screen mt-6'>
          <Event />
        </section>

        <section ref={scheduleRef} data-scroll-section className="min-h-screen">
          <SchedulePage/>
        </section>

        <section ref={sponsorsRef} data-scroll-section className="min-h-screen">
          <Sponsors />
        </section>

        <section ref={footerRef} data-scroll-section data-scroll-speed="2" className="bg-black/90 backdrop-blur-lg pt-16 pb-8 relative z-20 border-t border-white/10 min-h-screen flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Reel />
            <Footer 
              scrollToRefs={{ heroRef }} 
              scrollToSection={scrollToSection} 
            />
          </div>
        </section>
      </div>

      {isChatbotVisible && <Chatbot onClose={toggleChatbot} />}
      <div 
        className="fixed bottom-5 right-5 z-50 cursor-pointer transition-all duration-500 hover:scale-110"
        onClick={toggleChatbot}
        data-scroll
        data-scroll-sticky
        data-scroll-target="[data-scroll-container]"
      >
        <img 
          src={chatbotIcon} 
          alt="Chatbot" 
          className="w-16 h-16 rounded-full shadow-lg transition-transform duration-300 hover:rotate-12" 
        />
      </div>
    </>
  );
}

// Keep the App component the same as before