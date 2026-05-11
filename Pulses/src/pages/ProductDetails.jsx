import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ShieldCheck, Globe, Truck } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();

  // Integrated product database
  const productData = {
    "1": {
      name: 'Fresh Garlic',
      category: 'Agri Commodities',
      image: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=2070&auto=format&fit=crop',
      desc: 'Our premium garlic is sourced from the fertile regions of India, known for producing bulbs with intense aroma and high medicinal value.',
      features: ['Long shelf life', 'Large bulb size', 'High Allicin content', 'Taint-free packing'],
      specs: [
        { label: 'Origin', value: 'Madhya Pradesh / Gujarat, India' },
        { label: 'Size', value: '40mm, 45mm, 50mm, 55mm+' },
        { label: 'Packing', value: '5kg, 10kg, 20kg Mesh Bags' },
        { label: 'Supply Ability', value: '500 MT per Month' }
      ]
    },
    "2": {
      name: 'Organic Soyabean',
      category: 'Seeds & Grains',
      image: 'https://images.unsplash.com/photo-1599599810694-b5b37304c041?q=80&w=2070&auto=format&fit=crop',
      desc: 'Top-grade non-GMO soyabean seeds harvested with care. Ideal for human consumption and oil extraction.',
      features: ['Non-GMO certified', 'High protein content', 'Minimal moisture', 'Uniform seed size'],
      specs: [
        { label: 'Origin', value: 'Maharashtra, India' },
        { label: 'Protein', value: '38% - 40% Min' },
        { label: 'Oil Content', value: '18% - 19% Min' },
        { label: 'Moisture', value: '10% Max' }
      ]
    },
    "3": {
      name: 'Premium Pulses',
      category: 'Lentils',
      image: 'https://images.unsplash.com/photo-1515942400420-2b98fed1f515?q=80&w=2070&auto=format&fit=crop',
      desc: 'Rich in nutrients and proteins, our pulses (Moong, Toor, Urad) are machine-cleaned and sortex-polished.',
      features: ['Foreign matter < 1%', 'Zero admixture', 'Rich in dietery fiber', 'Secure bulk packing'],
      specs: [
        { label: 'Varieties', value: 'Toor, Moong, Chana, Urad' },
        { label: 'Cleaning', value: 'Machine Cleaned / Sortex' },
        { label: 'Packing', value: '25kg / 50kg PP Bags' },
        { label: 'Shelf Life', value: '24 Months' }
      ]
    },
    "4": {
      name: 'Red Chilli',
      category: 'Spices',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop',
      desc: 'Authentic Guntur and Byadgi red chillies. Famous for their deep red color and varying heat levels to suit global cuisines.',
      features: ['Natural sun-dried', 'Zero artificial colors', 'Stemmed / Stem-less', 'Premium pungency'],
      specs: [
        { label: 'Origin', value: 'Andhra Pradesh, India' },
        { label: 'SHU (Heat)', value: '15,000 - 90,000 (Based on variety)' },
        { label: 'Color Value', value: '60 - 150 ASTA' },
        { label: 'Packing', value: '10kg / 25kg Jute Bags' }
      ]
    }
  };

  const product = productData[id];

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Link to="/products" className="text-blue-600 mt-4 inline-block underline">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <Link to="/products" className="flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors group">
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </Link>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-blue-900 font-bold text-sm shadow-sm">
                {product.category}
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 py-4"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">{product.name}</h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed italic border-l-4 border-blue-600 pl-6">
              "{product.desc}"
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" />
                  Key Highlights
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-500 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Specifications</h3>
                <div className="space-y-3">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between items-center text-sm border-b border-gray-200 pb-2 last:border-0">
                      <span className="text-gray-400 mr-4">{spec.label}</span>
                      <span className="text-gray-900 font-semibold text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-gray-100 pt-8">
              <div className="text-center">
                <Globe className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Global Export</span>
              </div>
              <div className="text-center">
                <ShieldCheck className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Quality Assured</span>
              </div>
              <div className="text-center">
                <Truck className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Secure Delivery</span>
              </div>
            </div>

            <button className="w-full mt-10 bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-blue-200 hover:bg-blue-700 transition-all">
              Inquire for Bulk Order
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
