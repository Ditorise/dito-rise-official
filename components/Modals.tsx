'use client';

interface ModalsProps {
  isOpen: boolean;
  modalType: string | null;
  onClose: () => void;
}

export default function Modals({ isOpen, modalType, onClose }: ModalsProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-[#132238] border border-[#D4A017] p-6 rounded-xl max-w-md w-full text-white relative">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-lg font-bold"
        >
          ✕
        </button>

        {modalType === 'ambassador' && (
          <div>
            <h3 className="text-xl font-bold text-[#F5C518] mb-3">Become a DITO RISE Ambassador</h3>
            <p className="text-gray-300 text-sm mb-4">
              Join us in spreading knowledge and transforming minds across schools and communities.
            </p>
            <a 
              href="https://wa.me/233245681145?text=Hello%20Dito!%20I%20want%20to%20become%20a%20DITO%20RISE%20Ambassador." 
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#D4A017] text-[#0A1628] font-bold py-2 rounded"
            >
              Apply via WhatsApp
            </a>
          </div>
        )}

        {modalType === 'book' && (
          <div>
            <h3 className="text-xl font-bold text-[#F5C518] mb-3">DITO RISE Library</h3>
            <p className="text-gray-300 text-sm mb-4">
              Explore our transformation publications on Selar and Amazon KDP.
            </p>
            <a 
              href="#books" 
              onClick={onClose}
              className="block text-center bg-[#D4A017] text-[#0A1628] font-bold py-2 rounded"
            >
              Browse Books Below
            </a>
          </div>
        )}
      </div>
    </div>
  );
}