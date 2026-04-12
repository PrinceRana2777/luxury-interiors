import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      
      {/* Intro Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-luxury-gold uppercase tracking-[0.5em] text-xs font-bold mb-6 block">Welcome to Luxury Interior</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight">
                We Create Spaces That <span className="italic text-luxury-gold">Inspire</span> Your Life
              </h2>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed font-medium">
                Luxury Interior is a premier design firm and furniture manufacturer dedicated to transforming ordinary spaces into extraordinary environments. With over 15 years of expertise, we blend artistic vision with functional excellence.
              </p>
              <Link to="/about" className="inline-flex items-center gap-3 text-luxury-black font-bold uppercase tracking-[0.2em] text-xs hover:text-luxury-gold transition-colors group">
                Discover Our Story
                <div className="w-12 h-[1px] bg-luxury-black group-hover:bg-luxury-gold group-hover:w-16 transition-all duration-500" />
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[20px] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000" 
                  alt="Luxury Living Room" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-luxury-black text-white p-10 rounded-[20px] shadow-2xl hidden md:block z-20 border border-luxury-gold/20">
                <p className="text-4xl font-serif mb-1 text-luxury-gold">500+</p>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-70">Projects Completed</p>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-luxury-gold/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Furniture */}
      <section className="bg-luxury-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-luxury-gold uppercase tracking-[0.5em] text-xs font-bold mb-4 block">Exquisite Collection</span>
              <h2 className="text-4xl md:text-6xl font-serif">Featured Furniture</h2>
            </div>
            <Link to="/gallery" className="text-[10px] uppercase tracking-[0.3em] font-bold border-b-2 border-luxury-gold pb-2 hover:text-luxury-gold transition-colors">
              View All Collection
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'The Royal Sofa', price: 'Premium', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800' },
              { name: 'Velvet Lounge Chair', price: 'Luxury', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800' },
              { name: 'Marble Dining Table', price: 'Bespoke', img: 'https://images.unsplash.com/photo-1530018607912-eff2df114f11?auto=format&fit=crop&q=80&w=800' }
            ].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="luxury-card overflow-hidden mb-8">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-luxury-black/20 group-hover:bg-luxury-black/0 transition-colors duration-500" />
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-black shadow-lg">
                      {item.price}
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-2 group-hover:text-luxury-gold transition-colors">{item.name}</h3>
                <p className="text-gray-400 text-[10px] uppercase tracking-[0.3em] font-bold">Furniture Design</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-luxury-gold uppercase tracking-[0.5em] text-xs font-bold mb-4 block">Client Stories</span>
            <h2 className="text-4xl md:text-6xl font-serif">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Rajesh Mehta', role: 'Home Owner', text: 'Luxury Interior transformed our apartment into a dream home. Their attention to detail in the modular kitchen is exceptional.' },
              { name: 'Priya Sharma', role: 'Villa Owner', text: 'The custom furniture they manufactured for our living room is the highlight of our house. Truly world-class quality.' },
              { name: 'Vikram Singh', role: 'Office Manager', text: 'Professional, timely, and creative. They handled our office renovation with complete transparency and excellence.' }
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="luxury-card p-12 relative group hover:bg-luxury-black transition-all duration-500"
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-luxury-gold text-luxury-gold" />)}
                </div>
                <p className="text-gray-500 italic mb-10 leading-relaxed font-medium group-hover:text-gray-300 transition-colors">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-luxury-cream rounded-full flex items-center justify-center text-luxury-gold font-serif text-xl border border-luxury-gold/20">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg group-hover:text-white transition-colors">{t.name}</h4>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold font-bold">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
