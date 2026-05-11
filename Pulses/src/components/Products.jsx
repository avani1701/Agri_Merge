import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Fresh Garlic',
      category: 'Agri Commodities',
      image: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=2070&auto=format&fit=crop',
      desc: 'Premium quality fresh garlic bulbs with high pungency and long shelf life.'
    },
    {
      id: 2,
      name: 'Organic Soyabean',
      category: 'Seeds & Grains',
      image: 'https://images.unsplash.com/photo-1599599810694-b5b37304c041?q=80&w=2070&auto=format&fit=crop',
      desc: 'Non-GMO soyabean seeds rich in protein, sourced from sustainable farms.'
    },
    {
      id: 3,
      name: 'Premium Pulses',
      category: 'Lentils',
      image: 'https://images.unsplash.com/photo-1515942400420-2b98fed1f515?q=80&w=2070&auto=format&fit=crop',
      desc: 'A wide range of high-grade pulses and lentils, cleaned and sorted for export.'
    },
    {
      id: 4,
      name: 'Red Chilli',
      category: 'Spices',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop',
      desc: 'Consistent quality dry red chillies with perfect heat levels for global requirements.'
    }
  ];

  return (
    <section id="products" className="py-24 bg-white">
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
              className="text-4xl font-bold text-gray-900"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: product.id * 0.1 }}
              viewport={{ once: true }}
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
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{product.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
