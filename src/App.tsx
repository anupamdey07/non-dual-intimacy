import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ImageContentSection from './components/ImageContentSection';
import LogoMarquee from './components/LogoMarquee';
import FeatureCards from './components/FeatureCards';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ImageContentSection />
        <LogoMarquee />
        <FeatureCards />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
