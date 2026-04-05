"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="py-24 px-12 bg-primary text-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-end justify-between gap-12">
        <div className="flex-1">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            What <br /> We Do
          </h2>
          <p className="max-w-xl text-lg text-white/80 font-medium leading-relaxed">
            As a full-service creative & marketing agency, we bring Power and Creativity
            to you with services that span across Media, Digital, Social Media, Influencer
            Marketing, PR & Branding, Tech, and Traditional platform, ensuring your
            brand thrives in every space that matters.
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent text-black font-black py-4 px-10 rounded-lg text-sm uppercase tracking-widest flex items-center gap-4 hover:bg-white transition-all shadow-xl btn-premium"
        >
          View our services
          <ArrowRight size={20} />
        </motion.button>
      </div>
    </section>
  );
}
