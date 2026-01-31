"use client";

import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-brand-black">
      <div className="relative flex flex-col items-center">
        {/* Outer Golden Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="w-20 h-20 border-t-2 border-b-2 border-brand-yellow rounded-full"
        />
        
        {/* Inner Red Pulsing Core */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-brand-red rounded-full blur-[2px]"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-brand-yellow text-[10px] uppercase tracking-[0.5em] font-black italic"
        >
          Golden Dragon
        </motion.p>
      </div>
    </div>
  );
};

export default Loading;