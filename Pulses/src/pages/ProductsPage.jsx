import React from 'react';
import Products from '../components/Products';
import { motion } from 'framer-motion';

const ProductsPage = () => {
  return (
    <div className="pt-20">
      {/* Premium Hero Banner */}
      <div className="relative overflow-hidden bg-[#1E3A8A] text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/world_map_network.png" 
            alt="World Map Network" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A]/50 to-[#1E3A8A]/70"></div>
        </div>

        {/* Abstract Background Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#2563EB] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2563EB] rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
          {/* Subtle grid texture */}
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="relative container mx-auto px-6 py-28 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-[#2563EB] font-bold uppercase tracking-widest text-sm mb-4 block">International Trade</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Our Product Range
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Premium Indian exports curated for global excellence.
            </p>
          </motion.div>
        </div>

        {/* Glassmorphism accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent opacity-50"></div>
      </div>


      <Products />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            Quality Standards
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-gray-600 mb-12"
          >
            Every product in our catalog undergoes rigorous quality checks. From farm-level sourcing to the final packaging, we maintain international standards of hygiene and safety.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Sourcing', desc: 'Directly from the best farms across India.', icon: '/sourcing_icon.png' },
              { title: 'Processing', desc: 'Maintained in certified facilities with strict hygiene.', icon: '/processing_icon.png' },
              { title: 'Packaging', desc: 'Customized packaging to ensure freshness during transit.', icon: '/packaging_icon.png' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-xl flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 mb-6">
                  <img src={item.icon} alt={item.title} className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
