"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import menuData from '../data/menu.json';
import { X, Flame } from 'lucide-react';

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("Non-Veg");
  const [selectedDish, setSelectedDish] = useState<any>(null);

  return (
    <main className="bg-brand-white min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-brand-black pt-32 pb-20 text-center">
        <h1 className="text-6xl md:text-9xl font-black text-brand-white italic tracking-tighter">
          THE <span className="text-brand-yellow">MENU</span>
        </h1>
      </section>

      {/* Tabs */}
      <nav className="sticky top-[72px] z-40 bg-brand-white/90 backdrop-blur-md border-b border-brand-grey/10 py-6">
        <div className="flex justify-center gap-12">
          {Object.keys(menuData).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`text-xs font-black uppercase tracking-[0.3em] ${activeTab === cat ? "text-brand-red underline underline-offset-8" : "text-brand-grey"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      {/* List */}
      <section className="py-20 max-w-5xl mx-auto px-8">
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-16">
            {Object.entries(menuData[activeTab as keyof typeof menuData]).map(([subCat, items]) => (
              <div key={subCat}>
                <h2 className="text-brand-red font-black uppercase tracking-[0.4em] text-xs mb-8 flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-brand-red" /> {subCat}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                  {items.map((item: any) => (
                    <div key={item.id} onClick={() => setSelectedDish(item)} className="group cursor-pointer border-b border-brand-grey/10 pb-4 hover:border-brand-yellow transition-all">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-brand-black uppercase group-hover:text-brand-red transition-colors">{item.name}</h3>
                        <span className="text-brand-red font-black italic">
                          {item.full ? `₹${item.full}` : `₹${item.price}`}
                        </span>
                      </div>
                      <p className="text-xs text-brand-grey font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Dish Modal */}
      <AnimatePresence>
        {selectedDish && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-black/90 backdrop-blur-md" onClick={() => setSelectedDish(null)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className=" max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
              <div className="relative h-[300px] md:h-auto">
                <Image src={selectedDish.image} alt={selectedDish.name} fill className="object-cover" />
              </div>
              <div className="p-8 space-y-4">
                <button onClick={() => setSelectedDish(null)} className="absolute top-4 right-4 text-brand-grey hover:text-brand-red"><X /></button>
                <span className="flex items-center gap-2 text-brand-red text-[10px] font-bold uppercase tracking-widest"><Flame size={14}/> Chef Special</span>
                <h2 className="text-3xl font-black uppercase italic tracking-tighter">{selectedDish.name}</h2>
                <p className="text-brand-grey text-sm">{selectedDish.desc}</p>
                <div className="pt-6 flex justify-between items-center">
                  <span className="text-2xl font-black text-brand-red italic">₹{selectedDish.full || selectedDish.price}</span>
                  <button className="bg-brand-black text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-brand-red transition-all">Add to Cart</button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}