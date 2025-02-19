import React, { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { Routes, Route, useLocation } from "react-router-dom";
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

import {Routes,Route} from 'react-router-dom';

<img src={chatbotIcon} alt="Chatbot Logo" />


import EventCard from "./pages/EventCard";

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

  useEffect(() => {
    if (location.pathname === '/') {
      locomotiveScroll.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        smoothMobile: true,
        inertia: 0.75,
        getDirection: true,
      });

      return () => {
        if (locomotiveScroll.current) {
          locomotiveScroll.current.destroy();
        }
      };
    }
  }, [location]);

  const toggleChatbot = () => setIsChatbotVisible(!isChatbotVisible);
  const scrollToSection = (ref) => {
    if (locomotiveScroll.current && ref.current) {
      locomotiveScroll.current.scrollTo(ref.current);
    }
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/event/:eventId" element={<EventCard />} />
  </Routes>
  };

  return (
    <>

      {!startAnimationComplete && <div><Start /></div>}

      {startAnimationComplete && (
        <>
          <section className="bg-black w-full fixed top-0 h-18 z-50 flex items-center">
            <Navbar scrollToRefs={{ heroRef, aboutRef, eventRef, sponsorsRef, scheduleRef, reelRef, footerRef }} scrollToSection={scrollToSection} />
          </section>

          <div ref={scrollRef} data-scroll-container>
            <section ref={heroRef} data-scroll-section data-scroll-speed="3" className="flex flex-col backdrop-blur-xl items-center justify-center h-screen w-full bg-cover bg-center">
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

            <section ref={sponsorsRef} data-scroll-section data-scroll-speed="2" className="min-h-screen">
              <Sponsors />
            </section>

            <section  data-scroll-section data-scroll-speed="-2" data-scroll-direction="horizontal"  >
              <Footer />            
            </section>
          </div>

      {isChatbotVisible && <Chatbot onClose={toggleChatbot} />}
      <div className="fixed bottom-5 right-5 z-50 cursor-pointer" onClick={toggleChatbot}>
        <img src={chatbotIcon} alt="Chatbot" className="w-15 h-15 rounded-full shadow-lg hover:scale-110 transition-transform" />
      </div>
    </>
  );
}

function App() {
  const [startAnimationComplete, setStartAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStartAnimationComplete(true), 3900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!startAnimationComplete ? <Start /> : (
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/event/:id" element={<EventCard />} />
        </Routes>
      )}
    </>
  );
}

export default App;