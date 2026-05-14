import React from 'react';
import About from '../components/About';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';

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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Meet the Team</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We are a dedicated Indian exports team combining expertise in global trade compliance, product sourcing, quality assurance, documentation, and logistics execution. From vendor development and sustainable packaging to customs coordination and client relationship management, our people ensure every shipment moves reliably, transparently, and on schedule while opening new markets for our partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sourcing Expert', role: 'Vendor Development', image: '/team_1.png' },
              { name: 'Logistics Head', role: 'Customs & Shipping', image: '/team_2.png' },
              { name: 'QA Manager', role: 'Quality Assurance', image: '/team_3.png' }
            ].map((member, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 text-center hover:shadow-lg transition-all">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden shadow-md border-2 border-blue-100 dark:border-blue-900">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-bold mb-1 dark:text-white">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
