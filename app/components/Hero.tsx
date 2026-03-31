"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const headlines = [
  "WINNER, BEST SOCIAL MEDIA CAMPAIGN",
  "DO POWERFUL MARKETING",
  "CREATIVITY THAT DRIVES RESULTS",
  "YOUR BRAND, OUR POWER"
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="sticky-hero h-screen w-full bg-primary flex flex-col justify-center px-12 text-white overflow-hidden clip-hero">
      <div className="max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-accent font-bold mb-4 text-sm"
        >
          (MarkHack awards—2025)
        </motion.p>
        <div className="h-48 md:h-64 relative">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-8xl font-black leading-tight absolute w-full"
            >
              {headlines[index]}
            </motion.h1>
          </AnimatePresence>
        </div>
        <div className="w-full h-[1px] bg-white/20 mt-12 mb-8" />
      </div>
    </section>
  );
}
