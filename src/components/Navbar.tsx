import React, { useState, useEffect } from 'react';
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
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'glass-nav py-4' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex flex-col group">
          <span className={`text-3xl font-serif font-bold tracking-tight transition-colors duration-500 ${
            scrolled || !isHome ? 'text-white' : 'text-white'
          }`}>LUXURY</span>
          <span className="text-[10px] tracking-[0.4em] uppercase text-luxury-gold -mt-1 font-bold">Interior</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-[12px] uppercase tracking-[0.2em] transition-all duration-300 font-bold relative group ${
                location.pathname === link.href 
                  ? 'text-luxury-gold' 
                  : scrolled || !isHome ? 'text-white hover:text-luxury-gold' : 'text-white hover:text-luxury-gold'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-luxury-gold transition-all duration-300 ${
                location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
          <a
            href="tel:8850020664"
            className="btn-gold !py-3 !px-6 !text-[11px]"
          >
            <Phone size={14} className="inline mr-2" />
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className={`md:hidden p-2 transition-colors duration-500 ${
          scrolled || !isHome ? 'text-white' : 'text-white'
        }`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-luxury-black md:hidden flex flex-col items-center justify-center space-y-10"
          >
            <button className="absolute top-10 right-10 text-white" onClick={() => setIsOpen(false)}>
              <X size={40} />
            </button>
            
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-4xl font-serif transition-colors ${
                  location.pathname === link.href ? 'text-luxury-gold' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-10 flex flex-col items-center gap-6">
              <a
                href="tel:8850020664"
                className="btn-gold"
              >
                Call Now
              </a>
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.4em] font-bold">Luxury Interior Design</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
