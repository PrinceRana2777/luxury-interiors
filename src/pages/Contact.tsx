import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="relative py-32 bg-luxury-black text-white overflow-hidden !py-32">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Contact Header"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-luxury-gold uppercase tracking-[0.5em] text-xs font-bold mb-6 block">Get In Touch</span>
            <h1 className="text-5xl md:text-8xl font-serif">Contact Us</h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight">Let's Create Your <span className="italic text-luxury-gold">Dream Space</span></h2>
              <p className="text-gray-500 mb-16 text-lg font-medium leading-relaxed">
                Whether you have a specific project in mind or just want to explore possibilities, we're here to help you create a space that truly reflects your style.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="luxury-card p-10 group hover:bg-luxury-black transition-all duration-500">
                  <div className="w-14 h-14 bg-luxury-cream rounded-2xl flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-white transition-all duration-500">
                    <Phone size={28} />
                  </div>
                  <h4 className="font-serif text-2xl mb-4 group-hover:text-white transition-colors">Call Us</h4>
                  <div className="flex flex-col gap-2 text-gray-500 group-hover:text-gray-300 transition-colors font-medium">
                    <a href="tel:8850020664" className="hover:text-luxury-gold transition-colors">+91 88500 20664</a>
                    <a href="tel:7208586574" className="hover:text-luxury-gold transition-colors">+91 72085 86574</a>
                  </div>
                </div>

                <div className="luxury-card p-10 group hover:bg-luxury-black transition-all duration-500">
                  <div className="w-14 h-14 bg-luxury-cream rounded-2xl flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-white transition-all duration-500">
                    <MessageCircle size={28} />
                  </div>
                  <h4 className="font-serif text-2xl mb-4 group-hover:text-white transition-colors">WhatsApp</h4>
                  <a href="https://wa.me/918850020664" target="_blank" rel="noopener noreferrer" className="text-gray-500 group-hover:text-gray-300 transition-colors font-medium hover:text-luxury-gold">
                    Start a conversation on WhatsApp
                  </a>
                </div>

                <div className="luxury-card p-10 group hover:bg-luxury-black transition-all duration-500">
                  <div className="w-14 h-14 bg-luxury-cream rounded-2xl flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-white transition-all duration-500">
                    <MapPin size={28} />
                  </div>
                  <h4 className="font-serif text-2xl mb-4 group-hover:text-white transition-colors">Our Studio</h4>
                  <p className="text-gray-500 group-hover:text-gray-300 transition-colors font-medium leading-relaxed">
                    Near Karmveer Bhaurao Patil School,<br />
                    Juchandra Road, Naigaon East,<br />
                    Vasai, Palghar - 401208
                  </p>
                </div>

                <div className="luxury-card p-10 group hover:bg-luxury-black transition-all duration-500">
                  <div className="w-14 h-14 bg-luxury-cream rounded-2xl flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-white transition-all duration-500">
                    <Mail size={28} />
                  </div>
                  <h4 className="font-serif text-2xl mb-4 group-hover:text-white transition-colors">Email Us</h4>
                  <a href="mailto:luxuryinteriorsmanufacturer@gmail.com" className="text-gray-500 group-hover:text-gray-300 transition-colors font-medium hover:text-luxury-gold">luxuryinteriorsmanufacturer@gmail.com</a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-luxury-cream p-12 md:p-16 rounded-[20px] shadow-2xl border border-luxury-gold/10"
            >
              <h3 className="text-3xl font-serif mb-10">Request a Quote</h3>
              <form className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white border-b-2 border-gray-100 px-4 py-4 focus:outline-none focus:border-luxury-gold transition-colors text-lg font-serif"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-white border-b-2 border-gray-100 px-4 py-4 focus:outline-none focus:border-luxury-gold transition-colors text-lg font-serif"
                    placeholder="+91 00000 00000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Interested In</label>
                  <select className="w-full bg-white border-b-2 border-gray-100 px-4 py-4 focus:outline-none focus:border-luxury-gold transition-colors text-lg font-serif appearance-none">
                    <option>Interior Designing</option>
                    <option>Custom Furniture</option>
                    <option>Modular Kitchen</option>
                    <option>Office Interior</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">Your Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white border-b-2 border-gray-100 px-4 py-4 focus:outline-none focus:border-luxury-gold transition-colors text-lg font-serif resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button className="btn-gold w-full flex items-center justify-center gap-3 group">
                  Send Message
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>

          {/* Map */}
          <div className="mt-24 text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Visit Our Showroom</h2>
            <p className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold">Naigaon East, Vasai-Virar, Maharashtra</p>
          </div>
          <div className="h-[400px] rounded-[30px] overflow-hidden shadow-2xl border-8 border-white">
            <iframe 
              src="https://maps.google.com/maps?q=19.358111,72.869472&z=15&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Luxury Interior Showroom Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
