import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactWhatsApp: React.FC = () => {
  return (
    <div>
      {/* Tombol WhatsApp di ujung kanan bawah halaman */}
      <a 
        href="https://wa.me/628380782639090" // Ganti dengan nomor WhatsApp yang sesuai
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
        title="Hubungi kami via WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
      </a>
    </div>
  );
};

export default ContactWhatsApp;
