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
