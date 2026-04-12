import React from 'react';
import { motion } from 'motion/react';
import { Sofa, Bed, DoorOpen, Utensils, Coffee, ArrowRight } from 'lucide-react';

const productCategories = [
  {
    title: 'Sofa Collection',
    description: 'Modern, luxury, and custom-designed sofas including L-shape, recliners, and sectional sofas tailored for your comfort.',
    icon: Sofa,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
    features: ['L-Shape Sofas', 'Recliners', 'Sectional Sofas', 'Custom Fabric']
  },
  {
    title: 'Beds',
    description: 'Premium wooden and upholstered beds. Choose from King size, Queen size, or custom dimensions for a perfect night\'s sleep.',
    icon: Bed,
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800',
    features: ['King & Queen Size', 'Upholstered Frames', 'Storage Beds', 'Wooden Finish']
  },
  {
    title: 'Wardrobes & Storage',
    description: 'Smart sliding wardrobes and modular storage solutions. Custom cupboards and cabinets designed to maximize your space.',
    icon: DoorOpen,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800',
    features: ['Sliding Doors', 'Modular Units', 'Custom Cabinets', 'Premium Hardware']
  },
  {
    title: 'Dining Tables',
    description: 'Elegant 4-seater, 6-seater, and 8-seater dining sets. Available in wooden, glass, and modern contemporary designs.',
    icon: Utensils,
    image: 'https://images.unsplash.com/photo-1530018607912-eff2df114f11?auto=format&fit=crop&q=80&w=800',
    features: ['4/6/8 Seaters', 'Marble & Glass Tops', 'Solid Wood', 'Modern Designs']
  },
  {
    title: 'Tea Tables',
    description: 'Stylish center tables and tea tables for living rooms. A perfect blend of wooden craftsmanship and modern glass aesthetics.',
    icon: Coffee,
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800',
    features: ['Center Tables', 'Glass Coffee Tables', 'Wooden Tea Tables', 'Minimalist Style']
  }
];

const Services = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-32 bg-luxury-black text-white overflow-hidden !py-32">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Services Header"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-luxury-gold uppercase tracking-[0.5em] text-xs font-bold mb-6 block">Our Collection</span>
            <h1 className="text-5xl md:text-8xl font-serif">Premium Furniture Products</h1>
          </motion.div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {productCategories.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="luxury-card overflow-hidden border border-gray-100"
              >
                <div className="image-zoom h-72">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 w-12 h-12 bg-luxury-black/90 backdrop-blur rounded-xl flex items-center justify-center text-luxury-gold shadow-xl">
                    <product.icon size={24} />
                  </div>
                </div>
                
                <div className="p-10 space-y-6">
                  <h3 className="text-3xl font-serif text-luxury-black">{product.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                    {product.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 pt-2">
                    {product.features.map(feature => (
                      <span key={feature} className="text-[10px] uppercase tracking-widest bg-luxury-cream px-4 py-2 rounded-full text-luxury-teal font-bold border border-luxury-gold/10">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6">
                    <a 
                      href="https://wa.me/918850020664" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold w-full flex items-center justify-center gap-3 group"
                    >
                      Enquire Now
                      <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-luxury-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight">Looking for Something <span className="italic text-luxury-gold">Bespoke?</span></h2>
          <p className="text-gray-400 mb-12 text-lg font-medium leading-relaxed">
            We specialize in custom furniture manufacturing. If you have a specific design in mind, our master craftsmen can bring it to life with precision and elegance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:8850020664" className="btn-gold">
              Call Us Now
            </a>
            <a href="/contact" className="border-2 border-white text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-luxury-black transition-all duration-500">
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
