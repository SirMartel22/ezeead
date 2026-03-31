"use client";

import React from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-transparent mix-blend-difference text-white">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <span className="text-black font-black text-xs">DA</span>
        </div>
        <span className="font-black text-lg tracking-tighter">DYNASTY AFRICA</span>
      </div>
      <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
        <Menu size={24} />
      </button>
    </nav>
  );
}
