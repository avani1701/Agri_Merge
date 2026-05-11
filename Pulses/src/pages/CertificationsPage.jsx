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

const CertificationsPage = () => {
  const certifications = [
    {
      id: "iso",
      title: "ISO 22000",
      provider: "International Standards",
      desc: "Adhering to global food safety management systems across our entire supply chain.",
      icon: <FileCheck className="w-10 h-10" />,
      color: "bg-blue-600"
    },
    {
      id: "apeda",
      title: "APEDA Member",
      provider: "Agri Export Authority",
      desc: "Certified member of the Agricultural and Processed Food Products Export Development Authority.",
      icon: <Globe className="w-10 h-10" />,
      color: "bg-green-600"
    },
    {
      id: "fssai",
      title: "FSSAI License",
      provider: "Government of India",
      desc: "Ensuring food safety and hygiene standards across all our facilities and operations.",
      icon: <Award className="w-10 h-10" />,
      color: "bg-orange-600"
    },
    {
      id: "spices",
      title: "Spices Board",
      provider: "Spices Board India",
      desc: "Official registration for the export of premium Indian spices to international markets.",
      icon: <CheckCircle2 className="w-10 h-10" />,
      color: "bg-purple-600"
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
    <div className="pt-20 bg-white">
      {/* Hero Header */}
      <section className="relative py-24 bg-blue-900 overflow-hidden text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 -left-20 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.nav 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 text-blue-300 text-sm mb-6"
          >
            <span>Home</span>
            <ArrowRight className="w-4 h-4" />
            <span className="text-white font-semibold">Certifications</span>
          </motion.nav>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6 max-w-3xl"
          >
            Validated by <span className="text-blue-400">Trust & Authority</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-2xl leading-relaxed"
          >
            Our promise to quality isn't just a claim—it's validated by national and international 
            regulatory bodies to ensure your peace of mind.
          </motion.p>
        </div>
      </section>

      {/* Certification Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className={`${cert.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {cert.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{cert.title}</h3>
                <p className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">{cert.provider}</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {cert.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Protocol Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center mb-16">
           <h2 className="text-4xl font-bold text-gray-900 mb-4">The Agri Merge Protocol</h2>
           <p className="text-gray-600 max-w-2xl mx-auto">Beyond certifications, we follow a strict internal quality check for every single consignment.</p>
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
                className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100"
              >
                <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-900">{step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Globe className="w-16 h-16 text-blue-600 mx-auto mb-8" />
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Compliant & Secure</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              International trade requires meticulous documentation and adherence to global law. 
              At <span className="text-blue-600 font-bold">Agri Merge Internationals</span>, we handle all compliance, 
              from phytosanitary certificates to customs documentation, ensuring a smooth path for your cargo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
                View Audit Reports
              </button>
              <button className="bg-white border-2 border-gray-100 text-gray-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">
                Download PDF Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificationsPage;
