import React from 'react';
import Products from '../components/Products';
import { motion } from 'framer-motion';

const ProductsPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-blue-900 py-20 text-white">
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Our Product Range
          </motion.h1>
          <p className="text-xl text-blue-100">Premium Indian exports curated for global excellence.</p>
        </div>
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
              { title: 'Sourcing', desc: 'Directly from the best farms across India.' },
              { title: 'Processing', desc: 'Maintained in certified facilities with strict hygiene.' },
              { title: 'Packaging', desc: 'Customized packaging to ensure freshness during transit.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-xl"
              >
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
