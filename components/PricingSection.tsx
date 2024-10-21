import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"; // Import WhatsApp icon

const PricingSection: React.FC = () => {
  return (
    <section className="relative bg-gray-50 py-16 px-4 overflow-hidden">
      {/* Background Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circle Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bg-indigo-500 opacity-50 rounded-full w-96 h-96 top-20 left-0"
        />
        {/* Diagonal Rectangle Animation */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.5, x: -100 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bg-blue-300 opacity-30 w-72 h-72 top-40 right-10 rotate-45"
        />
        {/* Small Circle Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.6, scale: 1.2 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror' }}
          className="absolute bg-yellow-400 opacity-50 rounded-full w-32 h-32 bottom-32 right-32"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Harga Layanan Kami</h2>
        <p className="text-gray-600 text-lg">
          Dengan kualitas terbaik tetapi harga masih dapat terjangkau cocok untuk para pelaku Usaha dan UMKM.
        </p>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-left mb-6 md:mb-0 md:w-1/2">
          <h3 className="text-2xl font-bold text-gray-800">Semua Layanan</h3>
          <p className="text-gray-600 mb-4">
            Dengan 4 Layanan yang kami miliki dan kami berfokus membangun Transformasi Digital dengan para pelaku Usaha dan UMKM guna menaikan <br />
            nilai bagi usaha mereka. Kami menetapkan harga yang sangat terjangkau.
          </p>

          <h4 className="text-lg font-semibold text-gray-700 mb-2">Apa yang Anda dapatkan?</h4>
          <ul className="text-gray-600 space-y-2">
            <li>✓ Gratis Konsultasi </li>
            <li>✓ Pelayanan Maksimal</li>
            <li>✓ Revisi Tak Terbatas</li>
            <li>✓ Bantuan dari Team Kami ( Aftersales )</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right md:w-1/2">
          <p className="text-rose-800 mb-2 font-extrabold">Segera Transformasi</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Start from<br />Rp. 3.000.000</h2>

          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/6283807826390" // Ganti dengan nomor WhatsApp yang sesuai
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-md font-bold hover:bg-green-700 transition flex items-center justify-center space-x-2"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
            <span>Hubungi Kami</span>
          </a>

          <p className="text-gray-400 text-sm mt-2 font-bold">Dapatkan Harga Diskon (S&K berlaku)</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
