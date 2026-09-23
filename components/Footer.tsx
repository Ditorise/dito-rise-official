'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        
        {/* Movement Info */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-black text-amber-400 mb-3">DITO RISE</h3>
          <p className="text-xs leading-relaxed text-gray-400 mb-4">
            Fix Your Mind. Grow Your Skills. Build Your Future. Empowering youth and leaders through mindset transformation.
          </p>
          <a
            href="https://selar.co/m/Weareone2560"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/40 text-amber-400 text-xs font-bold rounded hover:bg-amber-500 hover:text-black transition"
          >
            BUY / DOWNLOAD BOOKS
          </a>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-3">Contact Us</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <span className="text-gray-500 block">Email:</span>
              <a href="mailto:ditorise@gmail.com" className="text-amber-400 hover:underline">
                ditorise@gmail.com
              </a>
            </li>
            <li>
              <span className="text-gray-500 block">Call / WhatsApp:</span>
              <a href="https://wa.me/233245681145" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-amber-400">
                +233 24 568 1145 / +233 53 017 1190
              </a>
            </li>
            <li>
              <span className="text-gray-500 block">Location:</span>
              <span className="text-gray-300">Valco Flat Ashaiman, Tema, Ghana</span>
            </li>
          </ul>
        </div>

        {/* Official Social Media */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-3">Social Media</h4>
          <div className="flex flex-col space-y-2 text-xs">
            <a href="https://www.tiktok.com/@weareone2560" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition">
              TikTok: @weareone2560
            </a>
            <a href="https://youtube.com/@ditorise" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition">
              YouTube: @ditorise
            </a>
            <a href="https://instagram.com/ditorisegen" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition">
              Instagram: @ditorisegen
            </a>
            <a href="https://web.facebook.com/profile.php?id=61578421297508" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition">
              Facebook: We Are One
            </a>
          </div>
        </div>

        {/* Resources & Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-3">Quick Links</h4>
          <div className="flex flex-col space-y-2 text-xs">
            <a href="#about" className="hover:text-amber-400 transition">About Movement</a>
            <a href="#pillars" className="hover:text-amber-400 transition">Our Core Pillars</a>
            <a href="#impact" className="hover:text-amber-400 transition">Target Impact</a>
            <a href="https://selar.co/m/Weareone2560" target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">
              Selar Book Store &rarr;
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-6xl mx-auto border-t border-zinc-900 pt-6 text-xs text-center text-gray-500">
        &copy; {new Date().getFullYear()} DITO RISE & WE ARE ONE Movement. All rights reserved.
      </div>
    </footer>
  );
}