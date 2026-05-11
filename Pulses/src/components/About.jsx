import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Headphones, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <ShieldCheck className="w-8 h-8 text-blue-600" />, title: 'Trusted Suppliers', desc: 'Sourced directly from certified farmers and ethical suppliers.' },
    { icon: <Truck className="w-8 h-8 text-blue-600" />, title: 'Global Shipping', desc: 'Secure and timely delivery to any corner of the globe.' },
    { icon: <Headphones className="w-8 h-8 text-blue-600" />, title: 'Dedicated Support', desc: '24/7 client coordination and real-time status updates.' },
    { icon: <Award className="w-8 h-8 text-blue-600" />, title: 'Quality Focus', desc: 'Rigorous inspection standards for every single shipment.' },
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
            <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">Exporting Excellence From India to the World</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Agri Merge Internationals, we may be a young startup, but our team brings years of experience in international trade and sourcing. We specialize in connecting buyers with authentic Indian products — from agricultural goods to industrial materials — ensuring the best quality at competitive prices.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              What sets us apart is our strong supplier network, transparent processes, and commitment to delivering value. Whether it’s bulk exports or specialized shipments, we make sure our clients benefit from India’s diverse production capabilities.
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
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="mb-4">{stat.icon}</div>
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
