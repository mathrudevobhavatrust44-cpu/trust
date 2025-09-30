import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Donations from './pages/Donations';
import Gallery from './pages/Gallery';
import Footer from './pages/Footer';
import Whatsapp from './pages/Whatsapp';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/donation" element={<Donations />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Whatsapp />
    </Router>
  );
}

export default App;
