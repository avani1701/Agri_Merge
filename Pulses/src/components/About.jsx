import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { icon: '/shield_icon.png', title: 'Trusted Suppliers', desc: 'Source directly from farmers and specified suppliers' },
    { icon: '/packaging_icon.png', title: 'Global Shipping', desc: 'Ensuring secure and timely deliveries worldwide' },
    { icon: '/coordination_3d.png', title: 'Dedicated Support', desc: '24/7 client coordination and real-time status updates.' },
    { icon: '/quality_3d.png', title: 'Quality Focus', desc: 'Rigorous inspection standards for every single shipment.' },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">About Agri Merge</span>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">Export Excellence to the World</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
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
                <p className="text-gray-500">Target Countries</p>
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
      </div>
    </section>
  );
};

export default About;
