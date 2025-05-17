import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', href: '#home' }, // Home scrolls to top section
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 px-4 py-2 bg-gradient-to-b from-[#0D1729]/95 via-[#082E5D]/80 to-transparent backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.img
          src={logo}
          alt="AM Autodesigners Logo"
          className="h-16 w-auto object-contain brightness-125"
          whileHover={{ scale: 1.05 }}
        />

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-[#F5F7FE] hover:text-[#0527EC] font-medium tracking-wide transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <button
          className="md:hidden text-[#F5F7FE] p-1 rounded-lg hover:bg-[#F5F7FE]/10 transition-colors -translate-y-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <span className={`block w-full h-0.5 bg-[#F5F7FE] transform transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`block w-full h-0.5 bg-[#F5F7FE] transition duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-full h-0.5 bg-[#F5F7FE] transform transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-[#0D1729]/98 via-[#082E5D]/95 to-[#111315]/90 backdrop-blur-md"
          >
            <div className="p-4 space-y-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-[#F5F7FE]/90 hover:text-[#0527EC] py-3 px-4 rounded-lg hover:bg-[#F5F7FE]/5 transition-all"
                  whileHover={{ x: 10 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;