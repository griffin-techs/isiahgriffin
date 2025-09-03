import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import BookingSection from '@/components/BookingSection';
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
      duration: 1000,
      easing: 'ease-out-cubic',
      once: false,
      offset: 100,
      delay: 50,
      mirror: true,
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
        <div data-aos="zoom-in-up" data-aos-duration="1200">
          <About />
        </div>
        <div data-aos="slide-up" data-aos-delay="100" data-aos-duration="1000">
          <Statistics />
        </div>
        <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1100">
          <TechStack />
        </div>
        <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1200">
          <Projects />
        </div>
        <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
          <Skills />
        </div>
        <div data-aos="flip-up" data-aos-delay="100" data-aos-duration="1100">
          <Experience />
        </div>
        <div data-aos="slide-up" data-aos-delay="150" data-aos-duration="1200">
          <BookingSection />
        </div>
        <div data-aos="zoom-in-down" data-aos-delay="200" data-aos-duration="1000">
          <Testimonials />
        </div>
        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">
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
