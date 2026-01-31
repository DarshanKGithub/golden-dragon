"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <main className="bg-brand-black min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b" 
            alt="Interior" fill className="object-cover"
          />
        </div>
        <motion.h1 
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "1em" }}
          className="relative z-10 text-4xl md:text-7xl font-black text-brand-yellow uppercase italic"
        >
          Our Story
        </motion.h1>
      </section>

      {/* Heritage Section */}
      <section className="py-24 px-8 bg-brand-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-brand-red font-bold tracking-[0.3em] uppercase text-sm">Since 2010</span>
            <h2 className="text-5xl font-black text-brand-black leading-tight uppercase">
              The Art of <br /> <span className="text-brand-grey/40">Szechuan Fire</span>
            </h2>
            <p className="text-brand-grey leading-relaxed text-lg">
              Born in the heart of Pune, Golden Dragon was founded on a simple principle: 
              Heritage is served on a plate. Our chefs blend ancient Cantonese techniques 
              with modern culinary precision.
            </p>
            <div className="border-l-4 border-brand-yellow pl-6 italic text-brand-grey italic">
              "We don't just cook food; we preserve the soul of the Dragon."
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative h-[600px] border-[20px] border-brand-black"
          >
            <Image 
              src="https://images.unsplash.com/photo-1555126634-323283e090fa" 
              alt="Chef cooking" fill className="object-cover"
            />
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}