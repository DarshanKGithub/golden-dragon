"use client";

import Image from 'next/image';
import { motion, easeInOut } from 'framer-motion';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  // Animation variants for sections
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: easeInOut }
  };

  return (
    <main className="min-h-screen bg-brand-white selection:bg-brand-red selection:text-white">
      <Navbar />

      {/* Hero Section with Parallax Effect */}
      <section className="relative h-screen flex items-center justify-center bg-brand-black overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="https://images.unsplash.com/photo-1552611052-33e04de081de" 
            alt="Chinese Cuisine"
            fill
            className="object-cover"
            priority 
          />
        </motion.div>
        
        {/* Subtle Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/20 via-transparent to-brand-black/60 z-1" />
        
        <div className="relative z-10 text-center px-4">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-brand-yellow text-xs md:text-sm font-bold uppercase mb-6 block"
          >
            Established 2026 • Yavat 
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-6xl md:text-9xl font-black text-brand-white mb-6 drop-shadow-2xl italic tracking-tighter"
          >
            TASTE THE <br />
            <span className="text-brand-yellow">TRADITION</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="group relative bg-brand-red text-white px-12 py-5 font-bold text-sm tracking-[0.2em] overflow-hidden transition-all">
              <span className="relative z-10">EXPLORE MENU</span>
              <div className="absolute inset-0 bg-brand-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button className="text-brand-white text-sm tracking-[0.2em] border-b border-brand-white/30 pb-2 hover:border-brand-yellow hover:text-brand-yellow transition-all">
              BOOK A TABLE
            </button>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-yellow/50"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-brand-yellow to-transparent" />
        </motion.div>
      </section>

      {/* Featured Dishes Section */}
      <section id="menu" className="py-32 bg-brand-white">
        <div className="max-w-7xl mx-auto px-8">
          
          <motion.div {...fadeInUp} className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-12 bg-brand-red"></div>
                <span className="text-brand-red text-xs font-bold uppercase tracking-[0.3em]">Signature</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-brand-black uppercase tracking-tighter leading-none">
                Chef's <span className="text-brand-grey/20 italic">Selection</span>
              </h2>
            </div>
            <p className="max-w-md text-brand-grey text-sm leading-relaxed italic">
              "Every dish tells a story of heritage, fire, and the perfect balance of spices."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { id: 1, name: "Szechuan Spicy Noodles", price: "16.50", img: "https://images.unsplash.com/photo-1585032226651-759b368d7246" },
              { id: 2, name: "Crispy Peking Duck", price: "42.00", img: "https://images.unsplash.com/photo-1525755662778-989d0524087e" },
              { id: 3, name: "Golden Dim Sum Set", price: "24.00", img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c" }
            ].map((dish, index) => (
              <motion.div 
                key={dish.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative h-[450px] w-full overflow-hidden mb-8">
                   <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-brand-black/40 transition-all duration-500 z-10" />
                   <Image 
                    src={`${dish.img}?auto=format&fit=crop&w=800&q=80`}
                    alt={dish.name}
                    fill
                    className="object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition duration-700"
                   />
                   <div className="absolute bottom-6 left-6 z-20 overflow-hidden">
                      <motion.button 
                        whileTap={{ scale: 0.95 }}
                        className="bg-brand-yellow text-brand-black text-[10px] font-bold px-4 py-2 translate-y-20 group-hover:translate-y-0 transition-transform duration-500"
                      >
                        ADD TO ORDER +
                      </motion.button>
                   </div>
                </div>
                
                <div className="flex justify-between items-start border-b border-brand-grey/10 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-brand-black group-hover:text-brand-red transition-colors uppercase tracking-tight">{dish.name}</h3>
                    <p className="text-[10px] text-brand-grey uppercase tracking-[0.2em] mt-1">Authentic Szechuan Style</p>
                  </div>
                  <span className="text-brand-red font-bold text-lg italic">${dish.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative Brand Section */}
      <section className="bg-brand-black py-24 overflow-hidden border-y border-brand-yellow/20">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[1,2,3,4].map((i) => (
            <h2 key={i} className="text-[120px] font-black text-transparent stroke-text leading-none uppercase tracking-tighter opacity-20 px-10">
              The Golden Dragon • Experience • 
            </h2>
          ))}
        </motion.div>
      </section>
      {/* Founders Preview Section */}
<section className="bg-brand-white py-24 border-t border-brand-grey/10">
  <div className="max-w-7xl mx-auto px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="relative h-[500px] md:h-[700px]">
        <Image 
          src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" 
          alt="The Founders" 
          fill 
          className="object-cover border-[15px] border-brand-black"
        />
        <div className="absolute -bottom-10 -right-10 bg-brand-yellow p-10 hidden md:block">
          <p className="text-brand-black font-black text-4xl uppercase italic leading-none">
            Founded <br /> By Visionaries
          </p>
        </div>
      </div>
      
      <div className="space-y-8">
        <h2 className="text-5xl font-black text-brand-black uppercase tracking-tighter">
          MEET THE <span className="text-brand-red">FOUNDERS</span>
        </h2>
        <p className="text-brand-grey text-lg leading-relaxed">
          Led by **Sahil Dorge**, the Golden Dragon team brings together expertise in culinary arts, operations, and technology. Alongside partners **Tanmay Dorge**, **Shubham Pingale**, and **Darshan Kshetri**, we are committed to serving more than just food—we serve Pune's heritage.
        </p>
        <button className="bg-brand-black text-brand-white px-10 py-4 font-black text-[10px] tracking-[0.3em] uppercase hover:bg-brand-red transition-all">
          LEARN OUR STORY
        </button>
      </div>
    </div>
  </div>
</section>

      <Footer />

      {/* CSS for Stroke Text (Inline Style for Demo) */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px #FACC15;
        }
      `}</style>
      <ScrollToTop/>
    </main>
  );
}