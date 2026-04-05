"use client";

import React from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function IntroVideo() {
  return (
    <section className="py-24 px-12 bg-white text-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black mb-12">
          What Power <br /> Means To Us
        </h2>
        <motion.div
          whileHover={{ scale: 0.98 }}
          className="relative aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
            alt="Agency Culture"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-primary/20 flex items-center justify-center group-hover:bg-transparent transition-all">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play size={40} className="text-white fill-white" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm bg-black/30 px-3 py-1 rounded">
            and we really do powerful things
          </div>
        </motion.div>
      </div>
    </section>
  );
}
