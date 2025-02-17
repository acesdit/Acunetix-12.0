import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Event from './components/Event';
import '../locomotive-custom.scss';
import Sponsors from './components/Sponsors';
import Reel from './components/Reel';
import Footer from './components/Footer';

function App() {
  const scrollRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const eventRef = useRef(null);
  const sponsorsRef = useRef(null);
  const reelRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
      inertia: 0.75,
      getDirection: true,
    });

    locomotiveScroll.on('scroll', (args) => {
      document.documentElement.setAttribute('data-direction', args.direction);
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <>
      <section data-scroll-section data-scroll-speed="2" className="bg-black w-full fixed top-0 h-18 z-50 flex items-center">
        <Navbar scrollToRefs={{ heroRef, aboutRef, eventRef, sponsorsRef, reelRef, footerRef }} />
      </section>
      <div ref={scrollRef} data-scroll-container style={{ minHeight: '100vh' }}>
        <section ref={heroRef} data-scroll-section data-scroll-speed="3" className="flex flex-col backdrop-blur-xl items-center justify-center h-screen w-full bg-cover bg-center">
          <Hero />
        </section>

        <section ref={aboutRef} data-scroll-section data-scroll-speed="1" className='flex bg-black text-white flex-col items-center justify-center h-screen w-full'>
          <About />
        </section>

        <section ref={eventRef} data-scroll-section data-scroll-speed="2" className='mt-30'>
          <Event />
        </section>

        <section ref={sponsorsRef} data-scroll-section data-scroll-speed="2">
          <Sponsors />
        </section>
        
        {/* <section ref={reelRef} data-scroll-section data-scroll-speed="2">
          <Reel />
        </section> */}
        
        <section ref={footerRef} data-scroll-section data-scroll-speed="2" className="bg-black/90 backdrop-blur-lg pt-16 pb-8 relative z-20 border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Footer />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
