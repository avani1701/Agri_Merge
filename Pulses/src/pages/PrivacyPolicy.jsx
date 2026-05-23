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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Sourcing & Business Information We Collect</h2>
              <p>
                At Agri Merge Internationals, we collect corporate and trade-related information required to facilitate international agricultural trade. This includes buyer specifications, import licenses, tax registration certificates, port of discharge details, and direct contact information (name, corporate email, phone number, and company credentials) submitted through our inquiry portal.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Processing, Logistics & Custom Clearance</h2>
              <p>
                The information we collect is strictly utilized to process proforma invoices, secure space with global shipping liners, obtain custom clearances, and issue legal export documentation—including Certificates of Origin, Phytosanitary Certificates from the Ministry of Agriculture, and Fumigation/Inspection reports.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Data Security & International Trade Compliance</h2>
              <p>
                We execute high-grade security measures to safeguard proprietary agricultural specifications, packing preferences, and sensitive financial documents (such as Letters of Credit or Telegraphic Transfer records) from unauthorized access, disclosure, or altering.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Third-Party Disclosures for Freight & Quality</h2>
              <p>
                To complete global shipments, we securely share necessary shipment parameters with accredited third-party logistics companies, custom clearing agents, and international quality inspection houses (such as SGS or Geo-Chem) according to global trade requirements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Contact Our Legal & Compliance Desk</h2>
              <p>
                For questions regarding this policy, phytosanitary compliance, or global trade data protection, please reach out directly to our compliance desk at info@agrimerge.in.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
