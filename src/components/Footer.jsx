import { motion } from 'framer-motion';
import { Facebook, Instagram, Phone, Mail, MapPin, Youtube, } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#030B1B] border-t border-white/10 py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <img src={logo} alt="AM Autodesigners Logo" className="h-16 w-auto" />
            <p className="text-[#F5F7FE]/80 text-sm">
              Transforming vehicles into masterpieces since 2010. Your vision, our expertise.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="bg-white/10 p-2 rounded-full hover:bg-[#0527EC]/20 transition-colors">
                <Facebook className="w-5 h-5 text-[#F5F7FE]" />
              </a>
              <a href="https://www.instagram.com/am_autodesigners?igsh=MWQ3d2loaW9jZHhwbw==" target="_blank" rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#0527EC]/20 transition-colors">
                <Instagram className="w-5 h-5 text-[#F5F7FE]" />
              </a>
              <a href="https://youtube.com/@amautodesigners?si=mPybjCN7aephxKfo" target="_blank" rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#0527EC]/20 transition-colors">
                <Youtube className="w-5 h-5 text-[#F5F7FE]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-[#F5F7FE] text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} 
                    className="text-[#F5F7FE]/70 hover:text-[#2D91FF] transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-[#F5F7FE] text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#2D91FF] flex-shrink-0 mt-1" />
                <p className="text-[#F5F7FE]/70 text-sm">
                  5/339-4A, Ramakrishna Nagar,<br />
                  Near Sanjeev Nagar, Pannimadai Post,<br />
                  Coimbatore - 641017
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#2D91FF]" />
                <a href="mailto:amautodesigners@gmail.com" 
                  className="text-[#F5F7FE]/70 hover:text-[#2D91FF] transition-colors text-sm">
                  amautodesigners@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-[#F5F7FE] text-lg font-semibold">Business Hours</h4>
            <div className="space-y-3 text-sm text-[#F5F7FE]/70">
              <p>Monday - Saturday</p>
              <p>9:00 AM - 7:00 PM</p>
              <div className="pt-4">
                <p className="font-medium text-[#2D91FF]">Business Enquiries:</p>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#2D91FF]" />
                    <p>+91 97903 84400</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-[#F5F7FE]/60 text-sm">
            © {new Date().getFullYear()} AM Autodesigners. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;