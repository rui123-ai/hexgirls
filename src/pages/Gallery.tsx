import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaHeart, FaShare } from 'react-icons/fa';

interface GalleryItem {
  id: number;
  title: string;
  type: 'official' | 'fanart' | 'video';
  imageUrl: string;
  description: string;
  likes: number;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Eclipse Ritual",
    type: "official",
    imageUrl: "/assets/gallery/eclipse-ritual.jpg",
    description: "Shadowheart durante o ritual do eclipse lunar",
    likes: 1234
  },
  {
    id: 2,
    title: "Digital Hex",
    type: "official",
    imageUrl: "/assets/gallery/digital-hex.jpg",
    description: "Darkness invocando os espíritos digitais",
    likes: 987
  },
  {
    id: 3,
    title: "Fan Art - Blood Moon",
    type: "fanart",
    imageUrl: "/assets/gallery/fanart-blood-moon.jpg",
    description: "Arte de fã inspirada no álbum Blood Moon Ritual",
    likes: 456
  },
  {
    id: 4,
    title: "VHS Glitch",
    type: "video",
    imageUrl: "/assets/gallery/vhs-glitch.jpg",
    description: "Captura do videoclipe 'Digital Hex' com efeito VHS",
    likes: 789
  },
  {
    id: 5,
    title: "Fan Art - Cyber Witch",
    type: "fanart",
    imageUrl: "/assets/gallery/fanart-cyber-witch.jpg",
    description: "Interpretação artística da fusão entre tecnologia e bruxaria",
    likes: 567
  },
  {
    id: 6,
    title: "Hell in High Heels",
    type: "official",
    imageUrl: "/assets/gallery/hell-heels.jpg",
    description: "Promoção do álbum Hell in High Heels",
    likes: 890
  }
];

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'official' | 'fanart' | 'video'>('all');

  const filteredItems = galleryItems.filter(item => 
    activeFilter === 'all' ? true : item.type === activeFilter
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-hex-black"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-gothic text-hex-neon mb-4">
            ARTE PROFANA
          </h1>
          <div className="w-24 h-1 bg-hex-red mx-auto" />
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          {(['all', 'official', 'fanart', 'video'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-md transition-colors duration-200
                ${activeFilter === filter 
                  ? 'bg-hex-red text-white' 
                  : 'bg-hex-gray/30 text-gray-300 hover:bg-hex-purple'}`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hex-black to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-gothic text-hex-neon mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full bg-hex-gray/30 rounded-lg overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-hex-neon hover:text-hex-red transition-colors duration-200"
                  onClick={() => setSelectedItem(null)}
                >
                  <FaTimes size={24} />
                </button>
                
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="w-full h-96 object-cover"
                />
                
                <div className="p-6">
                  <h2 className="text-2xl font-gothic text-hex-neon mb-2">
                    {selectedItem.title}
                  </h2>
                  <p className="text-gray-300 mb-4">
                    {selectedItem.description}
                  </p>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-hex-purple hover:text-hex-red transition-colors duration-200">
                      <FaHeart />
                      <span>{selectedItem.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-hex-purple hover:text-hex-red transition-colors duration-200">
                      <FaShare />
                      <span>Compartilhar</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Gallery; 