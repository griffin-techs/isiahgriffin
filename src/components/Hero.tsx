import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';
import Scene3D from './Scene3D';
import ParticleSystem from './ParticleSystem';
import InteractiveBackground from './InteractiveBackground';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Interactive Background Elements */}
      <InteractiveBackground />
      <ParticleSystem />
      <Scene3D />
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/10" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          {/* Greeting */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-4 font-mono">
            Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient typing-animation">Isiah Griffin</span>
          </h1>
          
          {/* Role */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-foreground/90 mb-6 typing-subtitle">
            Software Developer
          </h2>
          
          {/* Tagline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Crafting innovative software solutions with cutting-edge technologies. 
            Specializing in full-stack development, cloud architecture, and scalable systems.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="xl" 
              variant="hero"
              onClick={scrollToProjects}
            >
              View My Work
            </Button>
            <Button 
              size="xl" 
              variant="outline"
              onClick={scrollToContact}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-glow"
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a 
              href="https://github.com/isiahgriffin" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover-glow"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/isiahgriffin" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover-glow"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:isiah@isiahgriffin.dev" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover-glow"
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ArrowDown 
            size={32} 
            className="text-primary opacity-60 cursor-pointer hover:opacity-100 transition-opacity"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;