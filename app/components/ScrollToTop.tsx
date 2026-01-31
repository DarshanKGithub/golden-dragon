"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ 
            scale: 1.1, 
            backgroundColor: "#DC2626", // Brand Red
            boxShadow: "0px 0px 20px rgba(220, 38, 38, 0.4)" 
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[100] p-4 bg-brand-black border border-brand-yellow/30 text-brand-yellow shadow-2xl backdrop-blur-md rounded-full group transition-colors"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} className="group-hover:animate-bounce" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;