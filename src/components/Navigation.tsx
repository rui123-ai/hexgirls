import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMoon, FaMusic, FaImages, FaShoppingBag, FaEnvelope, FaInfoCircle } from 'react-icons/fa';

const Navigation: React.FC = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'INÍCIO', icon: <FaMoon /> },
    { path: '/about', label: 'SOBRE', icon: <FaInfoCircle /> },
    { path: '/discography', label: 'DISCOGRAFIA', icon: <FaMusic /> },
    { path: '/gallery', label: 'GALERIA', icon: <FaImages /> },
    { path: '/merch', label: 'MERCH', icon: <FaShoppingBag /> },
    { path: '/contact', label: 'CONTATO', icon: <FaEnvelope /> },
  ];

  return (
    <nav className="fixed top-0 w-full bg-hex-black/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0">
            <motion.h1 
              className="text-hex-neon font-gothic text-2xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              H3X GIRLS
            </motion.h1>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300
                    ${location.pathname === item.path 
                      ? 'text-hex-neon' 
                      : 'text-gray-300 hover:text-hex-red'}`}
                  onMouseEnter={() => setIsHovered(item.path)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-hex-purple">{item.icon}</span>
                    <span>{item.label}</span>
                  </span>
                  
                  {isHovered === item.path && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-hex-red"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 