import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const weddingDate = new Date('2025-12-21T00:00:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.6 }}
      className="mt-8"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-script text-white mb-2">
          Until We Say "I Do"
        </h3>
        <div className="w-16 h-0.5 bg-white/50 mx-auto"></div>
      </div>
      
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 min-w-[200px]"
        >
          <div className="text-5xl md:text-6xl font-bold text-white mb-2">
            {timeLeft.days}
          </div>
          <div className="text-lg md:text-xl text-white/80 font-medium">
            Days
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Countdown;
