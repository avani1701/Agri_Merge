import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';

const TermsOfService = () => {
  return (
    <div className="pt-20 bg-white dark:bg-slate-900 transition-colors">
      <PageHero 
        title="Terms of Service"
        tagline="Legal"
        desc="Rules and regulations for using our platform."
        bgImage="/legal_hero_bg.png"
      />

      {/* Content Section */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms & Incoterms</h2>
              <p>
                By accessing this platform or initiating inquiries, you agree to be bound by these Terms of Service, complying fully with international export-import guidelines, Indian trade regulations, and standard Incoterms (Incoterms 2020) including FOB, CIF, and CFR structures.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Quality Specifications & Natural Variations</h2>
              <p>
                Agri Merge Internationals guarantees that all agricultural commodities (including garlic, soyabean, pulses, and premium spices) conform strictly to quality parameters, purity limits, and moisture thresholds designated in the finalized Proforma Invoice. Natural agricultural products are subject to minor physical variations within globally accepted tolerances.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Trade Documentation & Shipments</h2>
              <p>
                Shipment timelines are established in contractual agreements. We commit to obtaining and delivering vital trade documents including the Bill of Lading, Phytosanitary Certificate, Fumigation Certificate, Certificate of Origin, and accredited third-party lab inspection certificates.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Payment Terms, Contracts & Force Majeure</h2>
              <p>
                All wholesale trades are executed based on agreed financial terms (e.g., irrevocable Letters of Credit, Advance Telegraphic Transfer, or CAD). Neither party shall be held liable for delays or failures resulting from Force Majeure events, including natural crop disasters, trade embargoes, harbor closures, or sudden shipping container shortages.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
