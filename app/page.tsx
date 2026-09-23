'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Modals from '../components/Modals';
import Footer from '../components/Footer';

export default function Home() {
  const [isAmbassadorOpen, setIsAmbassadorOpen] = useState(false);
  const [isBookOpen, setIsBookOpen] = useState(false);

  const books = [
    {
      title: "Wrong Stage",
      subtitle: "Navigating identity, position, and growth when you feel out of place.",
      image: "/book-wrong-stage.png",
      tag: "Mindset & Growth",
      price: "Available"
    },
    {
      title: "The Intentional Mind",
      subtitle: "How to Think, Decide & Live with Purpose",
      image: "/book-the-intentional-mind.png",
      tag: "Mindset Mastery",
      price: "Available"
    },
    {
      title: "Fix Your Mind, Change Your Life Forever",
      subtitle: "The DITO RISE Advanced System for Total Mental Transformation",
      image: "/book-fix-your-mind.png",
      tag: "Advanced System",
      price: "Available"
    },
    {
      title: "Born Rich, Built Empty?",
      subtitle: "The Truth Nobody Tells the Child Who Has Everything",
      image: "/book-born-rich-built-empty.png",
      tag: "Wealth & Legacy Series",
      price: "Available"
    },
    {
      title: "WE ARE ONE",
      subtitle: "From Valco Flat to Five Children. From Darkness to Purpose (A Memoir)",
      image: "/book-we-are-one.png",
      tag: "Memoir & Purpose",
      price: "Available"
    },
    {
      title: "Built for Billions",
      subtitle: "How to rewire your identity, architect your income, and build generational wealth",
      image: "/book-built-for-billions.png",
      tag: "Wealth Code",
      price: "Available"
    },
    {
      title: "The Last Woman",
      subtitle: "How to Stop Chasing and Start Building",
      image: "/book-the-last-woman.png",
      tag: "Personal Growth",
      price: "Available"
    },
    {
      title: "The Original Faith",
      subtitle: "What Every Believer Was Meant to Know Before Religion Got in the Way",
      image: "/book-the-original-faith.png",
      tag: "Spiritual Intelligence",
      price: "Available"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-amber-500 selection:text-black">
      <Navbar
        onOpenAmbassadorModal={() => setIsAmbassadorOpen(true)}
        onOpenBookModal={() => setIsBookOpen(true)}
      />

      {/* Hero Section */}
      <section className="pt-36 pb-16 px-6 max-w-6xl mx-auto text-center flex flex-col items-center justify-center min-h-[80vh]">
        <span className="text-amber-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-4 px-4 py-1.5 border border-amber-500/30 rounded-full bg-amber-500/10">
          Fix Your Mind, Change Your World
        </span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-gradient-to-r from-white via-zinc-200 to-amber-400 bg-clip-text text-transparent">
          Waking Up Minds.<br />Transforming Africa.
        </h1>
        <p className="text-gray-400 text-base md:text-xl max-w-2xl mb-10 leading-relaxed">
          DITO RISE is a mindset transformation movement equipping youth across schools, academies, and communities with leadership, character, and vision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setIsAmbassadorOpen(true)}
            className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm tracking-wider uppercase rounded-lg transition transform hover:-translate-y-0.5"
          >
            Become an Ambassador
          </button>
          <button
            onClick={() => setIsBookOpen(true)}
            className="px-8 py-4 border border-zinc-700 hover:border-amber-500 text-white font-semibold text-sm tracking-wider uppercase rounded-lg transition"
          >
            Request Curriculum Books
          </button>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center border-t border-zinc-900">
        <span className="text-amber-400 font-mono text-xs uppercase tracking-widest block mb-2">Featured Video</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">WE ARE ONE</h2>
        <p className="text-gray-400 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
          Before the labels, status, and differences—we are human. Watch our movement's message on unity, mindset shift, and purpose.
        </p>
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-zinc-950 flex items-center justify-center">
          <video
            controls
            playsInline
            preload="metadata"
            className="w-full h-full object-contain"
          >
            <source src="/we-are-one.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Books Showcase */}
      <section id="books" className="py-20 px-6 max-w-6xl mx-auto border-t border-zinc-900">
        <div className="text-center mb-16">
          <span className="text-amber-400 font-mono text-xs uppercase tracking-widest block mb-2">DITO RISE Library</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Published Books & Curriculums</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Transformational literature designed to rewire identity, build wealth, and ignite purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book, idx) => (
            <div 
              key={idx} 
              className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 flex flex-col justify-between hover:border-amber-500/50 transition group"
            >
              <div>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl mb-4 bg-zinc-950 flex items-center justify-center">
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="w-full h-full object-contain group-hover:scale-105 transition duration-300"
                  />
                </div>
                <span className="text-amber-400 font-mono text-[10px] uppercase tracking-wider block mb-1">
                  {book.tag}
                </span>
                <h3 className="text-lg font-bold text-white mb-1 leading-snug">{book.title}</h3>
                <p className="text-gray-400 text-xs mb-4 leading-relaxed line-clamp-3">
                  {book.subtitle}
                </p>
              </div>

              <div>
                <div className="text-xs font-semibold text-amber-400 mb-3">{book.price}</div>
                <a
                  href="https://selar.co/m/Weareone2560"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full block text-center py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded-lg transition"
                >
                  Buy / Download on Selar
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto border-t border-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-amber-400 mb-4">About The Movement</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We believe lasting social and economic change across Africa begins with individual mindsets. DITO RISE builds structured frameworks that help young people discover purpose, overcome limiting beliefs, and take ownership of their futures.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              From high school workshops to university empowerment hubs, our vision is to raise self-aware, ethical, and high-impact leaders.
            </p>
          </div>
          <div className="bg-zinc-900 border border-amber-500/20 p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision & Mission</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-amber-400 font-bold">&#10003;</span>
                <span><strong>Wake Up Minds:</strong> Break mental barriers that hinder youth potential.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 font-bold">&#10003;</span>
                <span><strong>Empower Leaders:</strong> Provide tools, literature, and mentorship in schools.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 font-bold">&#10003;</span>
                <span><strong>Unify Communities:</strong> Cultivate collective strength through value-driven action.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section id="pillars" className="py-20 px-6 max-w-6xl mx-auto border-t border-zinc-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-amber-400 mb-2">Our Core Pillars</h2>
          <p className="text-gray-400 text-sm">Four focused avenues driving real societal transformation</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-xl hover:border-amber-500/50 transition">
            <span className="text-amber-400 font-mono text-xs uppercase">Pillar 01</span>
            <h3 className="text-xl font-bold text-white mt-2 mb-3">WE ARE ONE</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Unity and identity development programs teaching leadership, accountability, and community service.</p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-xl hover:border-amber-500/50 transition">
            <span className="text-amber-400 font-mono text-xs uppercase">Pillar 02</span>
            <h3 className="text-xl font-bold text-white mt-2 mb-3">Schools & Academy</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Interactive leadership bootcamps and workshops delivered directly to high schools and tertiary institutions.</p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-xl hover:border-amber-500/50 transition">
            <span className="text-amber-400 font-mono text-xs uppercase">Pillar 03</span>
            <h3 className="text-xl font-bold text-white mt-2 mb-3">Women's Club</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Dedicated mentorship hubs focused on building confidence, skillsets, and influence for young female leaders.</p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-xl hover:border-amber-500/50 transition">
            <span className="text-amber-400 font-mono text-xs uppercase">Pillar 04</span>
            <h3 className="text-xl font-bold text-white mt-2 mb-3">DITO Books</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Publishing and distributing transformative mind-shift literature to students, libraries, and clubs.</p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 px-6 max-w-6xl mx-auto border-t border-zinc-900 text-center">
        <h2 className="text-3xl font-extrabold text-amber-400 mb-12">Our Target Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <span className="text-4xl font-black text-white">10,000+</span>
            <p className="text-gray-400 text-xs uppercase tracking-wider mt-2">Youth Mindsets Shifted</p>
          </div>
          <div>
            <span className="text-4xl font-black text-amber-400">50+</span>
            <p className="text-gray-400 text-xs uppercase tracking-wider mt-2">Schools Reached</p>
          </div>
          <div>
            <span className="text-4xl font-black text-white">1,000+</span>
            <p className="text-gray-400 text-xs uppercase tracking-wider mt-2">Books Distributed</p>
          </div>
          <div>
            <span className="text-4xl font-black text-amber-400">100%</span>
            <p className="text-gray-400 text-xs uppercase tracking-wider mt-2">Free Access Commitment</p>
          </div>
        </div>
      </section>

      <Footer />

      <Modals
        isAmbassadorOpen={isAmbassadorOpen}
        isBookOpen={isBookOpen}
        onCloseAmbassador={() => setIsAmbassadorOpen(false)}
        onCloseBook={() => setIsBookOpen(false)}
      />
    </main>
  );
}