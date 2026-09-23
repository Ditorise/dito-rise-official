'use client';

import React from 'react';

interface NavbarProps {
  onOpenAmbassadorModal: () => void;
  onOpenBookModal: () => void;
}

export default function Navbar({ onOpenAmbassadorModal, onOpenBookModal }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-amber-600/30 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-black tracking-wider text-amber-400">DITO RISE</span>
      </div>

      <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-gray-300">
        <a href="#about" className="hover:text-amber-400 transition">About</a>
        <a href="#pillars" className="hover:text-amber-400 transition">Pillars</a>
        <a href="#impact" className="hover:text-amber-400 transition">Impact</a>
        <a href="#community" className="hover:text-amber-400 transition">Community</a>
      </div>

      <div className="flex space-x-4">
        <button 
          onClick={onOpenBookModal}
          className="px-4 py-2 border border-amber-500/50 text-amber-400 text-xs uppercase tracking-wider rounded hover:bg-amber-500/10 transition"
        >
          Request Book
        </button>
        <button 
          onClick={onOpenAmbassadorModal}
          className="px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold text-xs uppercase tracking-wider rounded hover:opacity-90 transition"
        >
          Become Ambassador
        </button>
      </div>
    </nav>
  );
}