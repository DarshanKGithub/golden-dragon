"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, ArrowRight, Globe } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook size={18} />, href: "#" },
    { icon: <Instagram size={18} />, href: "#" },
    { icon: <Twitter size={18} />, href: "#" },
  ];

  const footerLinks = ["Menu", "Our Story", "Reservations", "Private Dining", "Gift Cards"];

  return (
    <footer className="relative bg-brand-black text-brand-white pt-16 pb-8 md:pt-24 md:pb-12 overflow-hidden border-t border-brand-grey/10">
      {/* Decorative Gradient Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Top Section: Brand Identity */}
        <div className="text-center mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="text-3xl md:text-6xl font-black italic tracking-[0.3em] md:tracking-[0.5em] inline-block mb-6"
          >
            <span className="text-brand-yellow drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]">GOLDEN</span>
            <span className="text-brand-red ml-2 md:ml-4">DRAGON</span>
          </motion.h2>
          
          {/* Quick Links - Wrapped for Mobile */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-2">
            {footerLinks.map((link) => (
              <a key={link} href="#" className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-500 hover:text-brand-yellow transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Main Info Grid: 1 column on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-16 pb-12 md:pb-20 border-b border-brand-grey/10">
          
          {/* Contact & Social */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
            <h4 className="text-brand-yellow text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] mb-4">Contact</h4>
            <div className="space-y-1 mb-6">
              <p className="text-gray-400 text-sm hover:text-brand-white transition-colors cursor-pointer">+91 91127 94245</p>
              <p className="text-gray-400 text-sm">reservations@goldendragon.com</p>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.1, color: "#DC2626" }}
                  className="p-3 rounded-full border border-brand-grey/20 hover:border-brand-red transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Experience - Hidden or Simplified on very small screens, Centered on Tablet+ */}
          <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 order-1 md:order-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-brand-yellow/30 flex items-center justify-center">
              <Globe size={18} className="text-brand-yellow animate-[spin_12s_linear_infinite]" />
            </div>
            <div>
              <h4 className="text-brand-yellow text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] mb-3 md:mb-4">Experience</h4>
              <p className="text-gray-300 text-sm max-w-[220px] md:max-w-[250px] leading-relaxed">
                Kalyani Nagar, Pune,<br className="hidden md:block" />
                Maharashtra 411001
              </p>
            </div>
          </div>

          {/* Hours & Newsletter */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right order-3">
             <div className="mb-8 md:mb-0">
                <h4 className="text-brand-yellow text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] mb-4">The Hours</h4>
                <div className="text-gray-400 text-sm space-y-1">
                  <p>Dinner: 07:00 PM — 11:30 PM</p>
                  <p>Lunch: 12:00 PM — 03:30 PM</p>
                </div>
             </div>
             
             <div className="w-full max-w-[260px] md:mt-8">
                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="EXCLUSIVE UPDATES" 
                    className="bg-transparent border-b border-brand-grey/40 py-2 w-full text-[9px] md:text-[10px] tracking-[0.2em] focus:outline-none focus:border-brand-red transition-all uppercase placeholder:text-gray-600"
                  />
                  <motion.button 
                    whileHover={{ x: 5 }}
                    className="absolute right-0 bottom-2 text-brand-red"
                  >
                    <ArrowRight size={18} />
                  </motion.button>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Bar: Stacked on Mobile, Row on Desktop */}
        <div className="pt-8 md:pt-12 flex flex-col md:flex-row justify-between items-center gap-y-6 text-center md:text-left">
          <div className="order-2 md:order-1">
            <p className="text-[8px] md:text-[9px] text-gray-600 tracking-[0.2em] uppercase">
              Design by Darshan Kshetri
            </p>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-[8px] md:text-[9px] text-gray-500 tracking-[0.2em] uppercase">
              © 2026 THE GOLDEN DRAGON GROUP
            </p>
          </div>
          <div className="order-3 flex gap-6 text-[8px] md:text-[9px] text-gray-600 tracking-[0.2em] uppercase">
            <a href="#" className="hover:text-brand-red transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-red transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;