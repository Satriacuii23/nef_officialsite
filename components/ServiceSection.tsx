import { useState } from "react";
import { motion } from "framer-motion";

const ServiceSection: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubscribe = async () => {
    if (email === "") {
      alert("Masukkan email terlebih dahulu.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/subscribe", { // Endpoint server Express.js
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Email berhasil dikirim!");
        setEmail(""); // Reset email input setelah berhasil
      } else {
        alert("Terjadi kesalahan, silakan coba lagi.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Gagal mengirim email. Coba beberapa saat lagi.");
    }
  };

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

      {/* Input Email dan Button BERLANGGANAN */}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Menangani perubahan input
              className="w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              className="bg-rose-800 hover:bg-green-600 text-white px-6 py-2 rounded-md transition"
              onClick={handleSubscribe} // Memanggil function handleSubscribe saat diklik
            >
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
