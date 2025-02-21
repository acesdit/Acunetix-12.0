import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import GameStorm from "./pages/GameStorm";
import Brainiac from "./pages/Brainiac";
import { Dpl } from './pages/Dpl.jsx';
import TimeScape from "./pages/TimeScape";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* <TimeScape/> */}
  {/* <Dpl/> */}
  {/* <GameStorm/> */}
  {/* <Brainiac/> */}

     <App />
  </BrowserRouter>,
)
