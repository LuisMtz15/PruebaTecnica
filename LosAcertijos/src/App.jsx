import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Principal as PaginaInicio} from './components/Principal';
import { Acertijo1 } from './components/Acertijo1';
import { Acertijo2 } from './components/Acertijo2';
import { Acertijo3 } from './components/Acertijo3';
import { AcertijoMain } from './components/Acertijo-main';
import { Acertijo2Main } from './components/Acertijo2-main';
import { Acertijo3Main } from './components/Acertijo3-main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<PaginaInicio/>} />
        <Route path="/acertijo1" element={<Acertijo1/>} />
        <Route path="/acertijo2" element={<Acertijo2/>} />
        <Route path="/acertijo3" element={<Acertijo3/>} />
        <Route path="/main-acertijo1" element={<AcertijoMain/>} />
        <Route path="/main-acertijo2" element={<Acertijo2Main/>} />
        <Route path="/main-acertijo3" element={<Acertijo3Main/>} />
      </Routes>
    </Router>
  );
}

export default App;
