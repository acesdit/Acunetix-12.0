import { useState } from 'react'
import React from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-black w-full fixed top-0 h-18 z-50 flex items-center ">
        <Navbar />
      </div>
      <section className="flex flex-col backdrop-blur-xl items-center justify-center h-screen w-full"> 
        <Hero />
      </section>
      <section className='flex bg-black text-white flex-col items-center justify-center h-screen w-full'>
        <About/>
      </section>
    </>
  )
}

export default App
