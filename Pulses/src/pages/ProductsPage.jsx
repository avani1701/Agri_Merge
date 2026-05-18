import React from 'react';
import Products from '../components/Products';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';

const ProductsPage = () => {
  return (
    <div className="pt-20 bg-white dark:bg-slate-900 transition-colors">
      <PageHero 
        title="Our Product Range"
        tagline="International Trade"
        desc="Premium Indian exports curated for global excellence."
        bgImage="/world_map_network.png"
      />

      <Products />
      
      <section className="py-20 bg-gray-50 dark:bg-slate-800/50 transition-colors">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 dark:text-white"
          >
            Quality Standards
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 mb-12"
          >
            Every product in our catalog undergoes rigorous quality checks. From farm-level sourcing to the final packaging, we maintain international standards of hygiene and safety.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Sourcing', desc: 'Directly from the best farms across India.', icon: '/sourcing_icon.png' },
              { title: 'Processing', desc: 'Maintained in certified facilities with strict hygiene.', icon: '/processing_3d.png' },
              { title: 'Packaging', desc: 'Customized packaging to ensure freshness during transit.', icon: '/packaging_icon.png' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 transition-all hover:shadow-xl flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 mb-6">
                  <img 
                    src={item.icon} 
                    alt={item.title} 
                    className={`w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal ${item.icon.includes('3d') ? '' : 'dark:invert'}`} 
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">{item.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
