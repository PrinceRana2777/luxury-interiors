import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Target, Eye, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-32 bg-luxury-black text-white overflow-hidden !py-32">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="About Header"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-luxury-gold uppercase tracking-[0.5em] text-xs font-bold mb-6 block">Our Story</span>
            <h1 className="text-5xl md:text-8xl font-serif">About Luxury Interior</h1>
          </motion.div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight">A Legacy of <span className="italic text-luxury-gold">Craftsmanship</span> and Innovation</h2>
              <div className="space-y-8 text-gray-500 font-medium leading-relaxed text-lg">
                <p>
                  Founded in 2009, Luxury Interior has grown from a small workshop to a leading name in the interior design and furniture manufacturing industry. Our journey is defined by a passion for creating spaces that resonate with the people who inhabit them.
                </p>
                <p>
                  We specialize in manufacturing all types of furniture, from classic wooden pieces to modern modular systems. Our team of expert decorators and master craftsmen work in harmony to deliver projects that are not just beautiful, but also durable and functional.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-10 mt-12">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-luxury-cream rounded-2xl flex items-center justify-center text-luxury-gold shadow-sm">
                    <Award size={28} />
                  </div>
                  <div>
                    <p className="text-3xl font-serif font-bold text-luxury-black">15+</p>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Years Experience</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-luxury-cream rounded-2xl flex items-center justify-center text-luxury-gold shadow-sm">
                    <CheckCircle2 size={28} />
                  </div>
                  <div>
                    <p className="text-3xl font-serif font-bold text-luxury-black">100%</p>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Satisfaction</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="image-zoom rounded-2xl shadow-2xl mt-16">
                <img src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5db?auto=format&fit=crop&q=80&w=800" className="h-[450px] w-full object-cover" alt="Work 1" referrerPolicy="no-referrer" />
              </div>
              <div className="image-zoom rounded-2xl shadow-2xl">
                <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" className="h-[450px] w-full object-cover" alt="Work 2" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-luxury-teal text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-16 rounded-[20px] border border-white/10 backdrop-blur-sm"
            >
              <Target className="text-luxury-gold mb-8" size={56} />
              <h3 className="text-4xl font-serif mb-8">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed text-lg font-medium">
                To provide high-quality, sustainable, and aesthetically pleasing interior solutions that exceed our clients' expectations while maintaining the highest standards of craftsmanship and integrity.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 p-16 rounded-[20px] border border-white/10 backdrop-blur-sm"
            >
              <Eye className="text-luxury-gold mb-8" size={56} />
              <h3 className="text-4xl font-serif mb-8">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed text-lg font-medium">
                To be the most trusted and innovative name in the luxury interior design and furniture manufacturing industry, setting new benchmarks for quality and design excellence globally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-luxury-gold uppercase tracking-[0.5em] text-xs font-bold mb-6 block">Our Values</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-20">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { title: 'Quality Materials', desc: 'We use only the finest woods, fabrics, and finishes for our furniture.' },
              { title: 'Expert Team', desc: 'Our designers and craftsmen are masters of their respective trades.' },
              { title: 'Custom Designs', desc: 'Every project is unique and tailored to your specific lifestyle.' },
              { title: 'Timely Delivery', desc: 'We respect your time and ensure projects are completed as promised.' }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-12 rounded-[15px] bg-luxury-cream hover:bg-luxury-gold hover:text-white transition-all duration-500 group shadow-sm hover:shadow-xl"
              >
                <h4 className="text-2xl font-serif mb-6">{item.title}</h4>
                <p className="text-sm text-gray-500 group-hover:text-white/90 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
