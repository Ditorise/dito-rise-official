'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookInquiryModal from '@/components/Modals';
import { SITE_CONFIG, Book, Pillar, Initiative } from './config/site';

export default function HomePage() {
  const [selectedBookForInquiry, setSelectedBookForInquiry] = useState<string | null>(null);
  const [isAmbassadorModalOpen, setIsAmbassadorModalOpen] = useState(false);

  const handleBookPurchase = (book: Book) => {
    if (book.purchaseStatus === 'AVAILABLE' && book.selarUrl) {
      window.open(book.selarUrl, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedBookForInquiry(book.title);
    }
  };

  const whatsappDirectUrl = `https://wa.me/${SITE_CONFIG.contact.phone}?text=${encodeURIComponent(
    SITE_CONFIG.contact.whatsappWelcomeMessage
  )}`;

  return (
    <div className="min-h-screen bg-[#0A1628] text-white flex flex-col font-sans">
      <Navbar
        onOpenAmbassadorModal={() => setIsAmbassadorModalOpen(true)}
        onOpenBookModal={() => setSelectedBookForInquiry('General Inquiry')}
      />

      <main className="flex-grow pt-28 sm:pt-32">
        {/* SECTION A — HERO */}
        <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20 border-b border-[#132238]">
          <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center space-x-2 bg-[#132238] border border-[#D4A017]/30 rounded-full px-3.5 py-1 text-[11px] sm:text-xs font-semibold text-[#D4A017] tracking-wider uppercase">
              <span>{SITE_CONFIG.brandLabel}</span>
            </div>

            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight leading-snug sm:leading-tight max-w-4xl mx-auto">
              {SITE_CONFIG.hero.heading}
            </h1>

            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed px-2">
              {SITE_CONFIG.hero.subheading}
            </p>

            <div className="pt-2">
              <p className="text-xs sm:text-sm font-bold tracking-widest text-[#D4A017] uppercase font-serif px-2">
                {SITE_CONFIG.tagline} — {SITE_CONFIG.philosophy}
              </p>
            </div>

            {/* Movement CTA Hierarchy */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 px-4">
              <a
                href={SITE_CONFIG.hero.primaryCtaLink}
                className="w-full sm:w-auto bg-[#D4A017] text-[#0A1628] hover:bg-[#b88a14] px-8 py-3.5 rounded-md text-sm sm:text-base font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white text-center shadow-lg"
              >
                {SITE_CONFIG.hero.primaryCtaText}
              </a>
              <a
                href={SITE_CONFIG.hero.secondaryCtaLink}
                className="w-full sm:w-auto bg-[#132238] hover:bg-[#1c3252] border border-gray-700 text-white px-8 py-3.5 rounded-md text-sm sm:text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] text-center"
              >
                {SITE_CONFIG.hero.secondaryCtaText}
              </a>
            </div>
          </div>
        </section>

        {/* SECTION B — ABOUT / WHY DITO RISE EXISTS */}
        <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#132238] bg-[#070F1C] scroll-mt-24">
          <div className="max-w-5xl mx-auto space-y-10 sm:space-y-12">
            <div className="text-center space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#D4A017]">
                {SITE_CONFIG.founderStory.subtitle}
              </h2>
              <p className="text-2xl sm:text-4xl font-bold font-serif text-white">
                {SITE_CONFIG.founderStory.title}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
              <div className="bg-[#132238] border border-gray-800 p-6 sm:p-8 rounded-lg flex flex-col justify-between space-y-4 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold font-serif text-[#D4A017]">
                    Foundational Purpose
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {SITE_CONFIG.founderStory.foundationalReason}
                  </p>
                </div>
              </div>

              <div className="bg-[#132238] border border-gray-800 p-6 sm:p-8 rounded-lg flex flex-col justify-between space-y-4 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold font-serif text-[#D4A017]">
                    Future Horizon
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {SITE_CONFIG.founderStory.futureVision}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION C — THE SEVEN PILLARS */}
        <section id="pillars" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#132238] scroll-mt-24">
          <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#D4A017]">
                Educational Framework
              </h2>
              <p className="text-2xl sm:text-4xl font-bold font-serif text-white">
                The Seven Movement Pillars
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                Our approach to holistic human development across seven fundamental pillars.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {SITE_CONFIG.pillars.map((pillar: Pillar, index: number) => (
                <div
                  key={pillar.id}
                  className="bg-[#132238] border border-gray-800 p-5 sm:p-6 rounded-lg space-y-3 hover:border-[#D4A017]/40 transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-serif text-[#D4A017]">
                        0{index + 1}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
                        Pillar
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-serif">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION D — DITO RISE ACADEMY */}
        <section id="academy" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#132238] bg-[#070F1C] scroll-mt-24">
          <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="bg-[#132238] border border-[#D4A017]/30 text-[#D4A017] text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                {SITE_CONFIG.academy.badge}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white pt-2">
                {SITE_CONFIG.academy.title}
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed px-2">
                {SITE_CONFIG.academy.identityStatement}
              </p>
            </div>

            <div className="bg-[#132238] border border-gray-800 rounded-lg p-6 sm:p-8 space-y-6">
              <div className="border-b border-gray-800 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4A017]">
                  Active Focus Area
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-serif text-white mt-1">
                  {SITE_CONFIG.academy.currentFocusTitle}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                  {SITE_CONFIG.academy.currentFocusDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {SITE_CONFIG.academy.currentHighlights.map((highlight: string, i: number) => (
                  <div key={i} className="flex items-start space-x-3 bg-[#0A1628] p-3.5 rounded border border-gray-800">
                    <span className="text-[#D4A017] font-bold text-sm">✓</span>
                    <span className="text-xs sm:text-sm text-gray-200">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-800 text-[11px] sm:text-xs text-gray-400 italic">
                {SITE_CONFIG.academy.inDevelopmentNote}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION E — PUBLICATIONS */}
        <section id="books" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#132238] scroll-mt-24">
          <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#D4A017]">
                Literary Ecosystem
              </h2>
              <p className="text-2xl sm:text-4xl font-bold font-serif text-white">
                DITO RISE Publications
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                Written works advancing the movement’s philosophy and character development.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {SITE_CONFIG.books.map((book: Book) => (
                <div
                  key={book.id}
                  className="bg-[#132238] border border-gray-800/80 rounded-lg p-4 sm:p-5 flex flex-col justify-between space-y-4 hover:border-gray-700 transition-colors"
                >
                  <div className="space-y-3 sm:space-y-4">
                    <div className="relative aspect-[3/4] w-full bg-[#0A1628] rounded overflow-hidden border border-gray-800">
                      <Image
                        src={book.imagePath}
                        alt={`${book.title} cover`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4A017]">
                        {book.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white font-serif leading-snug">
                        {book.title}
                      </h3>
                      <p className="text-xs text-gray-400 italic">
                        {book.subtitle}
                      </p>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
                      {book.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-gray-800/60">
                    <button
                      type="button"
                      onClick={() => handleBookPurchase(book)}
                      className="w-full py-2 px-3 rounded text-xs font-semibold bg-[#0A1628] hover:bg-[#1c3252] text-gray-200 hover:text-white border border-gray-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
                    >
                      {book.purchaseStatus === 'AVAILABLE' && book.selarUrl
                        ? 'Acquire via Selar'
                        : 'Inquire via WhatsApp'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION F — VIDEO */}
        <section id="video" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#132238] bg-[#070F1C] scroll-mt-24">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 text-center">
            <div className="space-y-3 max-w-2xl mx-auto">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#D4A017]">
                Movement Expression
              </h2>
              <p className="text-2xl sm:text-4xl font-bold font-serif text-white">
                WE ARE ONE
              </p>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed px-2">
                “WE ARE ONE” is the foundational truth of our collective responsibility. When one mind is fixed and elevated, the entire generation rises.
              </p>
            </div>

            <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-gray-800 bg-black shadow-2xl">
              <video
                controls
                preload="metadata"
                className="w-full h-full object-cover"
                aria-label="DITO RISE Movement Video - We Are One"
              >
                <source src="/we-are-one.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* SECTION G — FOUNDER KEYNOTE */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#132238]">
          <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
            <span className="text-3xl sm:text-4xl font-serif text-[#D4A017]">“</span>
            <blockquote className="text-xl sm:text-3xl font-serif text-white leading-relaxed font-normal px-2">
              {SITE_CONFIG.founderKeynote.quote}
            </blockquote>
            <div className="pt-2 sm:pt-4">
              <p className="text-sm sm:text-base font-bold text-[#D4A017]">
                {SITE_CONFIG.founderKeynote.author}
              </p>
              <p className="text-xs text-gray-400">
                {SITE_CONFIG.founderKeynote.role}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION H — INITIATIVES */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#132238] bg-[#070F1C]">
          <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#D4A017]">
                Roadmap & Operations
              </h2>
              <p className="text-2xl sm:text-4xl font-bold font-serif text-white">
                Movement Initiatives
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {SITE_CONFIG.initiatives.map((item: Initiative, idx: number) => {
                const statusStyles: Record<string, string> = {
                  CURRENT: 'bg-[#D4A017]/10 text-[#D4A017] border-[#D4A017]/30',
                  IN_DEVELOPMENT: 'bg-gray-800/50 text-gray-300 border-gray-700',
                  LONG_TERM_VISION: 'bg-[#0A1628] text-gray-400 border-gray-800',
                };

                const statusLabels: Record<string, string> = {
                  CURRENT: 'Active Initiative',
                  IN_DEVELOPMENT: 'In Development',
                  LONG_TERM_VISION: 'Long-Term Vision',
                };

                const statusKey = String(item.status);

                return (
                  <div
                    key={idx}
                    className="bg-[#132238] border border-gray-800 p-6 rounded-lg space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <span
                        className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded border uppercase tracking-wider ${
                          statusStyles[statusKey] || statusStyles['IN_DEVELOPMENT']
                        }`}
                      >
                        {statusLabels[statusKey] || 'Initiative'}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold font-serif text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <ul className="space-y-2 pt-4 border-t border-gray-800 text-xs text-gray-400">
                      {item.highlights.map((highlightText: string, highlightIdx: number) => (
                        <li key={highlightIdx} className="flex items-center space-x-2">
                          <span className="text-[#D4A017]">•</span>
                          <span>{highlightText}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION I — SUPPORT & CONNECT */}
        <section id="support" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="max-w-5xl mx-auto space-y-10 sm:space-y-12">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#D4A017]">
                Direct Engagement
              </h2>
              <p className="text-2xl sm:text-4xl font-bold font-serif text-white">
                Support & Connect
              </p>
              <p className="text-gray-300 text-xs sm:text-sm">
                Engage directly with the founder and support educational growth across communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
              <div className="bg-[#132238] border border-gray-800 p-6 sm:p-8 rounded-lg space-y-6 flex flex-col justify-between">
                <div className="space-y-3 sm:space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D4A017]">
                    Direct Channel
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                    Connect on WhatsApp
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    Have questions about publications, academy initiatives, or partnership opportunities? Reach out directly via WhatsApp.
                  </p>
                </div>
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center bg-[#D4A017] text-[#0A1628] hover:bg-[#b88a14] font-bold px-6 py-3 rounded text-xs sm:text-sm transition-colors"
                >
                  Message {SITE_CONFIG.contact.whatsappFormatted}
                </a>
              </div>

              <div className="bg-[#132238] border border-gray-800 p-6 sm:p-8 rounded-lg space-y-6 flex flex-col justify-between">
                <div className="space-y-3 sm:space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D4A017]">
                    Mobile Money Support
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                    Direct Movement Support
                  </h3>
                  <div className="space-y-2 bg-[#0A1628] p-3.5 sm:p-4 rounded border border-gray-800 text-xs sm:text-sm">
                    <p className="text-gray-300">
                      <strong className="text-white">Network:</strong> {SITE_CONFIG.support.momoNetwork}
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Number:</strong> {SITE_CONFIG.support.momoNumber}
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Account Name:</strong> {SITE_CONFIG.support.momoName}
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Reference:</strong> {SITE_CONFIG.support.reference}
                    </p>
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs text-gray-400 italic">
                  {SITE_CONFIG.support.note}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <BookInquiryModal
        isOpen={selectedBookForInquiry !== null || isAmbassadorModalOpen}
        onClose={() => {
          setSelectedBookForInquiry(null);
          setIsAmbassadorModalOpen(false);
        }}
        modalType={isAmbassadorModalOpen ? 'AMBASSADOR' : 'BOOK'}
      />
    </div>
  );
}