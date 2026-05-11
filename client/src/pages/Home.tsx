// X-Power Home Page
// Design: Clean Energy Future (Eco-Tech Modernism)
// Sections: Navbar → Hero → Products → Advantages → News → Contact → Footer
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import ContactSection from '@/components/ContactSection';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <AdvantagesSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
