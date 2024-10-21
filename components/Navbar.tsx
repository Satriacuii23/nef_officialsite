import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className={`w-full fixed top-0 left-0 p-4 flex justify-between items-center transition-all duration-300 z-50 ${
        isScrolled ? 'bg-transparent shadow-lg' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <div className={`text-2xl font-bold transition-all duration-300 ${isScrolled ? 'text-blue-700' : 'text-green-600'}`}>
        NEF TECHNOLOGY - ID
      </div>

      {/* Menu Items */}
      <div className={`hidden md:flex space-x-8 transition-all duration-300 font-bold ${isScrolled ? 'text-gray-600' : 'text-green-600'}`}>
        <a href="#" className="hover:text-rose-800">Beranda</a>
        <a href="#" className="hover:text-rose-800">Dokumentasi</a>
      </div>

      {/* Contact Button */}
      <motion.a
        href="#"
        className={`hidden md:block font-bold py-2 px-6 rounded-full transition-all duration-300 ${
          isScrolled ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-rose-800 border border-white text-white hover:bg-green-600 hover:text-gray-800'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Kontak Kami
      </motion.a>
    </motion.nav>
  );
};

export default Navbar;
