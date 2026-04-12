import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const projects = [
  { id: 1, category: 'Living Room', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800' },
  { id: 2, category: 'Bedroom', image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800' },
  { id: 3, category: 'Kitchen', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800' },
  { id: 4, category: 'Furniture', image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800' },
  { id: 5, category: 'Living Room', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800' },
  { id: 6, category: 'Office', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
];

const categories = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Furniture', 'Office'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-luxury-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-luxury-gold uppercase tracking-[0.3em] text-sm font-semibold mb-2 block">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-serif">Featured Projects</h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mt-6" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 border ${
                activeCategory === cat 
                ? 'bg-luxury-gold border-luxury-gold text-luxury-black' 
                : 'border-white/20 text-white hover:border-luxury-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.category}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-luxury-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <span className="text-luxury-gold uppercase tracking-[0.2em] text-xs mb-2">{project.category}</span>
                  <h4 className="text-xl font-serif">View Details</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
