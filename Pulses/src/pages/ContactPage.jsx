import React from 'react';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="pt-20">
      {/* Premium Hero Banner */}
      <div className="relative overflow-hidden bg-[#1E3A8A] text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/contact_hero_bg.png" 
            alt="Global Communication Network" 
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
            <span className="text-[#2563EB] font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              We respond to every query within 24 hours.
            </p>
          </motion.div>
        </div>

        {/* Glassmorphism accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent opacity-50"></div>
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
