import React from 'react';
import About from '../components/About';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-blue-900 py-20 text-white">
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            About Agri Merge Internationals
          </motion.h1>
          <p className="text-xl text-blue-100">Our journey from India to the global stage.</p>
        </div>
      </div>
      <About />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                To be the most reliable link between India's rich agricultural produce and the global market, ensuring fair value to farmers and premium quality to our international clients.
              </p>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                Transforming the export landscape of India through transparency, innovation, and unwavering commitment to quality standards.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=2000&auto=format&fit=crop" 
                alt="Global Trade" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
