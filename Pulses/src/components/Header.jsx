import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Contact', href: '/contact' },
  ];

  const headerOpacity = isScrolled || location.pathname !== '/' ? 'bg-white dark:bg-slate-900 shadow-md py-2 md:py-4' : 'bg-transparent py-3 md:py-6';
  const textColor = isScrolled || location.pathname !== '/' ? 'text-blue-900 dark:text-white' : 'text-white';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerOpacity}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo_main.png" alt="Agri Merge" className="h-14 md:h-20 w-auto object-contain" />
          <span className={`text-lg md:text-2xl font-bold tracking-tight ${textColor}`}>
            AGRI MERGE <span className="font-extrabold text-blue-500">INTERNATIONALS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-medium transition-colors ${
                isScrolled || location.pathname !== '/' ? 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400' : 'text-white hover:text-blue-200'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            Get in touch
          </Link>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              isScrolled || location.pathname !== '/' ? 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-yellow-400" />}
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X className={isScrolled || location.pathname !== '/' ? 'text-gray-900 dark:text-white' : 'text-white'} />
          ) : (
            <Menu className={isScrolled || location.pathname !== '/' ? 'text-gray-900 dark:text-white' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800 absolute top-full left-0 w-full shadow-lg overflow-hidden"
          >
            <div className="flex flex-col items-center space-y-4 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-700 dark:text-gray-200 font-medium py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-2 rounded-full font-medium active:scale-95 transition-transform"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in touch
              </Link>
              <button
                onClick={() => {
                  toggleTheme();
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 font-medium py-2 hover:text-blue-600 transition-colors"
              >
                {theme === 'light' ? (
                  <>
                    <Moon className="w-5 h-5" />
                    <span>Dark Mode</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-5 h-5 text-yellow-500" />
                    <span>Light Mode</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
