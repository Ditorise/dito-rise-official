'use client';

import { useState } from 'react';

// REPLACE THIS WITH YOUR ACTUAL FORMSPREE ENDPOINT URL
const FORMSPREE_URL = "https://formspree.io/f/mbglyrgg";

interface ModalsProps {
  isAmbassadorOpen: boolean;
  isBookOpen: boolean;
  onCloseAmbassador: () => void;
  onCloseBook: () => void;
}

export default function Modals({
  isAmbassadorOpen,
  isBookOpen,
  onCloseAmbassador,
  onCloseBook
}: ModalsProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, formType: string) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('form-type', formType);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => {
          setStatus('idle');
          if (formType === 'Ambassador Application') onCloseAmbassador();
          if (formType === 'Book Request') onCloseBook();
        }, 2000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (!isAmbassadorOpen && !isBookOpen) return null;

  return (
    <>
      {/* Ambassador Modal */}
      {isAmbassadorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-amber-500/30 rounded-2xl max-w-md w-full p-6 relative shadow-2xl">
            <button
              onClick={onCloseAmbassador}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white text-lg font-bold"
            >
              &#215;
            </button>
            <h3 className="text-xl font-bold text-white mb-1">Become an Ambassador</h3>
            <p className="text-zinc-400 text-xs mb-6">
              Join the movement. Lead transformation in your school or community.
            </p>

            {status === 'success' ? (
              <div className="p-4 bg-amber-500/20 border border-amber-500 rounded-lg text-amber-400 text-sm text-center font-bold">
                Application Received! We will reach out shortly.
              </div>
            ) : (
              <form onSubmit={(e) => handleSubmit(e, 'Ambassador Application')} className="space-y-4">
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Kwame Mensah"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Email / Phone</label>
                  <input
                    type="text"
                    name="contact"
                    required
                    placeholder="e.g. +233... or name@email.com"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Location / Institution</label>
                  <input
                    type="text"
                    name="location"
                    required
                    placeholder="e.g. Valco Flat, Ashaiman / UG Legon"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Why do you want to join?</label>
                  <textarea
                    name="reason"
                    rows={3}
                    required
                    placeholder="Tell us briefly about your motivation..."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500 resize-none"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-xs text-center">Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded-lg transition disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Book Request Modal */}
      {isBookOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-amber-500/30 rounded-2xl max-w-md w-full p-6 relative shadow-2xl">
            <button
              onClick={onCloseBook}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white text-lg font-bold"
            >
              &#215;
            </button>
            <h3 className="text-xl font-bold text-white mb-1">Request Curriculum Books</h3>
            <p className="text-zinc-400 text-xs mb-6">
              Request physical or digital copies for your school, club, or community center.
            </p>

            {status === 'success' ? (
              <div className="p-4 bg-amber-500/20 border border-amber-500 rounded-lg text-amber-400 text-sm text-center font-bold">
                Request Sent! We will contact you soon.
              </div>
            ) : (
              <form onSubmit={(e) => handleSubmit(e, 'Book Request')} className="space-y-4">
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Organization / School Name</label>
                  <input
                    type="text"
                    name="organization"
                    required
                    placeholder="e.g. Ashaiman SHS / Community Library"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Contact Person & Phone</label>
                  <input
                    type="text"
                    name="contactPerson"
                    required
                    placeholder="e.g. Mr. John (+233...)"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Which Books / Quantity needed?</label>
                  <textarea
                    name="requestDetails"
                    rows={3}
                    required
                    placeholder="e.g. 20 copies of WE ARE ONE, 15 copies of Wrong Stage..."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500 resize-none"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-xs text-center">Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded-lg transition disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}