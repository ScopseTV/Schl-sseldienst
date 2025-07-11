import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/sections/HeroSection';
import ServicesSection from '@/sections/ServicesSection';
import AboutUsSection from '@/sections/AboutUsSection';
import ContactSection from '@/sections/ContactSection';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
