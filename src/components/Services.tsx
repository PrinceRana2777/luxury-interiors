import React from 'react';
import { motion } from 'motion/react';
import { Sofa, Home, Layout, Brush } from 'lucide-react';

const services = [
  {
    title: 'Interior Designing',
    description: 'Complete end-to-end interior solutions for residential and commercial spaces.',
    icon: Layout,
    image: 'https://images.unsplash.com/photo-1616486341353-c58333d17790?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Custom Furniture',
    description: 'Bespoke furniture manufacturing tailored to your specific needs and style.',
    icon: Sofa,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Home & Office Decor',
    description: 'Curated decor elements that bring personality and warmth to your environment.',
    icon: Brush,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Modular Solutions',
    description: 'Modern modular kitchens and wardrobes designed for maximum efficiency.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1556912177-c54030639a60?auto=format&fit=crop&q=80&w=800'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-luxury-gold uppercase tracking-[0.3em] text-sm font-semibold mb-2 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif">Premium Design Services</h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-luxury-cream shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="bg-luxury-gold w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="text-luxury-black" size={24} />
                </div>
                <h3 className="text-2xl font-serif text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
