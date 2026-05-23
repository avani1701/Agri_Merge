import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Agri Commodities', 'Seeds & Grains', 'Lentils'];

  const products = [
    {
      id: 1,
      name: 'Fresh Garlic',
      category: 'Agri Commodities',
      image: '/garlic.jpg',
      desc: 'Premium quality fresh garlic bulbs with high pungency and long shelf life.'
    },
    {
      id: 2,
      name: 'Soyabean',
      category: 'Seeds & Grains',
      image: '/soyabean_v2.png',
      desc: 'Non-GMO soyabean seeds rich in protein, sourced from sustainable farms.'
    },
    {
      id: 3,
      name: 'Premium Pulses',
      category: 'Lentils',
      image: '/pulses.png',
      desc: 'A wide range of high-grade pulses and lentils, cleaned and sorted for export.'
    }
  ];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="products" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="text-left">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block"
            >
              Our Core Products
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-900 dark:text-white"
            >
              Premium Agri Commodities
            </motion.h2>
          </div>
          <Link 
            to="/products"
            className="mt-6 md:mt-0 flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors group"
          >
            VIEW MORE AGRI COMMODITIES
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {filteredProducts.map((product) => (
            <motion.div 
              key={product.id}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/5]">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white text-sm font-medium">View Details</span>
                  </div>
                </div>
                <p className="text-blue-600 text-xs font-bold uppercase mb-1 tracking-wider">{product.category}</p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{product.desc}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
