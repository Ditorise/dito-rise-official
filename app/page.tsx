'use client';

import { useState } from 'react';

export default function Home() {
  const [pages, setPages] = useState<number>(1);
  const [pricePerPage, setPricePerPage] = useState<number>(500);

  // Math logic for Total & 50% Deposit
  const totalEstimate = pages * pricePerPage;
  const deposit = totalEstimate * 0.5;

  // Replace with your real phone number (with 233 country code)
  const PHONE_NUMBER = "233245681145"; 

  const handleWhatsAppQuote = () => {
    const message = `Hello DITO RISE! I would like to order a website project with ${pages} pages.\n\nTotal Estimate: ${totalEstimate} GHS\n50% Deposit to Start: ${deposit} GHS`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleDirectWhatsApp = () => {
    const message = "Hello Dito! I visited the DITO RISE website and would like to connect / support the movement.";
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#0A1628] text-white p-6 md:p-12 font-sans">
      
      {/* Hero / Vision Statement */}
      <section className="max-w-4xl mx-auto text-center my-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          We are here to make the world a better place <span className="text-[#F5C518]">one mind at a time.</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Equipping visionary entrepreneurs, students, and dreamers with the knowledge, tools, and mindset to think deeply, grow consistently, and live purposefully.
        </p>
      </section>

      {/* Grand Quote Box */}
      <div className="max-w-3xl mx-auto bg-[#0A1628] border-2 border-[#D4A017] p-6 rounded-lg text-center my-8 shadow-lg">
        <p className="text-[#F5C518] text-xl italic font-semibold">
          &ldquo;We are here to make the world a better place one mind at a time.&rdquo;
        </p>
        <span className="text-gray-400 text-sm block mt-2">— Dito | Founder, DITO RISE</span>
      </div>

      {/* Main Grid: Calculator + Support */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        
        {/* CARD 1: Calculator */}
        <div className="bg-[#132238] border-t-4 border-[#D4A017] border-x border-b border-[#1e3a5f] rounded-xl p-6 shadow-xl">
          <h2 className="text-[#F5C518] text-2xl font-bold pb-2 border-b border-[#1e3a5f] mb-4">
            Web Development Calculator
          </h2>
          <p className="text-gray-300 text-sm mb-4">Calculate an instant quote for your digital project.</p>

          <label className="block text-gray-300 font-semibold mb-1">Number of Pages:</label>
          <input 
            type="number" 
            min="1" 
            value={pages} 
            onChange={(e) => setPages(Math.max(1, Number(e.target.value)))}
            className="w-full bg-[#0A1628] border border-[#1e3a5f] text-white p-3 rounded-md mb-4 focus:outline-none focus:border-[#D4A017]"
          />

          <label className="block text-gray-300 font-semibold mb-1">Project Type:</label>
          <select 
            value={pricePerPage} 
            onChange={(e) => setPricePerPage(Number(e.target.value))}
            className="w-full bg-[#0A1628] border border-[#1e3a5f] text-white p-3 rounded-md mb-6 focus:outline-none focus:border-[#D4A017]"
          >
            <option value={500}>Basic Landing Page (500 GHS/page)</option>
            <option value={800}>Standard Business Website (800 GHS/page)</option>
            <option value={1200}>E-Commerce Store & Systems (1200 GHS/page)</option>
          </select>

          <div className="bg-[#0A1628] border-l-4 border-[#E87722] p-4 rounded text-center mb-6">
            <span className="text-gray-300 text-sm">Total Project Estimate:</span>
            <div className="text-[#F5C518] text-3xl font-bold my-1">{totalEstimate} GHS</div>
            <div className="text-[#E87722] font-semibold text-md">50% Deposit to Start: {deposit} GHS</div>
          </div>

          <button 
            onClick={handleWhatsAppQuote}
            className="w-full bg-[#25D366] hover:bg-[#1eb954] text-white font-bold py-3 px-4 rounded-md transition duration-200"
          >
            Order via WhatsApp
          </button>
        </div>

        {/* CARD 2: Support Movement */}
        <div className="bg-[#132238] border-t-4 border-[#D4A017] border-x border-b border-[#1e3a5f] rounded-xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <h2 className="text-[#F5C518] text-2xl font-bold pb-2 border-b border-[#1e3a5f] mb-4">
              Support the Movement
            </h2>
            <p className="text-gray-300 text-sm mb-6">
              Help fund book distributions in schools, youth education programs, and domain expansion for DITO RISE.
            </p>

            <div className="bg-[#0A1628] border border-[#1e3a5f] p-4 rounded-lg mb-6">
              <h3 className="text-[#F5C518] font-bold text-lg mb-2">MTN Mobile Money (MoMo)</h3>
              <p className="text-gray-200 text-sm"><strong>Number:</strong> Update Your MoMo No.</p>
              <p className="text-gray-200 text-sm"><strong>Name:</strong> DITO RISE Foundation</p>
              <p className="text-[#E87722] text-xs font-semibold mt-2">Reference: Support Dito Rise</p>
            </div>
          </div>

          <button 
            onClick={handleDirectWhatsApp}
            className="w-full bg-[#E87722] hover:bg-[#d06515] text-white font-bold py-3 px-4 rounded-md transition duration-200"
          >
            💬 Send Direct Message on WhatsApp
          </button>
        </div>

      </div>

    </main>
  );
}