"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  const team = [
    {
      name: "Sahil Dorge",
      role: "Owner & Visionary",
      desc: "The driving force behind Golden Dragon, Sahil's passion for authentic Szechuan cuisine redefined the dining landscape in Pune.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      name: "Tanmay Dorge",
      role: "Operations Partner",
      desc: "Ensuring every guest experiences excellence, Tanmay manages the intricate balance of traditional service and modern efficiency.",
      image: "/TanmayImg.png"
    },
    {
      name: "Shubham Pingale",
      role: "Culinary Strategist",
      desc: "With an eye for detail, Shubham bridges the gap between heritage recipes and contemporary culinary trends.",
      image: "/Shubham.png"
    },
    {
      name: "Darshan Kshetri",
      role: "Technical Partner",
      desc: "Integrating technology into the art of dining, Darshan ensures the Dragon's digital presence is as seamless as its service.",
      image: "/DarshanImg.png"
    }
  ];

  return (
    <main className="bg-brand-black min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b" 
            alt="Interior" fill className="object-cover"
          />
        </div>
        <motion.h1 
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "1em" }}
          className="relative z-10 text-4xl md:text-7xl font-black text-brand-yellow uppercase italic text-center"
        >
          Our Story
        </motion.h1>
      </section>

      {/* Heritage Section */}
      <section className="py-24 px-8 bg-brand-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center text-brand-black">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-brand-red font-bold tracking-[0.3em] uppercase text-sm">Since 2026</span>
            <h2 className="text-5xl font-black leading-tight uppercase">
              The Art of <br /> <span className="text-brand-grey/40">Szechuan Fire</span>
            </h2>
            <p className="text-brand-grey leading-relaxed text-lg">
              Born in the heart of Pune, Golden Dragon was founded on a simple principle: 
              Heritage is served on a plate.
            </p>
            <div className="border-l-4 border-brand-yellow pl-6 italic text-brand-grey">
              "We don't just cook food; we preserve the soul of the Dragon."
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative h-[600px] border-[20px] border-brand-black shadow-2xl"
          >
            <Image 
              src="https://images.unsplash.com/photo-1555126634-323283e090fa" 
              alt="Chef cooking" fill className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 px-8 bg-brand-black border-t border-brand-yellow/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-brand-yellow text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
              The Minds Behind the <span className="text-brand-red">Dragon</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-[450px] mb-6 overflow-hidden border border-brand-grey/30 group-hover:border-brand-yellow transition-all duration-500">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-brand-yellow font-black uppercase tracking-widest text-xl">{member.name}</h3>
                <p className="text-brand-red text-[10px] font-bold uppercase tracking-[0.3em] mb-4">{member.role}</p>
                <p className="text-brand-grey text-sm leading-relaxed font-light">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}