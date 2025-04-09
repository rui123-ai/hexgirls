import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="bg-hex-purple p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-hex-neon text-2xl font-bold">
          HEX BAND
        </Link>
        <div className="space-x-6">
          <Link to="/" className="text-white hover:text-hex-neon transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-hex-neon transition-colors">
            About
          </Link>
          <Link to="/music" className="text-white hover:text-hex-neon transition-colors">
            Music
          </Link>
          <Link to="/contact" className="text-white hover:text-hex-neon transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 