import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation, BrowserRouter as Router } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

// Components
const Navbar = ({ isScrolled, scrollToSection }) => (
  <nav className={`fixed w-full z-50 transition-colors ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <span className="text-white text-xl font-bold">Logo</span>
      <div className="space-x-6">
        <button onClick={() => scrollToSection('hero')} className="text-white">Home</button>
        <button onClick={() => scrollToSection('about')} className="text-white">About</button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <div className="text-center text-white">
    <h1 className="text-6xl font-bold mb-4">Welcome</h1>
    <p className="text-xl">Smooth Scroll Experience</p>
  </div>
);

const About = () => (
  <div className="text-white p-8">
    <h2 className="text-4xl font-bold mb-4">About Us</h2>
    <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
);

const Event = () => <div className="text-white text-center py-20">Events Section</div>;
const Sponsors = () => <div className="text-white text-center py-20">Sponsors Section</div>;
const Footer = () => <div className="text-white text-center py-8">Footer Content</div>;
const Chatbot = ({ onClose }) => (
  <div className="fixed bottom-20 right-5 bg-white p-4 rounded-lg shadow-lg">
    Chatbot UI
    <button onClick={onClose} className="mt-2 text-sm">Close</button>
  </div>
);

const Start = () => (
  <div className="fixed inset-0 bg-black flex items-center justify-center text-white">
    Loading...
  </div>
);

// Event Pages
const Brainiac = () => <div className="min-h-screen text-white p-8">Brainiac Event Page</div>;
const CodeOfLies = () => <div className="min-h-screen text-white p-8">CodeOfLies Event Page</div>;
const Timescape = () => <div className="min-h-screen text-white p-8">Timescape Event Page</div>;
const CtrlAltElite = () => <div className="min-h-screen text-white p-8">CtrlAltElite Event Page</div>;
const CinemaEyesLens = () => <div className="min-h-screen text-white p-8">CinemaEyesLens Event Page</div>;

const MainContent = () => {
  const scrollRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const eventRef = useRef(null);
  const sponsorsRef = useRef(null);
  const footerRef = useRef(null);
  const locomotiveScroll = useRef(null);
  const location = useLocation();
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const matches = window.matchMedia('(max-width: 768px)').matches;
      setIsMobile(matches);
      return matches;
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      if (locomotiveScroll.current) locomotiveScroll.current.destroy();

      locomotiveScroll.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: isMobile ? 0.08 : 0.05,
        multiplier: isMobile ? 0.6 : 0.8,
        smartphone: { smooth: true },
        tablet: { smooth: true },
        getDirection: true,
        inertia: 0.8
      });

      const handleScroll = ({ scroll }) => {
        requestAnimationFrame(() => {
          if (heroRef.current) setIsScrolled(scroll.y > heroRef.current.offsetHeight);
        });
      };

      locomotiveScroll.current.on('scroll', handleScroll);

      return () => {
        locomotiveScroll.current?.destroy();
        window.scrollTo(0, 0);
      };
    }
  }, [location, isMobile]);

  const scrollToSection = (sectionId) => {
    const sectionMap = {
      hero: heroRef,
      about: aboutRef,
      events: eventRef,
      sponsors: sponsorsRef,
      footer: footerRef
    };

    const section = sectionMap[sectionId]?.current;
    if (section && locomotiveScroll.current) {
      locomotiveScroll.current.scrollTo(section);
    }
  };

  return (
    <div className="App">
      <Navbar isScrolled={isScrolled} scrollToSection={scrollToSection} />
      <div ref={scrollRef} data-scroll-container style={{ minHeight: '100vh' }}>
        <section ref={heroRef} data-scroll-section className="h-screen bg-gray-900 flex items-center justify-center">
          <Hero />
        </section>

        <section ref={aboutRef} data-scroll-section className="min-h-screen bg-black p-8">
          <About />
        </section>

        <section ref={eventRef} data-scroll-section className="min-h-screen bg-gray-900 p-8">
          <Event />
        </section>

        <section ref={sponsorsRef} data-scroll-section className="min-h-screen bg-black p-8">
          <Sponsors />
        </section>

        <footer ref={footerRef} data-scroll-section className="bg-gray-900 p-8">
          <Footer />
        </footer>
      </div>

      {isChatbotVisible && <Chatbot onClose={() => setIsChatbotVisible(false)} />}
      <button 
        className="fixed bottom-5 right-5 z-50 p-3 bg-white rounded-full shadow-lg"
        onClick={() => setIsChatbotVisible(!isChatbotVisible)}
      >
        💬
      </button>
    </div>
  );
};

const AppWrapper = () => {
  const [startAnimationComplete, setStartAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStartAnimationComplete(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={!startAnimationComplete ? <Start /> : <MainContent />} />
        <Route path="/event/brainiac" element={<Brainiac />} />
        <Route path="/event/codeOfLies" element={<CodeOfLies />} />
        <Route path="/event/timeScape" element={<Timescape />} />
        <Route path="/event/ctrlAltElite" element={<CtrlAltElite />} />
        <Route path="/event/cinemaEyesLens" element={<CinemaEyesLens />} />
      </Routes>
    </Router>
  );
};

export default AppWrapper;