import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden !py-0">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Interior Design"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-luxury-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-luxury-gold uppercase tracking-[0.5em] text-xs font-bold mb-6 block">
              Excellence in Design
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl text-white font-serif leading-[1.1] mb-10">
              Transform Your Space with <span className="italic text-luxury-gold">Luxury</span> Interiors
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-12 font-medium leading-relaxed max-w-xl">
              Crafting bespoke furniture and breathtaking interiors that reflect your unique style and sophistication.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#contact"
                className="btn-gold flex items-center justify-center gap-3 group"
              >
                Get a Quote
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
              <a
                href="#gallery"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-luxury-black transition-all duration-500 text-center"
              >
                View Gallery
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-[2px] h-16 bg-gradient-to-b from-luxury-gold to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
