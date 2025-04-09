import React from 'react';
import { motion } from 'framer-motion';
import { FaMusic, FaFilm, FaBook, FaGamepad } from 'react-icons/fa';

const About: React.FC = () => {
  const influences = {
    music: [
      'Nine Inch Nails',
      'The Pretty Reckless',
      'Evanescence',
      'Crystal Castles',
      'Motionless In White'
    ],
    visual: [
      'Filmes de terror gótico',
      'Grimórios ancestrais',
      'HQs ocultistas',
      'Cyberpunk sujo',
      'Moda underground'
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-hex-black"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-gothic text-hex-neon mb-4">
            O PACTO
          </h1>
          <div className="w-24 h-1 bg-hex-red mx-auto" />
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-gothic text-hex-purple mb-4">
            A Origem
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Hera e Morgana se conheceram durante um eclipse lunar, ambas invocando seus demônios internos através da música. 
            Daquela colisão nasceu a H3X GIRLS — uma banda que mistura bruxaria ancestral com tecnologia corrompida e punk das trevas.
          </p>
        </motion.div>

        {/* Members Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {/* Shadowheart */}
          <div className="bg-hex-gray/30 p-6 rounded-lg">
            <h3 className="text-xl font-gothic text-hex-red mb-2">Shadowheart</h3>
            <p className="text-sm text-hex-purple mb-2">Hera</p>
            <p className="text-gray-300">
              Vocalista principal e guitarrista rítmica. Mística, intensa, voz de trovão. 
              Sua presença em palco é como um eclipse total.
            </p>
          </div>

          {/* Darkness */}
          <div className="bg-hex-gray/30 p-6 rounded-lg">
            <h3 className="text-xl font-gothic text-hex-red mb-2">Darkness</h3>
            <p className="text-sm text-hex-purple mb-2">Morgana</p>
            <p className="text-gray-300">
              Mestre dos sintetizadores, batidas e back vocals espectrais. 
              Fria, calculista, invocadora de atmosferas sombrias com um toque de cyberpunk.
            </p>
          </div>
        </motion.div>

        {/* Influences Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Musical Influences */}
          <div>
            <h3 className="text-xl font-gothic text-hex-neon mb-4 flex items-center">
              <FaMusic className="mr-2" />
              Influências Musicais
            </h3>
            <ul className="space-y-2">
              {influences.music.map((influence, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="text-gray-300 flex items-center"
                >
                  <span className="w-2 h-2 bg-hex-red rounded-full mr-2" />
                  {influence}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Visual Influences */}
          <div>
            <h3 className="text-xl font-gothic text-hex-neon mb-4 flex items-center">
              <FaFilm className="mr-2" />
              Influências Visuais
            </h3>
            <ul className="space-y-2">
              {influences.visual.map((influence, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="text-gray-300 flex items-center"
                >
                  <span className="w-2 h-2 bg-hex-red rounded-full mr-2" />
                  {influence}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About; 