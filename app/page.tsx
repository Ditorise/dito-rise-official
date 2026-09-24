'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  const [pages, setPages] = useState<number>(1);
  const [pricePerPage, setPricePerPage] = useState<number>(800);

  const totalEstimate = pages * pricePerPage;
  const deposit = totalEstimate * 0.5;

  // DITO RISE Official Contact Number
  const PHONE_NUMBER = "233245681145"; 

  const handleWhatsAppQuote = () => {
    const message = `Hello DITO RISE! I would like to order a web development project with ${pages} pages.\n\nTotal Estimate: ${totalEstimate} GHS\n50% Deposit to Start: ${deposit} GHS`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleDirectWhatsApp = () => {
    const message = "Hello Dito! I visited the DITO RISE platform and want to connect / support the movement.";
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0A1628] text-white flex flex-col justify-between font-sans">
      
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <section className="px-6 py-16 text-center max-w-5xl mx-auto">
        <span className="text-[#D4A017] tracking-widest text-xs font-bold uppercase block mb-3">
          Global Foundation & Empowerment
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          We are here to make the world a better place <span className="text-[#F5C518]">one mind at a time.</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Equipping visionary entrepreneurs, students, and dreamers with the knowledge, tools, and mindset to think deeply, grow consistently, and live purposefully.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#books" className="bg-[#D4A017] hover:bg-[#F5C518] text-[#0A1628] font-bold px-8 py-3 rounded-md transition">
            Explore Book Library
          </a>
          <a href="#services" className="border border-[#D4A017] text-[#D4A017] hover:bg-[#D4A017] hover:text-[#0A1628] font-bold px-8 py-3 rounded-md transition">
            Web Services & Calculator
          </a>
        </div>
      </section>

      {/* 3. Grand Quote Box */}
      <section className="px-6 my-6">
        <div className="max-w-4xl mx-auto bg-[#0A1628] border-2 border-[#D4A017] p-8 rounded-lg text-center shadow-2xl">
          <p className="text-[#F5C518] text-2xl italic font-semibold">
            &ldquo;We are here to make the world a better place one mind at a time.&rdquo;
          </p>
          <span className="text-gray-400 text-sm block mt-3">— Dito | Founder, DITO RISE</span>
        </div>
      </section>

      {/* 4. DITO RISE Books & Publications Showcase */}
      <section id="books" className="px-6 py-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#F5C518]">The DITO RISE Publication Series</h2>
          <p className="text-gray-400 mt-2">Books designed to transform minds, build brands, and empower students.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Series 1 */}
          <div className="bg-[#132238] border-t-4 border-[#D4A017] p-6 rounded-xl border-x border-b border-[#1e3a5f]">
            <span className="text-[#E87722] text-xs font-bold uppercase">Series 1</span>
            <h3 className="text-xl font-bold text-white mt-1 mb-3">Digital Marketing Series</h3>
            <p className="text-gray-300 text-sm mb-4">4-Book Series covering Social Media Mastery, Selling Online, and Brand Building for African Entrepreneurs.</p>
            <span className="inline-block bg-[#0A1628] text-[#F5C518] text-xs px-3 py-1 rounded border border-[#1e3a5f]">Available on Selar.co</span>
          </div>

          {/* Series 2 */}
          <div className="bg-[#132238] border-t-4 border-[#F5C518] p-6 rounded-xl border-x border-b border-[#1e3a5f]">
            <span className="text-[#E87722] text-xs font-bold uppercase">Series 2 • Standalone</span>
            <h3 className="text-xl font-bold text-white mt-1 mb-3">The Intentional Mind</h3>
            <p className="text-gray-300 text-sm mb-4">How to Think, Decide & Live With Purpose. Includes truth bombs, reflections, and the 21-Day Mind Reset.</p>
            <span className="inline-block bg-[#0A1628] text-[#F5C518] text-xs px-3 py-1 rounded border border-[#1e3a5f]">Amazon KDP & Selar</span>
          </div>

          {/* Series 3 */}
          <div className="bg-[#132238] border-t-4 border-[#E87722] p-6 rounded-xl border-x border-b border-[#1e3a5f]">
            <span className="text-[#E87722] text-xs font-bold uppercase">Series 3</span>
            <h3 className="text-xl font-bold text-white mt-1 mb-3">Student Success Series</h3>
            <p className="text-gray-300 text-sm mb-4">Curriculum tools and life guidance for students aged 12-21, schools, and educational institutions.</p>
            <span className="inline-block bg-[#0A1628] text-[#F5C518] text-xs px-3 py-1 rounded border border-[#1e3a5f]">School Programmes</span>
          </div>

        </div>
      </section>

      {/* 5. Services & Support Section (Calculator + MoMo) */}
      <section id="services" className="px-6 py-16 bg-[#060e1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#F5C518]">Web Services & Support</h2>
            <p className="text-gray-400 mt-2">Get high-converting web tools or support the DITO RISE educational mission.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Interactive Calculator */}
            <div className="bg-[#132238] border-t-4 border-[#D4A017] border-x border-b border-[#1e3a5f] rounded-xl p-6 shadow-xl">
              <h3 className="text-[#F5C518] text-2xl font-bold pb-2 border-b border-[#1e3a5f] mb-4">
                Web Development Cost Estimator
              </h3>
              <p className="text-gray-300 text-sm mb-4">Calculate instant quotes for professional business websites.</p>

              <label className="block text-gray-300 font-semibold mb-1 text-sm">Number of Pages:</label>
              <input 
                type="number" 
                min="1" 
                value={pages} 
                onChange={(e) => setPages(Math.max(1, Number(e.target.value)))}
                className="w-full bg-[#0A1628] border border-[#1e3a5f] text-white p-3 rounded-md mb-4 focus:outline-none focus:border-[#D4A017]"
              />

              <label className="block text-gray-300 font-semibold mb-1 text-sm">Project Type:</label>
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
                <span className="text-gray-400 text-xs">Total Project Estimate:</span>
                <div className="text-[#F5C518] text-3xl font-bold my-1">{totalEstimate} GHS</div>
                <div className="text-[#E87722] font-semibold text-sm">50% Deposit to Start: {deposit} GHS</div>
              </div>

              <button 
                onClick={handleWhatsAppQuote}
                className="w-full bg-[#25D366] hover:bg-[#1eb954] text-white font-bold py-3 px-4 rounded-md transition duration-200"
              >
                Order Quote via WhatsApp
              </button>
            </div>

            {/* Support Movement & MoMo */}
            <div className="bg-[#132238] border-t-4 border-[#D4A017] border-x border-b border-[#1e3a5f] rounded-xl p-6 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-[#F5C518] text-2xl font-bold pb-2 border-b border-[#1e3a5f] mb-4">
                  Support the Movement
                </h3>
                <p className="text-gray-300 text-sm mb-6">
                  Help fund book distributions in schools, youth education programs, and custom domain expansion for the DITO RISE movement.
                </p>

                <div className="bg-[#0A1628] border border-[#1e3a5f] p-5 rounded-lg mb-6">
                  <h4 className="text-[#F5C518] font-bold text-lg mb-2">MTN Mobile Money (MoMo)</h4>
                  <p className="text-gray-200 text-sm"><strong>Number:</strong> 0536099813</p>
                  <p className="text-gray-200 text-sm"><strong>Name:</strong> Stephen Appiah</p>
                  <p className="text-[#E87722] text-xs font-semibold mt-2">Reference: Support Dito Rise</p>
                </div>
              </div>

              <button 
                onClick={handleDirectWhatsApp}
                className="w-full bg-[#E87722] hover:bg-[#d06515] text-white font-bold py-3 px-4 rounded-md transition duration-200"
              >
                💬 Direct WhatsApp Contact
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Global Footer */}
      <Footer />

    </div>
  );
}