"use client";

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="bg-brand-black min-h-screen">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-8 py-32 grid grid-cols-1 md:grid-cols-2 gap-24">
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div>
            <h1 className="text-6xl font-black text-brand-white uppercase mb-4 tracking-tighter">
              Get in <span className="text-brand-yellow">Touch</span>
            </h1>
            <p className="text-brand-grey tracking-widest uppercase text-xs font-bold">Reservations & Inquiries</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-brand-grey/10 border border-brand-grey/20 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all">
                <Phone size={20} />
              </div>
              <p className="text-brand-white text-xl font-light">+91 91127 94245</p>
            </div>
            
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-brand-grey/10 border border-brand-grey/20 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all">
                <MapPin size={20} />
              </div>
              <p className="text-brand-white text-xl font-light">Kalyani Nagar, Pune, MH</p>
            </div>
          </div>
        </motion.div>

        {/* Premium Form */}
        <motion.form 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-brand-white p-12 space-y-8 shadow-[20px_20px_0px_#FACC15]"
        >
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-brand-grey">Full Name</label>
            <input type="text" className="w-full bg-transparent border-b-2 border-brand-black/10 py-2 focus:border-brand-red outline-none transition-all" />
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-brand-grey">Email Address</label>
            <input type="email" className="w-full bg-transparent border-b-2 border-brand-black/10 py-2 focus:border-brand-red outline-none transition-all" />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-brand-grey">Message</label>
            <textarea rows={4} className="w-full bg-transparent border-b-2 border-brand-black/10 py-2 focus:border-brand-red outline-none transition-all resize-none" />
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-brand-black text-brand-white py-4 font-black uppercase tracking-widest hover:bg-brand-red transition-colors"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>

      <Footer />
    </main>
  );
}