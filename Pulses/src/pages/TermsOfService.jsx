import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <div className="pt-20">
      {/* Premium Hero Banner */}
      <div className="relative overflow-hidden bg-[#1E3A8A] text-white">
        <div className="absolute inset-0">
          <img 
            src="/legal_hero_bg.png" 
            alt="Legal Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A]/50 to-[#1E3A8A]/70"></div>
        </div>

        <div className="relative container mx-auto px-6 py-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-[#2563EB] font-bold uppercase tracking-widest text-sm mb-4 block">Legal</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Terms of Service
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Rules and regulations for using our platform.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent opacity-50"></div>
      </div>

      {/* Content Section */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on Agri Merge Internationals' website for personal, non-commercial transitory viewing only.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Disclaimer</h2>
              <p>
                The materials on Agri Merge Internationals' website are provided on an 'as is' basis. Agri Merge Internationals makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Limitations</h2>
              <p>
                In no event shall Agri Merge Internationals or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Agri Merge Internationals' website.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
