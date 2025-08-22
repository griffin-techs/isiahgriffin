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

const Index = () => {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <ThemeToggle />
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Statistics />
        <TechStack />
        <Projects />
        <Skills />
        <Experience />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
