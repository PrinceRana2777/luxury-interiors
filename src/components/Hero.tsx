import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden !py-0">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Interior Design"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-luxury-black/50" />
      </div>

      <div className="relative z-10 container-luxury">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <span className="text-luxury-gold uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block">
              Bespoke Craftsmanship
            </span>
            <h1 className="text-7xl md:text-9xl text-white font-serif leading-tight mb-8">
              Luxury <span className="italic text-luxury-gold">Interiors</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl mb-14 font-medium tracking-wide">
              Crafted for modern living
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link
                to="/contact"
                className="bg-luxury-gold text-luxury-black px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white transition-all duration-500 shadow-2xl flex items-center justify-center gap-3 group"
              >
                Get a Quote
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
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
