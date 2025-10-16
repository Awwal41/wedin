import React from 'react';
import { motion } from 'framer-motion';

const Registry = () => {
  const handleRegistryClick = () => {
    window.open('https://www.amazon.com/wedding/registry/364VYVWXACSXH', '_blank');
  };

  return (
    <div className="pt-16 min-h-screen bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-script text-text-gray mb-6">
            Our Registry
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-dusty-pink to-soft-green mx-auto rounded-full"></div>
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          {/* Intro text */}
          <div className="mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl text-text-gray mb-6 leading-relaxed"
            >
              Your love and presence are the greatest gifts.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-text-gray/80 leading-relaxed"
            >
              For those who wish to bless us further, here's our registry.
            </motion.p>
          </div>

          {/* Registry button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mb-12"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#D8A7B1'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRegistryClick}
              className="bg-soft-green hover:bg-dusty-pink text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Our Amazon Registry
            </motion.button>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex justify-center space-x-4 mb-12"
          >
            <div className="w-3 h-3 bg-dusty-pink rounded-full"></div>
            <div className="w-3 h-3 bg-soft-green rounded-full"></div>
            <div className="w-3 h-3 bg-dusty-pink rounded-full"></div>
          </motion.div>

          {/* Additional message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="bg-gradient-to-r from-dusty-pink/5 to-soft-green/5 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-script text-text-gray mb-4">
              Thank You
            </h3>
            <p className="text-text-gray/80 leading-relaxed">
              Your thoughtfulness and generosity mean the world to us. 
              We're so grateful to have you as part of our special day.
            </p>
          </motion.div>
        </motion.div>

        {/* Gift ideas section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-script text-text-gray text-center mb-12">
            Gift Ideas
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Home & Kitchen", icon: "🏠" },
              { title: "Dining & Entertaining", icon: "🍽️" },
              { title: "Bedding & Bath", icon: "🛏️" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white/50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-text-gray">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Registry;
