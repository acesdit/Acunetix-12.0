import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import React from "react";
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Event from './components/Event';
import Sponsors from './components/Sponsors';

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      <section data-scroll-section className="bg-black w-full fixed top-0 h-18 z-50 flex items-center">
        <Navbar />
      </section>

      <section data-scroll-section className="flex flex-col backdrop-blur-xl items-center justify-center h-screen w-full bg-cover bg-center" >
        <Hero />
      </section>

      <section data-scroll-section 
      className='flex bg-black text-white flex-col items-center justify-center h-screen w-full'
      style={{ backgroundImage: "url('')" }}>
        <About />
      </section>

      <section data-scroll-section>
        <Event />
      </section>

      <section data-scroll-section>
        <Sponsors />
      </section>
    </div>
  );
}

export default App;
