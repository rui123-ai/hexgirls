import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Discography from './pages/Discography';
import Gallery from './pages/Gallery';
import Merch from './pages/Merch';
import Contact from './pages/Contact';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-hex-black text-white">
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/discography" element={<Discography />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
};

export default App; 