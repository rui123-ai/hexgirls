import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-hex-black text-white">
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-6 text-hex-neon">
            HEX BAND
          </h1>
          <p className="text-xl mb-8 text-hex-red">
            Welcome to our official website
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-hex-purple p-6 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4">Latest News</h2>
              <p>Stay tuned for our upcoming shows and releases!</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-hex-gray p-6 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4">Music</h2>
              <p>Check out our latest tracks and albums.</p>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Home; 