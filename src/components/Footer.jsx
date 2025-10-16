import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-soft-green/10 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-text-gray font-script text-xl md:text-2xl">
            © 2025 Oluwatobu & Dorcas | Houston, Texas
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <div className="w-2 h-2 bg-dusty-pink rounded-full"></div>
            <div className="w-2 h-2 bg-soft-green rounded-full"></div>
            <div className="w-2 h-2 bg-dusty-pink rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
