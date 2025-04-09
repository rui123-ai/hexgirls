import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Howl } from 'howler';

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize background music
    const bgMusic = new Howl({
      src: ['/assets/audio/invocation.mp3'],
      loop: true,
      volume: 0.3,
    });

    // Start loading animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
      bgMusic.play();
    }, 2000);

    return () => {
      clearTimeout(timer);
      bgMusic.unload();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center bg-hex-black relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-full h-full"
          animate={{
            background: [
              'radial-gradient(circle at 50% 50%, rgba(45, 0, 71, 0.3) 0%, rgba(10, 10, 10, 0.5) 100%)',
              'radial-gradient(circle at 50% 50%, rgba(139, 0, 0, 0.3) 0%, rgba(10, 10, 10, 0.5) 100%)',
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-gothic text-hex-neon mb-6">
            H3X GIRLS
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl text-hex-purple font-punk mb-8"
          >
            "Se você chegou até aqui… já não há volta."
          </motion.p>
        </motion.div>

        {/* Animated pentagram */}
        <motion.div
          className="w-32 h-32 mx-auto"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-hex-red"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M50 5 L61 40 L97 40 L68 62 L79 95 L50 75 L21 95 L32 62 L3 40 L39 40 Z" />
          </svg>
        </motion.div>

        {/* Loading animation */}
        {!isLoaded && (
          <motion.div
            className="mt-8"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <p className="text-hex-gray">Invocando os espíritos...</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Home; 