import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';

const PrivacyPolicy = () => {
  return (
    <div className="pt-20 bg-white dark:bg-slate-900 transition-colors">
      <PageHero 
        title="Privacy Policy"
        tagline="Legal"
        desc="How we collect, use, and protect your data."
        bgImage="/legal_hero_bg.png"
      />

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
