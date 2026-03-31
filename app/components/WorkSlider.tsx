"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "TikTok",
    subtitle: "TikTok Creative Exchange",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80",
  },
  {
    title: "PRIME",
    subtitle: "PRIME Drink Launch",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80",
  },
  {
    title: "TapTapSend",
    subtitle: "Send Love",
    image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80",
  },
];

export default function WorkSlider() {
  return (
    <section className="py-24 px-12 bg-dark text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase">Our Work</h2>
          <div className="flex gap-4">
            <button className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center hover:bg-accent hover:text-black transition-all">
              <ArrowLeft size={24} />
            </button>
            <button className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center hover:bg-accent hover:text-black transition-all">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-12 hide-scrollbar">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="min-w-[300px] md:min-w-[400px] bg-white text-black p-6 clip-card flex flex-col gap-6"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase mb-1">{project.title}</h3>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">{project.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-end mt-8">
          <button className="bg-accent text-black font-black py-4 px-10 rounded-full text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl">
            View all works
          </button>
        </div>
      </div>
    </section>
  );
}
