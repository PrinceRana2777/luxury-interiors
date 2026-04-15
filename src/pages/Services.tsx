import React from 'react';
import { motion } from 'motion/react';
import { Sofa, Bed, DoorOpen, Utensils, Coffee, ArrowRight } from 'lucide-react';

const productCategories = [
  {
    title: 'Beds',
    description: 'Premium wooden and upholstered beds. Choose from King size, Queen size, or custom dimensions for a perfect night\'s sleep.',
    icon: Bed,
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800',
    features: ['King & Queen Size', 'Upholstered Frames', 'Storage Beds', 'Wooden Finish']
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

const sofaImages = [
  'https://iili.io/BeUUoIj.md.jpg',
  'https://iili.io/BeUUuEB.md.jpg',
  'https://iili.io/BeUUTBV.md.jpg',
  'https://iili.io/BeUUzLQ.md.jpg',
  'https://iili.io/BeUUYkg.md.jpg',
  'https://iili.io/BeUU7YF.md.jpg',
  'https://iili.io/BeUU521.md.jpg',
  'https://iili.io/BeUUapa.md.jpg',
  'https://iili.io/BeUU0hv.md.jpg'
];

const wardrobeImages = [
  'https://iili.io/BeS3AOJ.md.jpg',
  'https://iili.io/BeS2jF1.md.jpg',
  'https://iili.io/BeS3zUF.md.jpg',
  'https://iili.io/BeS2wcF.md.jpg',
  'https://iili.io/BeS3RDv.md.jpg',
  'https://iili.io/BeS3THg.md.jpg'
];

const kitchenImages = [
  'https://iili.io/Ber9KAJ.md.jpg',
  'https://iili.io/Ber928g.md.jpg',
  'https://iili.io/BegyyMB.md.jpg',
  'https://iili.io/BegyQyb.md.jpg',
  'https://iili.io/Ber9fwv.md.jpg'
];

const mainDoorImages = [
  'https://iili.io/BerA0Tx.md.jpg',
  'https://iili.io/BerAcpj.md.jpg',
  'https://iili.io/BerAakb.md.jpg',
  'https://iili.io/BerAYYu.md.jpg',
  'https://iili.io/BerAh3F.md.jpg',
  'https://iili.io/BerAjYg.md.jpg'
];

const tvWallImages = [
  'https://iili.io/BerrXzg.md.jpg',
  'https://iili.io/BerrVmF.md.jpg',
  'https://iili.io/Ber6Sxn.md.jpg',
  'https://iili.io/Ber6vDX.md.jpg',
  'https://iili.io/BerQvMF.md.jpg',
  'https://iili.io/BerQkn1.md.jpg',
  'https://iili.io/BertfzN.md.jpg',
  'https://iili.io/BertBst.md.jpg',
  'https://iili.io/BerDUFe.md.jpg',
  'https://iili.io/BerDr8b.md.jpg',
  'https://iili.io/BerDgcu.md.jpg'
];

const Services = () => {
  return (
    <div className="pt-24">
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
        <div className="relative z-10 container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-luxury-gold uppercase tracking-[0.5em] text-xs font-bold mb-6 block">Our Collection</span>
            <h1 className="text-5xl md:text-8xl font-serif">Premium Furniture Products</h1>
          </motion.div>
        </div>
      </section>

      {/* Wardrobes & Storage Gallery Section */}
      <section className="bg-luxury-cream">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <span className="text-luxury-gold uppercase tracking-[0.5em] text-xs font-bold mb-4 block">Exclusive Collection</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-6">Wardrobes & Storage</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              Smart sliding wardrobes and modular storage solutions designed to maximize your space with elegance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wardrobeImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="luxury-card group overflow-hidden h-[350px]"
              >
                <div className="w-full h-full overflow-hidden">
                  <img 
                    src={img} 
                    alt={`Wardrobe ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-luxury-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-black shadow-xl scale-90 group-hover:scale-100 transition-transform duration-500">
                    View Design
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="https://wa.me/918850020664" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-3 group"
            >
              Get Custom Quote
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Sofa Collection Gallery Section */}
      <section className="bg-white">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <span className="text-luxury-gold uppercase tracking-[0.5em] text-xs font-bold mb-4 block">Exquisite Comfort</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-6">Sofa Collection</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              Premium modern sofa designs crafted for comfort, style, and luxury living.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sofaImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="luxury-card group overflow-hidden h-[350px] bg-white shadow-sm"
              >
                <div className="w-full h-full overflow-hidden">
                  <img 
                    src={img} 
                    alt={`Sofa ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-luxury-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-black shadow-xl scale-90 group-hover:scale-100 transition-transform duration-500">
                    View Design
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="https://wa.me/918850020664" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-3 group"
            >
              Get Custom Quote
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Kitchen Furniture Gallery Section */}
      <section className="bg-luxury-cream">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <span className="text-luxury-gold uppercase tracking-[0.5em] text-xs font-bold mb-4 block">Modern Functionality</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-6">Kitchen Furniture</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              Modern modular kitchen designs crafted for functionality, elegance, and smart space utilization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kitchenImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="luxury-card group overflow-hidden h-[350px]"
              >
                <div className="w-full h-full overflow-hidden">
                  <img 
                    src={img} 
                    alt={`Kitchen ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-luxury-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-black shadow-xl scale-90 group-hover:scale-100 transition-transform duration-500">
                    View Design
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="https://wa.me/918850020664" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-3 group"
            >
              Get Custom Quote
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Door Designs Gallery Section */}
      <section className="bg-white">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <span className="text-luxury-gold uppercase tracking-[0.5em] text-xs font-bold mb-4 block">Grand Entrance</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-6">Main Door Designs</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              Elegant and durable main door designs crafted to enhance the entrance of your home with a premium touch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainDoorImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="luxury-card group overflow-hidden h-[350px]"
              >
                <div className="w-full h-full overflow-hidden">
                  <img 
                    src={img} 
                    alt={`Main Door ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-luxury-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-black shadow-xl scale-90 group-hover:scale-100 transition-transform duration-500">
                    View Design
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="https://wa.me/918850020664" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-3 group"
            >
              Get Custom Quote
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* TV Wall Design & Internal Space Gallery Section */}
      <section className="bg-luxury-cream">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <span className="text-luxury-gold uppercase tracking-[0.5em] text-xs font-bold mb-4 block">Smart Living</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-6">TV Wall Design & Internal Space</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              Stylish TV unit designs and smart internal space solutions crafted to enhance functionality and elevate modern living.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tvWallImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="luxury-card group overflow-hidden h-[350px]"
              >
                <div className="w-full h-full overflow-hidden">
                  <img 
                    src={img} 
                    alt={`TV Wall ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-luxury-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-black shadow-xl scale-90 group-hover:scale-100 transition-transform duration-500">
                    View Design
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="https://wa.me/918850020664" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-3 group"
            >
              Get Custom Quote
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="bg-luxury-cream/30">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <span className="text-luxury-gold uppercase tracking-[0.5em] text-xs font-bold mb-4 block">More Products</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-6">Other Essentials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="luxury-card overflow-hidden border border-gray-100 bg-white"
              >
                <div className="image-zoom h-[350px]">
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
                
                <div className="p-10 space-y-6 text-center">
                  <h3 className="text-3xl font-serif text-luxury-black">{product.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                    {product.description}
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-3 pt-2">
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
        <div className="container-luxury text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight">Looking for Something <span className="italic text-luxury-gold">Bespoke?</span></h2>
          <p className="text-gray-400 mb-12 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
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
