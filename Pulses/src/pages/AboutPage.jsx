import React from 'react';
import About from '../components/About';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import { Leaf, ShieldCheck, Sliders, Package, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-20 bg-white dark:bg-slate-900 transition-colors">
      <PageHero
        title="About Us"
        tagline="Our Journey"
        desc="Our journey from India to the global stage."
        bgImage="/about_hero_bg.png"
      />

      <About />

      <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 dark:text-white">Delivering India’s Finest</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Agri Merge Internationals connects global markets with India’s most celebrated origins — where trust, quality, and consistency come first.
                From the misty hills of Coorg to the fertile fields of Guntur, we bring forward products that are not just traded worldwide, but respected for their provenance and performance.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Coorg Coffee is known for its balanced and refined character. Our carefully sourced beans offer a smooth, medium-to-full body with mild acidity and a clean finish. The cup opens with gentle floral aromas, followed by layered notes of cocoa, chocolate, hazelnut, almond, warm spices, and caramel.
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
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2070&auto=format&fit=crop"
                alt="Coffee Beans"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl md:order-1 order-2"
            >
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop"
                alt="Red Chillies"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:order-2 order-1"
            >
              <h2 className="text-3xl font-bold mb-6 dark:text-white">Guntur Chillies</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                On the spice front, Guntur Chillies, especially the iconic Guntur Sannam S4, represent India’s dominance in global chilli exports. Renowned for their intense pungency and deep red colour, these chillies deliver a sharp heat in the range of 35,000–40,000 SHU.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                At Agri Merge Internationals, we supply premium dry whole chillies, finely milled chilli powder, and uniform chilli flakes, all processed under strict quality controls to meet international standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-slate-800/50 transition-colors">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-3 block"
            >
              How We Operate
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4 dark:text-white text-gray-900"
            >
              Our Global Export Process
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              From the fertile agricultural lands of India to destination ports across the globe, we implement a seamless, high-standards pipeline to guarantee purity, punctuality, and trust.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden lg:block absolute top-[45%] left-4 right-4 h-0.5 bg-blue-100 dark:bg-slate-700/50 -translate-y-1/2 z-0" />
            
            {[
              {
                title: "Ethical Sourcing",
                desc: "Direct partnerships with certified farmers & estates, selecting only the finest raw yields at their peak quality.",
                icon: Leaf,
                gradient: "from-emerald-500 to-teal-500",
                iconColor: "text-emerald-600 dark:text-emerald-400"
              },
              {
                title: "Multi-Tier QA",
                desc: "Rigorous laboratory testing for moisture level, aroma, and pesticide residue to match strict international guidelines.",
                icon: ShieldCheck,
                gradient: "from-blue-500 to-indigo-500",
                iconColor: "text-blue-600 dark:text-blue-400"
              },
              {
                title: "Precision Sorting",
                desc: "Advanced grading and sorting processes ensuring uniformity in size, color, density, and appearance.",
                icon: Sliders,
                gradient: "from-purple-500 to-pink-500",
                iconColor: "text-purple-600 dark:text-purple-400"
              },
              {
                title: "Vacuum Packaging",
                desc: "Multi-layer, moisture-resistant custom packaging that preserves the structural integrity and freshness during transit.",
                icon: Package,
                gradient: "from-orange-500 to-amber-500",
                iconColor: "text-orange-600 dark:text-orange-400"
              },
              {
                title: "Global Logistics",
                desc: "Flawless customs compliance, complete documentation, and end-to-end container tracking to global destination ports.",
                icon: Globe,
                gradient: "from-cyan-500 to-blue-500",
                iconColor: "text-cyan-600 dark:text-cyan-400"
              }
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center z-10 group"
                >
                  <div className="relative mb-6 group-hover:scale-110 transition-transform duration-300">
                    {/* Glowing backshadow for volumetric depth */}
                    <div className={`absolute -inset-1.5 bg-gradient-to-br ${item.gradient} rounded-2xl blur-md opacity-20 group-hover:opacity-40 transition-all duration-300`} />
                    
                    {/* Glassmorphic border container */}
                    <div className="relative w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                      <IconComponent className={`w-8 h-8 ${item.iconColor}`} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 dark:text-white text-gray-900 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
