import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchImagesFromDrive } from '../services/googleDriveService';

const WeddingParty = () => {
  const [bridalTrain, setBridalTrain] = useState([]);
  const [groomsmen, setGroomsmen] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeSection, setActiveSection] = useState('bridal-train');

  useEffect(() => {
    loadWeddingPartyImages();
  }, []);

  const loadWeddingPartyImages = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Load images from specific Google Drive folders
      const bridalTrainFolderId = '1WnnynCvuYabGn7nynosB46n55n0yafKM';
      const groomsmenFolderId = '1_NjXCPldSJ08sf0tsZiwj3GSQngkQNWF';
      
      const bridalTrainData = await fetchImagesFromDrive(bridalTrainFolderId);
      const groomsmenData = await fetchImagesFromDrive(groomsmenFolderId);
      
      setBridalTrain(bridalTrainData);
      setGroomsmen(groomsmenData);
    } catch (err) {
      console.error('Error loading wedding party images:', err);
      setError('Failed to load wedding party images. Please check your Google Drive configuration.');
    } finally {
      setLoading(false);
    }
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const currentImages = activeSection === 'bridal-train' ? bridalTrain : groomsmen;
  const sectionTitle = activeSection === 'bridal-train' ? 'Bridal Train' : 'Groomsmen';

  if (loading) {
    return (
      <div className="pt-16 min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-dusty-pink mx-auto mb-4"></div>
          <p className="text-text-gray text-lg">Loading wedding party...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-16 min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-4">👰🤵</div>
          <h2 className="text-2xl font-script text-text-gray mb-4">Wedding Party Unavailable</h2>
          <p className="text-text-gray/80 mb-6">{error}</p>
          <button
            onClick={loadWeddingPartyImages}
            className="bg-dusty-pink text-white px-6 py-3 rounded-full hover:bg-dusty-pink/80 transition-colors duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-script text-text-gray mb-6">
            Wedding Party
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-dusty-pink to-soft-green mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-text-gray/80">
            Meet the amazing people who will be standing with us on our special day
          </p>
        </motion.div>

        {/* Section Toggle - Card Style Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setActiveSection('bridal-train')}
              className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                activeSection === 'bridal-train'
                  ? 'bg-dusty-pink text-white transform scale-105'
                  : 'bg-white/80 text-text-gray hover:bg-dusty-pink/10 hover:text-dusty-pink hover:scale-105'
              }`}
            >
              Bridal Train
            </button>
            <button
              onClick={() => setActiveSection('groomsmen')}
              className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                activeSection === 'groomsmen'
                  ? 'bg-dusty-pink text-white transform scale-105'
                  : 'bg-white/80 text-text-gray hover:bg-dusty-pink/10 hover:text-dusty-pink hover:scale-105'
              }`}
            >
              Groomsmen
            </button>
          </div>
        </motion.div>

        {/* Section Title */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-script text-text-gray mb-4">
            {sectionTitle}
          </h2>
          <div className="w-16 h-1 bg-dusty-pink mx-auto rounded-full"></div>
        </motion.div>

        {/* Images Grid */}
        <motion.div
          key={`${activeSection}-grid`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {currentImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02] bg-white">
                {/* Image container with fixed aspect ratio */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.fullSizeUrl}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to thumbnail if full size fails
                      e.target.src = image.thumbnailUrl;
                    }}
                  />
                </div>
                
                {/* Card content below image */}
                <div className="p-6 bg-white">
                  <h3 className="text-gray-800 font-semibold text-lg mb-2 line-clamp-2 group-hover:text-dusty-pink transition-colors duration-300">
                    {image.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {new Date(image.createdTime).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>

                {/* Hover overlay on image */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white/95 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {currentImages.length === 0 && !loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">
              {activeSection === 'bridal-train' ? '👰' : '🤵'}
            </div>
            <h3 className="text-2xl font-script text-text-gray mb-4">
              {sectionTitle} Photos Coming Soon
            </h3>
            <p className="text-text-gray/80">
              We're excited to share photos of our amazing {sectionTitle.toLowerCase()}!
            </p>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl max-h-full bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.fullSizeUrl}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain"
              />
              
              {/* Close button */}
              <div className="absolute top-6 right-6">
                <button
                  onClick={closeLightbox}
                  className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Image info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-white font-bold text-2xl mb-3 drop-shadow-lg">{selectedImage.title}</h3>
                  <div className="flex items-center space-x-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-white/90 text-base sm:text-lg font-medium drop-shadow-md">
                      {new Date(selectedImage.createdTime).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WeddingParty;
