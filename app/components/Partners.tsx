"use client";

import React from "react";
import { motion } from "framer-motion";

const logos = [
  "Warner Music", "Chivas", "Facta", "Cadbury", "TikTok", "Prime", "TapTapSend"
];

export default function Partners() {
  return (
    <section className="py-12 bg-primary border-t border-white/10 overflow-hidden">
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: "-50%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 items-center px-8 min-w-max"
        >
          {[...logos, ...logos].map((logo, index) => (
            <span
              key={index}
              className="text-white/60 text-2xl font-black uppercase tracking-widest hover:text-white transition-colors cursor-pointer"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
