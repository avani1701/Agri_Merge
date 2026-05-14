import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-slate-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/contact_hero_bg.png" 
          alt="Global Communication Network" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/90 to-slate-900"></div>
      </div>

      {/* Abstract Background Patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        {/* Subtle grid texture */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
            <h2 className="text-4xl font-bold mb-8 leading-tight">Ready to Expand Your Business Internationally?</h2>
            
            <div className="space-y-8 mt-12">
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start transition-colors"
              >
                <div className="bg-slate-800 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email Us</p>
                  <p className="text-xl font-medium">info@agrimerge.in</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start transition-colors"
              >
                <div className="bg-slate-800 p-3 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Call Us</p>
                  <p className="text-xl font-medium">+91 70005 68721</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start transition-colors"
              >
                <div className="bg-slate-800 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Our Location</p>
                  <p className="text-xl font-medium">Indore, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <form className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-2xl space-y-6 border border-gray-100 dark:border-slate-700 transition-colors">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Message</label>
                <textarea 
                  rows="4"
                  className="w-full bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center transition-all group">
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
