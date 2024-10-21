import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

const FooterSection: React.FC = () => {
  return (
    <footer className="relative bg-gray-200 py-10 px-4 overflow-hidden">
      {/* Background Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Rectangle Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.6, x: 50 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bg-purple-500 opacity-30 w-72 h-72 top-0 left-0 rotate-45"
        />
        {/* Circle Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1.2 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror' }}
          className="absolute bg-blue-400 opacity-50 rounded-full w-40 h-40 bottom-10 right-20"
        />
        {/* Smaller Circle */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.5, y: -50 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bg-yellow-300 opacity-30 rounded-full w-20 h-20 top-32 right-10"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Links */}
        <div className="flex flex-wrap justify-center space-x-4 md:space-x-8 text-gray-700 mb-6">
          <a href="#" className="hover:underline">BERANDA</a>
          <a href="#" className="hover:underline">TENTANG KAMI</a>
          <a href="#" className="hover:underline">KONTAK KAMI</a>
          
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGoogle} className="text-gray-600 hover:text-gray-800 text-2xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-gray-600 hover:text-gray-800 text-2xl" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-gray-600 hover:text-gray-800 text-2xl" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          Copyright © {new Date().getFullYear()} NEF Digital Solusi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
