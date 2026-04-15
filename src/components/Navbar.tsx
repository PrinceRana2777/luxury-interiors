import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const MobileMenu = () => {
    if (typeof document === 'undefined') return null;

    return createPortal(
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[10000] bg-[#000000] flex flex-col items-center justify-center md:hidden"
          >
            <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center border-b border-white/10">
              <Link to="/" className="flex flex-col group" onClick={() => setIsOpen(false)}>
                <span className="text-3xl font-serif font-bold tracking-tight text-white">LUXURY</span>
                <span className="text-[10px] tracking-[0.4em] uppercase text-luxury-gold -mt-1 font-bold">Interior</span>
              </Link>
              <button className="p-2 text-white hover:text-luxury-gold transition-colors" onClick={() => setIsOpen(false)}>
                <X size={32} />
              </button>
            </div>
            
            <div className="flex flex-col items-center space-y-8 w-full px-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className={`text-4xl font-serif tracking-wide transition-colors ${
                      location.pathname === link.href ? 'text-luxury-gold' : 'text-white hover:text-luxury-gold'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-10 flex flex-col items-center gap-8 w-full"
              >
                <a
                  href="tel:8850020664"
                  className="bg-luxury-gold text-luxury-black w-full max-w-xs py-5 rounded-full font-bold uppercase tracking-[0.3em] text-xs hover:bg-white transition-all duration-500 shadow-2xl flex items-center justify-center gap-3"
                >
                  <Phone size={18} />
                  Call Now
                </a>
                <div className="text-center space-y-2">
                  <p className="text-[10px] text-luxury-gold uppercase tracking-[0.5em] font-bold">Luxury Interior Design</p>
                  <p className="text-[9px] text-gray-500 uppercase tracking-[0.2em]">Premium Custom Furniture</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    );
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-500 ${
      scrolled 
        ? 'bg-luxury-black shadow-2xl py-3' 
        : 'bg-black/75 backdrop-blur-xl py-6 border-b border-white/5'
    }`}>
      <div className="container-luxury flex justify-between items-center">
        <Link to="/" className="flex flex-col group">
          <span className="text-3xl font-serif font-bold tracking-tight text-white group-hover:text-luxury-gold transition-colors duration-300">LUXURY</span>
          <span className="text-[10px] tracking-[0.4em] uppercase text-luxury-gold -mt-1 font-bold">Interior</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-[11px] uppercase tracking-[0.25em] transition-all duration-300 font-bold relative group ${
                location.pathname === link.href 
                  ? 'text-luxury-gold' 
                  : 'text-white/90 hover:text-luxury-gold'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-[2px] bg-luxury-gold transition-all duration-500 ${
                location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
          <a
            href="tel:8850020664"
            className="bg-luxury-gold text-luxury-black px-6 py-3 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-all duration-500 shadow-lg flex items-center gap-2"
          >
            <Phone size={14} />
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-white hover:text-luxury-gold transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <MobileMenu />
    </nav>
  );
};

export default Navbar;
