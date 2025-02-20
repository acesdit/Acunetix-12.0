import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import CodeOfLies from './pages/CodeOfLies.jsx';
import {Brainiac} from "./pages/Brainiac.jsx"
import { Dpl } from './pages/Dpl.jsx';
import { TreasureTrove } from './pages/TreasureTrove.jsx';
import { Timescape } from './pages/TimeScape.jsx';
import { GameStorm } from './pages/GameStorm.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <GameStorm/>
    {/* <App /> */}
  </BrowserRouter>,
)
