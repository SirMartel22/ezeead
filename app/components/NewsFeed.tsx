"use client";

import React from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const newsItems = [
  {
    title: "Dynasty Africa Joins TikTok's Creative Exchange",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80",
    color: "bg-primary",
  },
  {
    title: "Powerful Marketing in Africa.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",
    color: "bg-green-600",
  },
];

export default function NewsFeed() {
  return (
    <section className="py-24 px-12 bg-dark text-white border-t border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase">News</h2>
          <div className="flex gap-4">
            <button className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center hover:bg-accent hover:text-black transition-all">
              <ArrowLeft size={24} />
            </button>
            <button className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center hover:bg-accent hover:text-black transition-all">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className={`flex flex-col md:flex-row gap-6 p-6 ${item.color} rounded-2xl overflow-hidden shadow-2xl group cursor-pointer`}
            >
              <div className="w-full md:w-1/3 aspect-square md:aspect-auto h-48 md:h-full bg-white/20 rounded-xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between py-2">
                <h3 className="text-2xl font-black leading-tight mb-4">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 font-bold text-sm opacity-60 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                  Read More
                  <ExternalLink size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
