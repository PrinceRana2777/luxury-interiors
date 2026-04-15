import React from 'react';
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-luxury-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-8">
            <Link to="/" className="flex flex-col group">
              <span className="text-3xl font-serif font-bold tracking-tight group-hover:text-luxury-gold transition-colors">LUXURY</span>
              <span className="text-[10px] tracking-[0.4em] uppercase text-luxury-gold -mt-1 font-bold">Interior</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Premium interior design and custom furniture manufacturer. We bring luxury and elegance to your living spaces since 2009.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-luxury-gold hover:text-luxury-black hover:border-luxury-gold transition-all duration-500">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="hover:text-luxury-gold transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-luxury-gold group-hover:w-4 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-xl mb-8">Our Collection</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              {['Sofa Collection', 'Premium Beds', 'Modular Kitchen', 'Office Interior', 'Custom Furniture'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="hover:text-luxury-gold transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-luxury-gold group-hover:w-4 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl mb-8">Contact Info</h4>
            <ul className="space-y-6 text-sm text-gray-400 font-medium">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-luxury-gold shrink-0" />
                <span className="leading-relaxed">Near Karmveer Bhaurao Patil School, Juchandra Road, Naigaon East, Vasai, Palghar - 401208</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-luxury-gold shrink-0" />
                <a href="tel:8850020664" className="hover:text-luxury-gold transition-colors">+91 88500 20664</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="text-luxury-gold shrink-0" />
                <a href="mailto:info@luxuryinterior.com" className="hover:text-luxury-gold transition-colors">info@luxuryinterior.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center text-[10px] text-gray-500 tracking-[0.3em] uppercase font-bold">
          <p>&copy; {new Date().getFullYear()} Luxury Interior. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
