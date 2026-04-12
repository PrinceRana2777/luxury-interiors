import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';

const projects = [
  { id: 1, category: 'Home', title: 'Modern Living Room', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=1000' },
  { id: 2, category: 'Home', title: 'Luxury Bedroom', image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1000' },
  { id: 3, category: 'Kitchen', title: 'Modular Kitchen', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000' },
  { id: 4, category: 'Furniture', title: 'Custom Sofa Set', image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=1000' },
  { id: 5, category: 'Office', title: 'Corporate Workspace', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000' },
  { id: 6, category: 'Home', title: 'Minimalist Dining', image: 'https://images.unsplash.com/photo-1530018607912-eff2df114f11?auto=format&fit=crop&q=80&w=1000' },
  { id: 7, category: 'Furniture', title: 'Wooden Wardrobe', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1000' },
  { id: 8, category: 'Office', title: 'Executive Cabin', image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000' },
  { id: 9, category: 'Kitchen', title: 'Island Kitchen', image: 'https://images.unsplash.com/photo-1556912177-c54030639a60?auto=format&fit=crop&q=80&w=1000' },
];

const categories = ['All', 'Home', 'Office', 'Kitchen', 'Furniture'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-32 bg-luxury-black text-white overflow-hidden !py-32">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Gallery Header"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-luxury-gold uppercase tracking-[0.5em] text-xs font-bold mb-6 block">Our Portfolio</span>
            <h1 className="text-5xl md:text-8xl font-serif">Design Inspiration</h1>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-[11px] uppercase tracking-[0.3em] font-bold transition-all duration-500 border ${
                  activeCategory === cat 
                    ? 'bg-luxury-gold text-white border-luxury-gold shadow-lg scale-105' 
                    : 'bg-transparent text-gray-400 border-gray-100 hover:border-luxury-gold hover:text-luxury-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="luxury-card group cursor-pointer overflow-hidden"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <div className="image-zoom relative h-80">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-luxury-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-xl">
                        <Maximize2 size={28} />
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 translate-y-10 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                      <span className="text-luxury-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-2 block">{project.category}</span>
                      <h3 className="text-white text-2xl font-serif">{project.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-luxury-black/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-10 right-10 text-white hover:text-luxury-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={48} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
              alt="Enlarged view"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
