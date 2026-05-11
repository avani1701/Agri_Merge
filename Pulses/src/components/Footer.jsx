import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-blue-900 mb-4 block">
              AGRI MERGE <span className="text-blue-500">INTERNATIONALS</span>
            </Link>
            <p className="text-gray-500 max-w-sm text-sm">
              Connecting Indian Produce with Global Demand through trust and excellence. Sourcing the finest agricultural products for the world.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-blue-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
              <li><Link to="/products" className="hover:text-blue-600">Products</Link></li>
              <li><Link to="/certifications" className="hover:text-blue-600">Certifications</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-900 mb-4">Social Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-50 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-50 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-50 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-50 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-100 pt-8 mt-8">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Agri Merge Internationals. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center text-blue-600 font-bold text-sm"
          >
            BACK TO TOP 
            <div className="ml-2 p-1 border border-blue-600 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
