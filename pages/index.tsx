import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServiceSection from "@/components/ServiceSection";
import ContactWhatsApp from "@/components/ContactWhatsapp";
import PricingSection from "@/components/PricingSection";
import FooterSection from "@/components/FooterSection";



const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ContactWhatsApp />
      <PricingSection />
      <FooterSection />
    </div>
  );
};

export default Home;
