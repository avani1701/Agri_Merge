import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              How we collect, use, and protect your data.
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us when you fill out forms on our website, inquire about products, or communicate with us. This may include your name, email address, phone number, company name, and details about your inquiry.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to respond to your inquiries, provide the services you request, process transactions, and send you related information including confirmations and invoices.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Data Security</h2>
              <p>
                We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Cookies</h2>
              <p>
                Our website may use cookies to enhance user experience. You can choose to set your web browser to refuse cookies, or to alert you when cookies are being sent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at info@agrimerge.in.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
