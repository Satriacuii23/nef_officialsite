import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url('/bg.jpg')` }} // Ganti dengan path background yang sesuai
    >
      {/* Background Animated Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'mirror' }}
          className="absolute bg-blue-400 opacity-50 rounded-full w-96 h-96 top-20 left-10 animate-ping"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1.5 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror' }}
          className="absolute bg-rose-800 opacity-50 rounded-full w-72 h-72 bottom-32 right-16 animate-ping"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1.2 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror' }}
          className="absolute bg-yellow-300 opacity-40 rounded-full w-80 h-80 top-56 right-20 animate-pulse"
        />
      </div>

      {/* Overlay Layer for Dark Effect */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Navbar */}
      <div className="absolute top-0 w-full flex justify-between items-center px-6 py-4 md:px-8">
        {/* Tambahkan logo di sebelah kiri teks NEF TECH - ID */}
        <div className="flex items-center space-x-3">
          <img src="/logo2.png" alt="Logo" className="w-50 h-20 bg-rose-800 bg-opacity-90" /> {/* Logo */}
          <h1 className="text-white text-lg font-bold"></h1>
        </div>
        <nav className="hidden md:flex space-x-8 text-white">
          <a href="# " className="hover:underline">BERANDA</a>
          <a href="/AboutSection" className="hover:underline">TENTANG KAMI</a>
          <a href="/ContactSection" className="hover:underline">KONTAK KAMI</a>
        </nav>
        <a href="#" className="hidden md:inline-block px-6 py-2 bg-rose-900 text-white rounded-full hover:bg-green-600 hover:text-black transition">
          MULAI TRANSFORMASI
        </a>
      </div>

      {/* Mobile Menu */}
      <div className="absolute top-0 right-0 p-4 md:hidden">
        <button className="text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 text-center max-w-2xl mx-auto px-4"
      >
        <span className="text-4xl font-extrabold text-white border-white"> TRANSFORMASI DIGITAL</span>
        <span className="text-6xl font-extrabold text-white"> untuk UMKM </span>
        <p className="text-md sm:text-lg md:text-xl text-white mt-4 mb-10">
          Dukung perkembangan UMKM dengan solusi digital terdepan. Raih kesuksesan dengan memanfaatkan teknologi untuk memperluas pasar dan meningkatkan efisiensi.
        </p>

        {/* Social Links */}
        <p className="mb-4 font-bold text-yellow-300">Terhubung Bersama Kami :</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-white text-2xl">
            <img src="/images/instagram.png" alt="Instagram" className="w-8 h-8" />
          </a>
          <a href="#" className="text-white text-2xl">
            <img src="/images/google.png" alt="Google" className="w-8 h-8" />
          </a>
        </div>
      </motion.div>

    </section>
  );
};

export default HeroSection;
