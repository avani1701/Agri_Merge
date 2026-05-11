import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Scene3D from './Scene3D';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

const Hero = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2074&auto=format&fit=crop",
      title: "Garlic",
      tagline: "High-Quality Bulbs Sourced Locally"
    },
    {
      image: "https://images.unsplash.com/photo-1599599810694-b5b37304c041?q=80&w=2070&auto=format&fit=crop",
      title: "Soyabean",
      tagline: "Nutrient-Rich Non-GMO Seeds"
    },
    {
      image: "https://images.unsplash.com/photo-1515942400420-2b98fed1f515?q=80&w=2070&auto=format&fit=crop",
      title: "Pulses",
      tagline: "Premium Lentils for Global Markets"
    }
  ];

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-slate-950">
      {/* 3D Background */}
      <Scene3D />

      {/* Swiper Slider */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute bottom-20 left-6 z-30 md:hidden">
                   <p className="text-blue-400 font-bold tracking-widest text-sm uppercase">{slide.tagline}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10"></div>

      <div className="container mx-auto px-6 relative z-20 text-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-600/30 border border-blue-400/50 text-blue-300 text-sm font-semibold mb-6">
            Garlic • Soyabean • Pulses • Spices
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            From Indian Origins to <span className="text-blue-400">Global Markets</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            At Agri Merge Internationals, we deliver premium Indian products worldwide with reliability, transparency, and trust. Connecting direct produce with international demand.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center transition-all group">
              Explore Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-bold transition-all">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 z-20 hidden md:block">
        <div className="flex space-x-4">
          <div className="text-right">
            <p className="text-4xl font-bold text-white">98.6%</p>
            <p className="text-gray-400 text-sm">Customer Satisfaction</p>
          </div>
          <div className="h-10 w-[1px] bg-white/30 mt-2"></div>
          <div className="text-right">
            <p className="text-4xl font-bold text-white">95%</p>
            <p className="text-gray-400 text-sm">Quality Assurance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
