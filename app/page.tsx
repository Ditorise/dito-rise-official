'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Modals from '../components/Modals';

export default function Home() {
  const [modalType, setModalType] = useState<string | null>(null);

  const PHONE_NUMBER = "233245681145";

  const handleWhatsAppClick = () => {
    const message = "Hello Dito! I visited the DITO RISE platform and would like to connect / support the movement.";
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const booksList = [
    {
      title: "We Are One",
      subtitle: "Mindset & Purpose Transformation",
      badge: "Featured Release",
      desc: "Discover the power of unity, self-awareness, and shared vision to align daily habits with true purpose.",
      img: "/book-we-are-one.png"
    },
    {
      title: "Born Rich Built Empty",
      subtitle: "Internal Wealth & Fulfillment",
      badge: "Self-Mastery",
      desc: "Unpacking the gap between external capacity and internal fulfillment to build a lasting foundation.",
      img: "/book-born-rich-built-empty.png"
    },
    {
      title: "Built for Billions",
      subtitle: "Scaling Vision & Influence",
      badge: "Entrepreneurship",
      desc: "Architecting sustainable ventures, high-impact strategies, and generational value creation.",
      img: "/book-built-for-billions.png"
    },
    {
      title: "Fix Your Mind",
      subtitle: "Mental Clarity & Discipline",
      badge: "Mindset Reset",
      desc: "Break free from mental limits, self-sabotage, and unfocused habits to take charge of your life.",
      img: "/book-fix-your-mind.png"
    },
    {
      title: "The Intentional Mind",
      subtitle: "21-Day Mind Reset",
      badge: "Personal Growth",
      desc: "How to think, decide, and live with clarity. Practical wisdom and daily action points.",
      img: "/book-the-intentional-mind.png"
    },
    {
      title: "The Last Woman",
      subtitle: "Strength, Purpose & Legacy",
      badge: "Empowerment",
      desc: "An inspiring publication on resilience, leadership, and standing strong against all odds.",
      img: "/book-the-last-woman.png"
    },
    {
      title: "The Original Faith",
      subtitle: "Roots, Conviction & Identity",
      badge: "Spiritual Growth",
      desc: "Returning to fundamental principles, unshakeable faith, and authentic personal vision.",
      img: "/book-the-original-faith.png"
    },
    {
      title: "Wrong Stage",
      subtitle: "Alignment & Purpose",
      badge: "Life Guidance",
      desc: "Recognizing when you are performing in the wrong environment and redirecting your energy.",
      img: "/book-wrong-stage.png"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A1628] text-white flex flex-col justify-between font-sans">
      
      {/* 1. Navbar */}
      <Navbar 
        onOpenAmbassadorModal={() => setModalType('ambassador')}
        onOpenBookModal={() => setModalType('book')}
      />

      {/* 2. Main Content */}
      <main className="flex-grow">
        
        {/* Hero Section */}
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
            <button 
              onClick={handleWhatsAppClick}
              className="border border-[#D4A017] text-[#D4A017] hover:bg-[#D4A017] hover:text-[#0A1628] font-bold px-8 py-3 rounded-md transition"
            >
              Connect With Us
            </button>
          </div>
        </section>

        {/* Founder Quote */}
        <section className="px-6 my-6">
          <div className="max-w-4xl mx-auto bg-[#0A1628] border-2 border-[#D4A017] p-8 rounded-lg text-center shadow-2xl">
            <p className="text-[#F5C518] text-2xl italic font-semibold">
              &ldquo;We are here to make the world a better place one mind at a time.&rdquo;
            </p>
            <span className="text-gray-400 text-sm block mt-3">— Dito | Founder, DITO RISE</span>
          </div>
        </section>

        {/* Video Feature Section */}
        <section className="px-6 py-12 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#F5C518] mb-4">Watch Our Movement in Action</h2>
          <p className="text-gray-300 text-sm mb-6 max-w-2xl mx-auto">
            See how the DITO RISE mindset and values are transforming communities and inspiring leaders.
          </p>
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4A017] shadow-2xl bg-black max-w-3xl mx-auto">
            <video 
              controls 
              className="w-full h-auto rounded-lg"
              poster="/book-we-are-one.png"
            >
              <source src="/we-are-one.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* Full 8 Books Showcase Section */}
        <section id="books" className="px-6 py-16 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5C518]">The DITO RISE Publication Series</h2>
            <p className="text-gray-400 mt-2">Books designed to transform minds, build brands, and empower individuals. Exclusively available on Selar.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {booksList.map((book, idx) => (
              <div key={idx} className="bg-[#132238] border border-[#1e3a5f] hover:border-[#D4A017] p-5 rounded-xl flex flex-col justify-between transition shadow-lg">
                <div>
                  <div className="w-full h-56 bg-[#0A1628] rounded-lg overflow-hidden mb-4 flex items-center justify-center border border-[#1e3a5f] p-2">
                    <img 
                      src={book.img} 
                      alt={book.title}
                      className="h-full object-contain rounded"
                    />
                  </div>
                  <span className="text-[#E87722] text-xs font-bold uppercase block mb-1">{book.badge}</span>
                  <h3 className="text-lg font-bold text-white mb-1">{book.title}</h3>
                  <p className="text-[#F5C518] text-xs font-semibold mb-2">{book.subtitle}</p>
                  <p className="text-gray-300 text-xs mb-4 leading-relaxed">{book.desc}</p>
                </div>
                <div>
                  <a 
                    href="https://selar.co" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-center bg-[#D4A017] hover:bg-[#F5C518] text-[#0A1628] font-bold text-xs py-2.5 px-3 rounded transition"
                  >
                    Buy on Selar.co →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Support & MoMo Section */}
        <section id="support" className="px-6 py-16 bg-[#060e1a]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#F5C518] mb-4">Support the DITO RISE Movement</h2>
            <p className="text-gray-300 text-sm max-w-2xl mx-auto mb-8">
              Help fund book distributions in schools, youth education programs, and community growth. Send any amount directly via Mobile Money.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
              <div className="bg-[#132238] border border-[#1e3a5f] p-6 rounded-xl shadow-lg flex flex-col justify-between">
                <div>
                  <h3 className="text-[#F5C518] font-bold text-lg mb-3">MTN Mobile Money (MoMo)</h3>
                  <p className="text-gray-200 text-sm mb-1"><strong>Number:</strong> 0536099813</p>
                  <p className="text-gray-200 text-sm mb-1"><strong>Name:</strong> Stephen Appiah</p>
                  <p className="text-[#E87722] text-xs font-semibold mt-3">Reference: Support Dito Rise</p>
                </div>
              </div>

              <div className="bg-[#132238] border border-[#1e3a5f] p-6 rounded-xl shadow-lg flex flex-col justify-between">
                <div>
                  <h3 className="text-[#F5C518] font-bold text-lg mb-2">Direct Contact</h3>
                  <p className="text-gray-300 text-sm mb-4">Reach out to us directly on WhatsApp to collaborate or confirm a transfer.</p>
                </div>
                <button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-[#25D366] hover:bg-[#1eb954] text-white font-bold py-3 px-4 rounded-md transition duration-200 text-center"
                >
                  💬 Chat on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Modals 
        isOpen={Boolean(modalType)} 
        modalType={modalType} 
        onClose={() => setModalType(null)} 
      />

      {/* 3. Footer */}
      <Footer />

    </div>
  );
}