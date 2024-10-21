import { motion } from "framer-motion";

const ServiceSection: React.FC = () => {
  return (
    <section className="relative bg-gray-50 py-16 px-4 overflow-hidden">
      {/* Background Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: -100, y: -100 }}
          animate={{ opacity: 0.6, x: 100, y: 100 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bg-blue-400 opacity-50 rounded-full w-96 h-96 top-0 left-0 animate-ping"
        />
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.4, y: -100 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bg-pink-400 opacity-50 rounded-full w-72 h-72 bottom-32 right-16 animate-pulse"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.6, scale: 1.5 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror' }}
          className="absolute bg-yellow-300 opacity-30 rounded-full w-80 h-80 top-40 right-20 animate-ping"
        />
      </div>

      <div className="max-w-7xl mx-auto text-center mb-12 relative z-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Buat Sesuatu yang Hebat</h2>
        <p className="text-gray-600 text-lg">
          Kami selalu berusaha untuk mengekspresikan diri kami dan mewujudkan impian kami. Jika Anda memiliki kesempatan
          untuk memainkan permainan hidup ini, Anda harus menghargai setiap momennya.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {/* Card 1: Pembuatan Website dan Aplikasi */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
        >
          <img 
            src="/images/website.png" 
            alt="Pembuatan Website dan Aplikasi" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end p-6">
            <h3 className="text-white text-2xl font-extrabold mb-2">Pembuatan Website dan Aplikasi</h3>
            <p className="text-gray-300">
              Kami menyediakan layanan pembuatan website dan aplikasi sesuai kebutuhan bisnis Anda, menggunakan teknologi terbaru dan desain yang responsif.
            </p>
          </div>
        </motion.div>

        {/* Card 2: Instalasi Jaringan */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
        >
          <img 
            src="/images/network.png" 
            alt="Instalasi Jaringan" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end p-6">
            <h3 className="text-white text-2xl font-extrabold mb-2">Instalasi Jaringan</h3>
            <p className="text-gray-300">
              Instalasi jaringan LAN, WAN, dan Wi-Fi untuk kebutuhan bisnis Anda, dengan konfigurasi yang aman dan andal.
            </p>
          </div>
        </motion.div>

        {/* Card 3: Data Manajemen Sistem */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
        >
          <img 
            src="/images/data.png" 
            alt="Data Manajemen Sistem" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end p-6">
            <h3 className="text-white text-2xl font-extrabold mb-2">Data Manajemen Sistem</h3>
            <p className="text-gray-300">
              Solusi pengelolaan data yang komprehensif untuk menyimpan, mengelola, dan menganalisis data Anda secara efisien dan aman.
            </p>
          </div>
        </motion.div>

        {/* Card 4: Perakitan Komputer */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
        >
          <img 
            src="/images/computer.png" 
            alt="Perakitan Komputer" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end p-6">
            <h3 className="text-white text-2xl font-extrabold mb-2">Perakitan Komputer</h3>
            <p className="text-gray-300">
              Layanan perakitan komputer sesuai spesifikasi yang Anda inginkan, mulai dari PC gaming hingga workstation performa tinggi.
            </p>
          </div>
        </motion.div>

      </div>
      {/* Background Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: -100, y: -100 }}
          animate={{ opacity: 0.6, x: 100, y: 100 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bg-blue-400 opacity-50 rounded-full w-96 h-96 top-0 left-0 animate-ping"
        />
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.4, y: -100 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bg-pink-400 opacity-50 rounded-full w-72 h-72 bottom-32 right-16 animate-pulse"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.6, scale: 1.5 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror' }}
          className="absolute bg-yellow-300 opacity-30 rounded-full w-80 h-80 top-40 right-20 animate-ping"
        />
      </div>

      {/* Status Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mt-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-5xl font-bold text-blue-600 mb-4">80</h2>
          <h4 className="text-xl font-semibold text-gray-700">Order</h4>
          <p className="text-gray-500">
            Dengan kualitas team yang baik maka terciptalah pemesanan yang meningkat.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-5xl font-bold text-blue-600 mb-4">20</h2>
          <h4 className="text-xl font-semibold text-gray-700">Pelanggan</h4>
          <p className="text-gray-500">
            Karena kepercayaan kepada kami , beberapa pelanggan banyak yang melakukan pemesanan berkala.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-5xl font-bold text-blue-600 mb-4">8</h2>
          <h4 className="text-xl font-semibold text-gray-700">Menunggu Proses</h4>
          <p className="text-gray-500">
            Pekerjaan yang kami lakukan disukai banyak pelanggan maka disitulah terjadi antrian untuk proses selanjutnya.
          </p>
        </motion.div>
      </div>
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-10">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Jadilah yang pertama menerima kabar</h2>
          <p className="text-gray-600 text-lg mb-6">
            Perusahaan Anda mungkin bukan perusahaan software, tetapi pada akhirnya, perusahaan software akan ada di bisnis Anda.
          </p>
          <div className="flex items-center space-x-4">
            <input 
              type="email" 
              placeholder="Email di sini" 
              className="w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-rose-800 hover:bg-green-600 text-white px-6 py-2 rounded-md transition">
              BERLANGGANAN
            </button>
          </div>
        </div>

        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full h-full"
        >
          <img 
            src="/logo.png" 
            alt="Beautiful Landscape" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;
