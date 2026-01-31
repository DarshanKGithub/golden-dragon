"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react'; 
import Link from 'next/link'; // Import Link

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const menuVariants = {
    closed: { x: "100%", transition: { type: "spring" as const, stiffness: 300, damping: 30 } },
    opened: { x: "0%", transition: { type: "spring" as const, stiffness: 300, damping: 30 } }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    opened: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 0.2 }
    })
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 flex justify-between items-center px-6 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-brand-black/95 backdrop-blur-md border-b-2 border-brand-yellow py-3' : 'bg-transparent py-5'
      } text-brand-white`}
    >
      {/* Logo wrapped in Link for Homepage Redirect */}
      <Link href="/" className="z-[60]">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="text-2xl font-black italic tracking-tighter cursor-pointer"
        >
          <span className="text-brand-yellow">GOLDEN</span>
          <span className="text-brand-red ml-1">DRAGON</span>
        </motion.div>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 font-semibold uppercase text-sm tracking-widest">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className="relative group">
            <motion.span whileHover={{ color: "#FACC15" }} className="transition-colors">
              {link.name}
            </motion.span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full" />
          </Link>
        ))}
      </div>

      {/* CTA & Mobile Toggle */}
      <div className="flex items-center gap-4">
        <button className="hidden sm:block bg-brand-red text-white px-6 py-2 rounded-sm font-bold hover:bg-red-700 transition">
          ORDER ONLINE
        </button>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-[60] p-2 text-brand-yellow"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="fixed inset-0 bg-brand-black z-[50] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
              >
                <motion.span
                  custom={i}
                  variants={linkVariants}
                  className="text-4xl font-black text-brand-white hover:text-brand-yellow transition block"
                >
                  {link.name}
                </motion.span>
              </Link>
            ))}
            <motion.button 
              variants={linkVariants}
              custom={navLinks.length}
              className="mt-4 bg-brand-red text-white px-10 py-4 font-bold rounded-sm"
            >
              ORDER NOW
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;