import React from 'react';
import { motion } from 'framer-motion';
import {
  FileCheck,
  ShieldCheck,
  Globe,
  Award,
  CheckCircle2,
  Search,
  Lock,
  ArrowRight
} from 'lucide-react';
import PageHero from '../components/PageHero';

const CertificationsPage = () => {
  const certifications = [
    {
      id: "iec",
      title: "Import Export Code (IEC)",
      provider: "DGFT",
      desc: "Official Import Export Code issued by the Directorate General of Foreign Trade.",
      icon: '/globe_icon.png'
    },
    {
      id: "gst",
      title: "GST Certification",
      provider: "Government of India",
      desc: "Goods and Services Tax registration for compliant domestic and international trade.",
      icon: '/document_icon.png'
    },
    {
      id: "fssai",
      title: "FSSAI Certification",
      provider: "Food Safety & Standards Authority of India",
      desc: "Central licensing ensuring complete compliance with food safety and nutritional standards for global markets.",
      icon: '/shield_icon.png'
    },
    {
      id: "apeda",
      title: "APEDA Certification",
      provider: "Ministry of Commerce, Govt. of India",
      desc: "Registration with the Agricultural and Processed Food Products Export Development Authority for premium Indian agricultural exports.",
      icon: '/award_icon.png'
    },
    {
      id: "spice",
      title: "SPICES BOARD Certification",
      provider: "Spices Board India",
      desc: "Official registration for the export of premium Indian spices.",
      icon: '/checkmark_icon.png'
    },
    {
      id: "coi",
      title: "Certificate Of Origin COI",
      provider: "Chamber of Commerce / Ministry of Agriculture",
      desc: "Legal export documentation validating the Indian origin and quality standards of our shipments.",
      icon: '/document_icon.png'
    }
  ];

  const qualitySteps = [
    {
      title: "Multi-Stage Inspection",
      desc: "Rigorous physical and chemical testing at every stage of sourcing and packing.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Taint-Free Packing",
      desc: "Eco-friendly, food-grade packaging that preserves aroma and freshness.",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Traceability",
      desc: "Full transparency from the farm origin to the final delivery destination.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  return (
    <div className="pt-20 bg-white dark:bg-slate-900 transition-colors">
      <PageHero 
        title="Certifications"
        tagline="Trust & Compliance"
        desc="Our promise to quality isn't just a claim—it's validated by national and international regulatory bodies."
        bgImage="/cert_hero_bg.png"
      />

      {/* Certification Grid */}
      <section className="py-24 bg-white dark:bg-slate-900 transition-colors">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all group"
              >
                <div className="w-16 h-16 mb-6 group-hover:scale-110 transition-transform">
                  <img src={cert.icon} alt={cert.title} className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal dark:invert" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{cert.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">{cert.provider}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {cert.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Protocol Section */}
      <section className="py-24 bg-gray-50 dark:bg-slate-800/50 relative overflow-hidden transition-colors">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">The Agri Merge Protocol</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Beyond certifications, we follow a strict internal quality check for every single consignment.</p>
        </div>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualitySteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-lg transition-all"
              >
                <div className="bg-blue-50 dark:bg-slate-700 w-14 h-14 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{step.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 bg-white dark:bg-slate-900 text-center transition-colors">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Globe className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-8" />
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Compliant & Secure</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
              International trade requires meticulous documentation and adherence to global law.
              At <span className="text-blue-600 dark:text-blue-400 font-bold">Agri Merge Internationals</span>, we handle all compliance,
              from APEDA and phytosanitary certificates to customs documentation, ensuring a smooth path for your cargo. Download our official corporate brochure to explore our complete export catalog and grading standards.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-900/30">
                View Brochure
              </button>
              <button className="bg-white dark:bg-slate-800 border-2 border-gray-100 dark:border-slate-700 text-gray-700 dark:text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-slate-700 transition-all">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificationsPage;
