import React from 'react';
import { motion } from 'framer-motion';
import SimpleCarousel from '../components/SimpleCarousel';

const Home = () => {

  // Actual couple photos - using only web-compatible formats (JPG, JPEG, PNG)
  const images = [
    '/images/DSC007632.JPEG',
    '/images/visit_louisiana_september_2025.jpg',
    '/images/visit_shreveport_tobi_birthday_september_2025.jpg'
  ];


  return (
    <div className="relative h-screen overflow-hidden">
      {/* Carousel */}
      <div className="absolute inset-0 z-0">
        <SimpleCarousel images={images} autoplaySpeed={4000} />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 home-overlay z-10" />

      {/* Main content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center text-white px-4 home-text"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="home-title font-script"
          >
            Oluwatobu & Dorcas
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="home-subtitle font-serif"
          >
            December 21, 2025
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="home-location font-serif"
          >
            Houston, Texas
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="mt-8 flex justify-center space-x-4"
          >
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-dusty-pink rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
