import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SimpleCarousel = ({ 
  images, 
  autoplaySpeed = 4000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoplaySpeed);

    return () => clearInterval(interval);
  }, [images.length, autoplaySpeed]);

  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          {imageLoaded && !imageError ? (
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${images[currentIndex]})`,
                backgroundSize: 'cover',
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-dusty-pink/20 to-soft-green/20 flex items-center justify-center">
              <div className="text-center text-white/70">
                <div className="text-6xl mb-4">💕</div>
                <div className="text-xl font-medium">Loading beautiful memories...</div>
              </div>
            </div>
          )}
          {/* Hidden img tag to test loading */}
          <img 
            src={images[currentIndex]} 
            alt="Wedding photo"
            style={{ display: 'none' }}
            onError={() => {
              setImageError(true);
            }}
            onLoad={() => {
              setImageLoaded(true);
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-dusty-pink' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SimpleCarousel;
