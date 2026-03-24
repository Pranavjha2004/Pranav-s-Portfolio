import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ContactForm.css';

// --- SUCCESS MODAL COMPONENT ---
const SuccessModal = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#020617]/80 backdrop-blur-sm"
        />
        
        {/* Modal Content */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          className="relative bg-[#0f172a] border border-cyan-500/30 p-8 rounded-3xl shadow-[0_0_50px_rgba(51,204,255,0.2)] max-w-sm w-full text-center"
        >
          <div className="w-20 h-20 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyan-500/20">
            <span className="text-4xl">🚀</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Transmission Sent!</h3>
          <p className="text-slate-400 mb-8">
            Your message has been uploaded to the uplink. I'll get back to you shortly.
          </p>
          <button 
            onClick={onClose}
            className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl transition-all active:scale-95"
          >
            Acknowledge
          </button>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

function ContactForm() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.target);
    formData.append("access_key", "372f0c13-0728-472a-a8d0-a88fcb409a1a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setShowModal(true); // Open success modal
        event.target.reset();
      } else {
        setResult("❌ Transmission failed. Check your connection.");
      }
    } catch (error) {
      setResult("❌ Uplink error.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact'>
      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />

      <div className='max-w-4xl mx-auto w-full'>
        <header className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-6">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-400 text-lg font-medium max-w-xl mx-auto">
            Have a project in mind? Let's build something extraordinary together.
          </p>
        </header>

        <div className='contact-glass-card relative'>
          {/* Refined Animated Corner Accent */}
          <div className="corner-accent">
            <div className="corner-line"></div>
          </div>

          <form className='grid grid-cols-1 md:grid-cols-2 gap-8' onSubmit={onSubmit}>
            <div className="input-group">
              <input className='contact-input' type="text" name="name" placeholder='Name' required />
              <span className="input-line"></span>
            </div>

            <div className="input-group">
              <input className='contact-input' type="email" name="email" placeholder='Email' required />
              <span className="input-line"></span>
            </div>

            <div className="input-group md:col-span-2">
              <textarea 
                className='contact-input min-h-[200px] py-6' /* Increased min-height of textarea */
                placeholder='How can I help you?' name="message" required
              ></textarea>
              <span className="input-line"></span>
            </div>

            <div className="md:col-span-2 flex flex-col items-center gap-6 pt-4">
              <button 
                className={`contact-submit-btn max-w-md ${isSubmitting ? 'loading' : ''}`}
                type="submit"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Sending...' : 'Submit'}</span>
              </button>
              {result && <span className="text-sm text-purple-400 animate-pulse">{result}</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;