import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gray-00 py-16 px-4 ">
        {/* Cards Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 mt-10 max-w-6xl mx-auto px-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          
          {/* Animated Card with Image */}
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 3, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 100, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="bg-rose-900 p-6 rounded-lg shadow-lg text-center transform transition-transform"
          >
            <div className="mb-4">
              <img src="/images/experience.png" alt="Pengalaman" className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Pengalaman</h3>
            <p className="text-gray-100">Team NEF TECHNOLOGY memiliki pengalaman bertahun-tahun dalam bidang Technology dan dapat dipertanggungjawabkan kinerja kami.</p>
          </motion.div>

          {/* Animated Card with Image */}
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 3, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 100, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform"
          >
            <div className="mb-4">
              <img src="/images/consultation.png" alt="Konsultasi" className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Konsultasi Gratis</h3>
            <p className="text-gray-600">Kami juga menyediakan layanan Konsultasi Gratis bagi Anda. Untuk menyesuaikan dengan kebutuhan.</p>
          </motion.div>

          {/* Animated Card with Image */}
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 3, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 100, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="bg-rose-900 p-6 rounded-lg shadow-lg text-center transform transition-transform"
          >
            <div className="mb-4">
              <img src="/images/process.png" alt="Proses Tepat Waktu" className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Proses Tepat Waktu</h3>
            <p className="text-gray-100">Proses Transformasi tepat waktu sesuai dengan kesepakatan yang telah dibuat.</p>
          </motion.div>

        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Side (Text Section) */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-5xl font-bold text-gray-800">Tentang Kami</h2>
          <p className="text-gray-700">
            Transformasi digital yang kami lakukan membantu UMKM berkembang pesat. Kami percaya dengan teknologi, setiap usaha dapat mencapai potensi terbaiknya. Bergabunglah dengan kami dalam perjalanan ini.
          </p>
          <a href="#about" className="text-blue-600 hover:underline">
            Selebihnya Tentang Kami ? →
          </a>
        </motion.div>

        {/* Right Side (Features with Icons) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gray-300 text-white p-3 rounded-lg"
            >
              <img src="/images/services.png" alt="Icon 1" className="w-8 h-8" />
            </motion.div>
            <div>
              <h4 className="text-gray-800 font-semibold">Layanan Terbaik</h4>
              <p className="text-gray-600">Kami selalu memberikan solusi terbaik untuk klien kami.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gray-300 text-white p-3 rounded-lg"
            >
              <img src="/images/innovation.png" alt="Icon 2" className="w-8 h-8" />
            </motion.div>
            <div>
              <h4 className="text-gray-800 font-semibold">Inovasi Teknologi</h4>
              <p className="text-gray-600">Kami menggunakan teknologi terbaru untuk mendukung usaha Anda.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gray-300 text-white p-3 rounded-lg"
            >
              <img src="/images/support.png" alt="Icon 3" className="w-8 h-8" />
            </motion.div>
            <div>
              <h4 className="text-gray-800 font-semibold">Dukungan 24/7</h4>
              <p className="text-gray-600">Kami selalu ada untuk membantu Anda kapan saja.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
