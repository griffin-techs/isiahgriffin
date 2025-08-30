import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollProgress from '@/components/ScrollProgress';
import ThemeToggle from '@/components/ThemeToggle';
import Statistics from '@/components/Statistics';
import Testimonials from '@/components/Testimonials';
import TechStack from '@/components/TechStack';
import PWAInstallPrompt from '@/components/PWAInstallPrompt';
import AIChatbot from '@/components/AIChatbot';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <ThemeToggle />
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <div data-aos="fade-up">
          <About />
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <Statistics />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <TechStack />
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <Projects />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <Skills />
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <Experience />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <Testimonials />
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <Contact />
        </div>
        <Footer />
      </main>
      <PWAInstallPrompt />
      <AIChatbot />
    </>
  );
};

export default Index;
