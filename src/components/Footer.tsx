import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaYoutube, FaSpotify, FaBandcamp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaInstagram />, url: 'https://instagram.com/H3XGIRLS', label: 'Instagram' },
    { icon: <FaTiktok />, url: 'https://tiktok.com/@hexhymns', label: 'TikTok' },
    { icon: <FaYoutube />, url: 'https://youtube.com/H3XGIRLS', label: 'YouTube' },
    { icon: <FaSpotify />, url: 'https://open.spotify.com/artist/H3XGIRLS', label: 'Spotify' },
    { icon: <FaBandcamp />, url: 'https://h3xgirls.bandcamp.com', label: 'Bandcamp' }
  ];

  return (
    <footer className="bg-hex-black border-t border-hex-purple/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Band Info */}
          <div className="text-center md:text-left">
            <motion.h2 
              className="text-2xl font-gothic text-hex-neon mb-4"
              whileHover={{ scale: 1.05 }}
            >
              H3X GIRLS
            </motion.h2>
            <p className="text-gray-400 text-sm">
              "Nós não invocamos o som. Nós o amaldiçoamos."
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-hex-purple font-gothic mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {['Início', 'Sobre', 'Discografia', 'Galeria', 'Merch', 'Contato'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-hex-neon transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-hex-purple font-gothic mb-4">Redes Sociais</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: '#39FF14' }}
                  className="text-hex-purple hover:text-hex-neon transition-colors duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-hex-purple/20 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} H3X GIRLS. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Desenvolvido com magia negra e código corrompido
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 