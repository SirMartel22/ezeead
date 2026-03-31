"use client";

import React from "react";
import { motion } from "framer-motion";

const Instagram = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Facebook = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Youtube = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const Twitter = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export default function FooterCTA() {
  return (
    <footer className="py-24 px-12 bg-white text-dark">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <a href="#" className="font-bold text-sm uppercase tracking-widest hover:text-primary transition-colors">About Us</a>
          <a href="#" className="font-bold text-sm uppercase tracking-widest hover:text-primary transition-colors">Works</a>
          <a href="#" className="font-bold text-sm uppercase tracking-widest hover:text-primary transition-colors">Contact Us</a>
          <a href="#" className="font-bold text-sm uppercase tracking-widest hover:text-primary transition-colors">News</a>
        </div>

        <div className="relative p-12 bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12 group cursor-pointer">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-32 -mt-32 transition-colors group-hover:bg-accent/40" />
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase relative z-10">
            Want to do <br /> Powerful <br /> things?
          </h2>
          <div className="flex flex-col items-center gap-8 relative z-10 w-full md:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-black font-black py-4 px-10 rounded-full text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl"
            >
              Get started
            </motion.button>
            <div className="flex gap-6 mt-8">
              <Instagram size={20} className="text-white hover:text-accent cursor-pointer transition-colors" />
              <Facebook size={20} className="text-white hover:text-accent cursor-pointer transition-colors" />
              <Youtube size={20} className="text-white hover:text-accent cursor-pointer transition-colors" />
              <Twitter size={20} className="text-white hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-12 border-t border-dark/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-dark rounded-full flex items-center justify-center">
              <span className="text-white font-black text-xs">DA</span>
            </div>
            <span className="font-black text-lg tracking-tighter">DYNASTY AFRICA</span>
          </div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">© 2025 Dynasty Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
