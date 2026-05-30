import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-900 transition-colors py-12 border-t border-gray-100 dark:border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/logo_main.png" alt="Agri Merge" className="h-16 w-auto object-contain" />
              <div className="text-xl font-bold text-blue-900 dark:text-white">
                AGRI MERGE <span className="text-blue-500">INTERNATIONALS</span>
              </div>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm text-sm mb-6">
              Connecting Indian Produce with Global Demand through trust and excellence. Sourcing the finest agricultural products for the world.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-blue-50 dark:bg-slate-800 rounded-full text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-all shadow-sm border border-blue-100 dark:border-slate-700"
                title="Follow us on Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-blue-50 dark:bg-slate-800 rounded-full text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all shadow-sm border border-blue-100 dark:border-slate-700"
                title="Connect on LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-bold text-blue-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
              <li><Link to="/products" className="hover:text-blue-600">Products</Link></li>
              <li><Link to="/certifications" className="hover:text-blue-600">Certifications</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Products */}
          <div>
            <h4 className="font-bold text-blue-900 dark:text-white mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><Link to="/products" className="hover:text-blue-600">Agri Commodities</Link></li>
              <li><Link to="/products" className="hover:text-blue-600">Spices</Link></li>
              <li><Link to="/products" className="hover:text-blue-600">Lentils & Pulses</Link></li>
              <li><Link to="/products" className="hover:text-blue-600">Grains</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="font-bold text-blue-900 dark:text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>info@agrimerge.in</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600" />
                <span>+91 70005 68721</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-600 mt-1" />
                <span>Indore, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-100 dark:border-slate-800 pt-8 mt-8">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Agri Merge Internationals. All rights reserved.
          </p>
          
          <div className="flex space-x-6 text-sm text-gray-400 mb-4 md:mb-0">
            <Link to="/privacy-policy" className="hover:text-blue-600">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-blue-600">Terms of Service</Link>
          </div>
          
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
