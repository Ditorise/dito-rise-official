'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  const PHONE_NUMBER = "233245681145"; 

  const handleWhatsAppClick = () => {
    const message = "Hello Dito! I visited the DITO RISE platform and would like to connect / support the movement.";
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0A1628] text-white flex flex-col justify-between font-sans">
      
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
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

        {/* Books & Publications Section */}
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

        {/* Support & Contact Section */}
        <section id="support" className="px-6 py-16 bg-[#060e1a]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#F5C518] mb-4">Support the DITO RISE Movement</h2>
            <p className="text-gray-300 text-sm max-w-2xl mx-auto mb-8">
              Help fund book distributions in schools, youth education programs, and community growth for the DITO RISE movement.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
              {/* MoMo Info */}
              <div className="bg-[#132238] border border-[#1e3a5f] p-6 rounded-xl shadow-lg">
                <h3 className="text-[#F5C518] font-bold text-lg mb-3">MTN Mobile Money (MoMo)</h3>
                <p className="text-gray-200 text-sm mb-1"><strong>Number:</strong> 0536099813</p>
                <p className="text-gray-200 text-sm mb-1"><strong>Name:</strong> Stephen Appiah</p>
                <p className="text-[#E87722] text-xs font-semibold mt-3">Reference: Support Dito Rise</p>
              </div>

              {/* Direct WhatsApp Contact */}
              <div className="bg-[#132238] border border-[#1e3a5f] p-6 rounded-xl shadow-lg flex flex-col justify-between">
                <div>
                  <h3 className="text-[#F5C518] font-bold text-lg mb-2">Direct Contact</h3>
                  <p className="text-gray-300 text-sm mb-4">Reach out to us directly on WhatsApp to collaborate or contribute.</p>
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

      {/* Footer Component */}
      <Footer />

    </div>
  );
}