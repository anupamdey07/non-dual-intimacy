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
        <section id="hero"><HeroSection /></section>
        <section id="about"><ImageContentSection /></section>
        <section id="logos"><LogoMarquee /></section>
        <section id="features"><FeatureCards /></section>
        <section id="contact"><ContactSection /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
