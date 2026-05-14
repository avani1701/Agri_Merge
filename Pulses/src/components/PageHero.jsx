import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const PageHero = ({ title, tagline, desc, bgImage }) => {
  return (
    <div className="relative overflow-hidden bg-slate-900 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
      </div>

      {/* Abstract Background Patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        {/* Subtle grid texture */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative container mx-auto px-6 py-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {tagline && (
            <span className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4 block">{tagline}</span>
          )}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
            {title}
          </h1>
          {desc && (
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {desc}
            </p>
          )}
        </motion.div>
      </div>

      {/* Glassmorphism accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
    </div>
  );
};

PageHero.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string,
  desc: PropTypes.string,
  bgImage: PropTypes.string.isRequired,
};

export default PageHero;
