import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaHeart, FaRegHeart } from 'react-icons/fa';

interface MerchItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'clothing' | 'accessories' | 'ritual' | 'music';
  inStock: boolean;
}

const merchItems: MerchItem[] = [
  {
    id: 1,
    name: "Camiseta Rasgada com Runas",
    description: "Camiseta preta com runas místicas e design rasgado",
    price: 89.90,
    imageUrl: "/assets/merch/runes-tshirt.jpg",
    category: "clothing",
    inStock: true
  },
  {
    id: 2,
    name: "Jaqueta de Couro Digital",
    description: "Jaqueta de couro com símbolos mágicos e detalhes em LED",
    price: 299.90,
    imageUrl: "/assets/merch/digital-leather.jpg",
    category: "clothing",
    inStock: true
  },
  {
    id: 3,
    name: "Vela Ritualística - Blood Moon",
    description: "Vela aromática inspirada no álbum Blood Moon Ritual",
    price: 49.90,
    imageUrl: "/assets/merch/blood-moon-candle.jpg",
    category: "ritual",
    inStock: true
  },
  {
    id: 4,
    name: "Colar Encantado",
    description: "Colar com símbolos ocultos e frases místicas",
    price: 69.90,
    imageUrl: "/assets/merch/enchanted-necklace.jpg",
    category: "accessories",
    inStock: true
  },
  {
    id: 5,
    name: "Vinil Blood Moon Ritual",
    description: "Vinil embrulhado em gaze ritual com selo de cera",
    price: 129.90,
    imageUrl: "/assets/merch/blood-moon-vinyl.jpg",
    category: "music",
    inStock: true
  },
  {
    id: 6,
    name: "Anel de Pentagrama",
    description: "Anel de prata com pentagrama e runas",
    price: 79.90,
    imageUrl: "/assets/merch/pentagram-ring.jpg",
    category: "accessories",
    inStock: false
  }
];

const Merch: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MerchItem['category'] | 'all'>('all');
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredItems = merchItems.filter(item => 
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

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
            RELÍQUIAS DAS SOMBRAS
          </h1>
          <div className="w-24 h-1 bg-hex-red mx-auto" />
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-8">
          {(['all', 'clothing', 'accessories', 'ritual', 'music'] as const).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md transition-colors duration-200
                ${activeCategory === category 
                  ? 'bg-hex-red text-white' 
                  : 'bg-hex-gray/30 text-gray-300 hover:bg-hex-purple'}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Merch Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-hex-gray/30 rounded-lg overflow-hidden"
            >
              <div className="relative group">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hex-black to-transparent opacity-60" />
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="absolute top-4 right-4 text-hex-neon hover:text-hex-red transition-colors duration-200"
                >
                  {favorites.includes(item.id) ? <FaHeart /> : <FaRegHeart />}
                </button>
              </div>

              <div className="p-4">
                <h3 className="text-xl font-gothic text-hex-neon mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-hex-purple font-bold">
                    R$ {item.price.toFixed(2)}
                  </span>
                  <button
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-200
                      ${item.inStock 
                        ? 'bg-hex-red text-white hover:bg-hex-purple' 
                        : 'bg-hex-gray text-gray-400 cursor-not-allowed'}`}
                    disabled={!item.inStock}
                  >
                    <FaShoppingCart />
                    <span>{item.inStock ? 'Adicionar' : 'Esgotado'}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Merch; 