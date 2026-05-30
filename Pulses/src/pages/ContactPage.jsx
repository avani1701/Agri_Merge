import React from 'react';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';

const ContactPage = () => {
  return (
    <div className="pt-20 bg-white dark:bg-slate-900 transition-colors">
      <PageHero
        title="Contact Us"
        tagline="Get In Touch"
        desc="We respond to every query within 24 hours."
        bgImage="/contact_hero_bg.png"
      />

      <Contact />

      <section className="py-24 bg-white dark:bg-slate-900 transition-colors">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-slate-950 text-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-slate-800"
          >
            {/* World map background overlay */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
              <img 
                src="/world_map_network.png" 
                alt="Global Network" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative z-10 text-center max-w-5xl mx-auto">
              <span className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-3 block">
                Export Operations
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
                Our Global Footprint
              </h2>
              <p className="text-slate-300 leading-relaxed mb-12 max-w-4xl mx-auto text-base">
                Headquartered in the commercial hub of Indore, India, Agri Merge Internationals handles seamless agricultural trade across the globe. Our high-efficiency shipping routes connect premium Indian harvests with leading distributors in 15+ destination countries.
              </p>
              
              {/* Visual Stats Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-slate-800/80 pt-10 max-w-4xl mx-auto">
                <div>
                  <h4 className="text-3xl md:text-5xl font-extrabold text-blue-400">15+</h4>
                  <p className="text-xs text-slate-400 mt-2 uppercase font-bold tracking-wider">Countries Operating With</p>
                </div>
                <div>
                  <h4 className="text-3xl md:text-5xl font-extrabold text-blue-400">24/7</h4>
                  <p className="text-xs text-slate-400 mt-2 uppercase font-bold tracking-wider">Logistics Tracking</p>
                </div>
                <div>
                  <h4 className="text-3xl md:text-5xl font-extrabold text-blue-400">100%</h4>
                  <p className="text-xs text-slate-400 mt-2 uppercase font-bold tracking-wider">Trade Compliance</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
