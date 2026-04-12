import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5db?auto=format&fit=crop&q=80&w=1000"
                alt="Our Workshop"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-luxury-gold/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-luxury-gold/30 rounded-full -z-10" />
            
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-xl border-l-4 border-luxury-gold">
              <span className="text-4xl font-serif font-bold text-luxury-black block">15+</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">Years of Experience</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-luxury-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">About Luxury Interior</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Crafting Elegance Since <span className="italic">2009</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              At Luxury Interior, we believe that your home should be a reflection of your personality. As premier manufacturers of all types of furniture and expert interior decorators, we combine traditional craftsmanship with modern design sensibilities.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                'Customized Furniture Manufacturing',
                'Expert Interior Consultation',
                'Premium Quality Materials',
                'Timely Project Completion'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-luxury-gold" size={20} />
                  <span className="text-luxury-black font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-8 py-8 border-t border-luxury-gold/20">
              <div>
                <h4 className="font-serif text-xl mb-2">Our Mission</h4>
                <p className="text-sm text-gray-500 leading-relaxed">To provide high-quality, sustainable interior solutions that exceed client expectations.</p>
              </div>
              <div>
                <h4 className="font-serif text-xl mb-2">Our Vision</h4>
                <p className="text-sm text-gray-500 leading-relaxed">To be the most trusted name in luxury interior design and furniture manufacturing.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
