import React from 'react';
import { motion } from 'framer-motion';

const About = ({ showPulses = true }) => {
  const stats = [
    { icon: '/shield_icon.png', title: 'Trusted Suppliers', desc: 'Source directly from farmers and specified suppliers' },
    { icon: '/packaging_icon.png', title: 'Global Shipping', desc: 'Ensuring secure and timely deliveries worldwide' },
    { icon: '/coordination_3d.png', title: 'Dedicated Support', desc: '24/7 client coordination and real-time status updates.' },
    { icon: '/quality_3d.png', title: 'Quality Focus', desc: 'Rigorous inspection standards for every single shipment.' },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <img src="/logo_main.png" alt="Agri Merge" className="h-32 md:h-40 w-auto mb-4 object-contain" />
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">About Agri Merge</span>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">Export Excellence to the World</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              At Agri Merge Internationals, we are dedicated to connecting global buyers with authentic, premium-grade Indian products. We specialize in sourcing the finest agricultural goods and industrial materials, ensuring rigorous quality control and highly competitive pricing at every stage.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              What sets us apart is our extensive certified supplier network, transparent operations, and commitment to long-term partnerships. Whether dealing in bulk exports or customized shipments, we ensure our global clients benefit from India’s rich and diverse agricultural production capabilities.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="text-3xl font-bold text-gray-900">100+</p>
                <p className="text-gray-500">Verified Vendors</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="text-3xl font-bold text-gray-900">15+</p>
                <p className="text-gray-500">Countries Operating With</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300 border border-gray-100 flex flex-col items-start group">
                <div className="w-16 h-16 mb-5">
                  <img src={stat.icon} alt={stat.title} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{stat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* New Pulses Product Showcase Section */}
        {showPulses && (
          <div className="flex flex-col lg:flex-row gap-16 items-center pt-16 border-t border-gray-200">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2 order-2 lg:order-1"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] group">
                <img 
                  src="/pulses_about.jpeg" 
                  alt="Premium Indian Pulses" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2 order-1 lg:order-2"
            >
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                India stands as a trusted global exporter of premium nutrition-rich Pulses. Grown in the highly fertile regions of Central & North India, our Pulses are cultivated using purely natural, chemical-free methods to preserve their high protein density and clean nutrient profile.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                At Agri Merge Internationals, we ensure our Pulses (Moong - Green Gram, Toor - Pigeon Peas, Urad - Black Gram, Chana - Chickpeas) are thoroughly cleaned, double-graded, and sortex-sorted to reach supreme purity and perfect moisture content. We cater directly to global food manufacturers, retail packers, and wholesale distributors demanding the highest quality standards.
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
