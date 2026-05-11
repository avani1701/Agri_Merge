import React from 'react';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-blue-900 py-20 text-white">
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <p className="text-xl text-blue-100">We respond to every query within 24 hours.</p>
        </div>
      </div>
      <Contact />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Global Reach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Based in Bangalore, India, we have built a logistics network that spans across 15+ countries.
            </p>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-bold cursor-pointer transition-shadow hover:shadow-lg"
            >
              Business Hours: 9:00 AM - 6:00 PM (IST)
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
