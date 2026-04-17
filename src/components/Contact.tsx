import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-luxury-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Let's Create Your <span className="italic">Dream Space</span></h2>
            <p className="text-gray-600 mb-12 leading-relaxed max-w-md">
              Ready to transform your home or office? Contact us today for a free consultation and quote.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-luxury-cream rounded-full flex items-center justify-center shrink-0 border border-luxury-gold/20">
                  <Phone className="text-luxury-gold" size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Call Us</h4>
                  <p className="text-gray-600">+91 88500 20664</p>
                  <p className="text-gray-600">+91 72085 86574</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-luxury-cream rounded-full flex items-center justify-center shrink-0 border border-luxury-gold/20">
                  <MapPin className="text-luxury-gold" size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Visit Us</h4>
                  <p className="text-gray-600">
                    Near Karmveer Bhaurao Patil School,<br />
                    Juchandra Road, Naigaon East,<br />
                    Vasai, Palghar - 401208
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-luxury-cream rounded-full flex items-center justify-center shrink-0 border border-luxury-gold/20">
                  <Mail className="text-luxury-gold" size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Email Us</h4>
                  <a href="mailto:luxuryinteriorsmanufacturer@gmail.com" className="text-gray-600 hover:text-luxury-gold transition-colors">luxuryinteriorsmanufacturer@gmail.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-luxury-cream p-8 md:p-12 rounded-3xl shadow-2xl border border-luxury-gold/10"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-gray-500">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-gray-500">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-semibold text-gray-500">Service Interested In</label>
                <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors appearance-none">
                  <option>Interior Designing</option>
                  <option>Custom Furniture</option>
                  <option>Modular Kitchen</option>
                  <option>Home Decor</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-semibold text-gray-500">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors"
                ></textarea>
              </div>
              <button className="w-full bg-luxury-black text-white py-4 rounded-xl font-semibold uppercase tracking-widest hover:bg-luxury-gold hover:text-luxury-black transition-all duration-500 flex items-center justify-center gap-2">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24 h-[400px] rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.454743242044!2d72.8643!3d19.3321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE5JzU1LjYiTiA3MsKwNTEnNTEuNSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
            title="Luxury Interior Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
