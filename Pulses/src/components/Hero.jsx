import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Scene3D from './Scene3D';
import heroVideo1 from '../assets/video/f_a_ed_e_c_f_f_e_mp_.mp4';
import heroVideo2 from '../assets/video/pXvD_Wmp_.mp4';
import heroVideo3 from '../assets/video/f_d_c_e_b_cb_mp_.mp4';

const Hero = () => {
  const videos = [heroVideo1, heroVideo2, heroVideo3];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    videoRefs.forEach((ref, index) => {
      if (ref.current) {
        if (index === currentVideoIndex) {
          ref.current.currentTime = 0;
          ref.current.play().catch(err => console.warn("Autoplay blocked", err));
        } else {
          ref.current.pause();
        }
      }
    });
  }, [currentVideoIndex]);

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative h-screen flex items-start pt-32 md:items-center md:pt-0 overflow-hidden bg-slate-950">
      {/* 3D Background */}
      <Scene3D />

      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {videos.map((video, index) => (
          <video
            key={index}
            ref={videoRefs[index]}
            src={video}
            muted
            playsInline
            onEnded={handleVideoEnded}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideoIndex ? 'opacity-40' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10"></div>

      <div className="container mx-auto px-6 relative z-20 text-white">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block px-4 py-1 rounded-full bg-blue-600/30 border border-blue-400/50 text-blue-300 text-sm font-semibold mb-6"
          >
            Garlic • Soyabean • Pulses • Spices
          </motion.span>
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
          >
            From Indian Origins to <span className="text-blue-400">Global Markets</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-200 mb-8 max-w-2xl"
          >
            At Agri Merge Internationals, we deliver premium Indian products worldwide with Reliability, Transparency, and Trust. Connecting direct produce with international demand.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link 
              to="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center transition-all group"
            >
              Explore Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/about"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-center transition-all"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 z-20 hidden md:block">
        <div className="flex items-center space-x-3 bg-slate-900/60 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl shadow-xl">
          <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
            <ShieldCheck className="w-6 h-6" strokeWidth={2} />
          </div>
          <div className="text-left">
            <p className="text-2xl font-bold text-white leading-none mb-1">100%</p>
            <p className="text-gray-400 text-[10px] uppercase tracking-widest font-semibold">Quality Assurance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
