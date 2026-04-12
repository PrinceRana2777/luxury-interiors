import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const FloatingActions = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918850020664"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-luxury-black text-luxury-gold rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 group relative border border-luxury-gold/20"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-luxury-black text-luxury-gold px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-2xl border border-luxury-gold/20 pointer-events-none">
          WhatsApp Us
        </span>
      </a>

      {/* Call Button */}
      <a
        href="tel:8850020664"
        className="w-14 h-14 bg-luxury-gold text-luxury-black rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-500 group relative"
      >
        <Phone size={26} />
        <span className="absolute right-full mr-4 bg-luxury-black text-luxury-gold px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-2xl border border-luxury-gold/20 pointer-events-none">
          Call Now
        </span>
      </a>
    </div>
  );
};

export default FloatingActions;
