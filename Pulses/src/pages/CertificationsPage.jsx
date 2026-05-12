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
      id: "gst",
      title: "GST Certification",
      provider: "Government of India",
      desc: "Goods and Services Tax registration for compliant domestic and international trade.",
      icon: '/document_icon.png'
    },
    {
      id: "iec",
      title: "Import Export Code (IEC)",
      provider: "DGFT",
      desc: "Official Import Export Code issued by the Directorate General of Foreign Trade.",
      icon: '/globe_icon.png'
    },
    {
      id: "coffee",
      title: "Coffee Board Certification",
      provider: "Coffee Board of India",
      desc: "Certified registration for the export of premium Indian coffee.",
      icon: '/award_icon.png'
    },
    {
      id: "spice",
      title: "Spice Board Certification",
      provider: "Spices Board India",
      desc: "Official registration for the export of premium Indian spices.",
      icon: '/checkmark_icon.png'
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
      {/* Premium Hero Banner */}
      <div className="relative overflow-hidden bg-[#1E3A8A] text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/cert_hero_bg.png" 
            alt="Security Seals and Growth" 
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
            <span className="text-[#2563EB] font-bold uppercase tracking-widest text-sm mb-4 block">Trust & Compliance</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Certifications
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Our promise to quality isn't just a claim—it's validated by national and international regulatory bodies.
            </p>
          </motion.div>
        </div>

        {/* Glassmorphism accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent opacity-50"></div>
      </div>

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
                <div className="w-16 h-16 mb-6 group-hover:scale-110 transition-transform">
                  <img src={cert.icon} alt={cert.title} className="w-full h-full object-contain mix-blend-multiply" />
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
