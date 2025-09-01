import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = stored ? stored === 'dark' : prefersDark;
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('light', !shouldBeDark);
    
    // Add smooth transition for theme changes
    document.documentElement.style.setProperty('--transition-theme', 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)');
  }, []);

  const toggleTheme = () => {
    setIsTransitioning(true);
    const newTheme = !isDark;
    
    // Add transition class to body for smooth theme switching
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('light', !newTheme);
    
    // Remove transition after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
      document.body.style.transition = '';
    }, 300);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      disabled={isTransitioning}
      className={cn(
        "fixed top-4 right-4 z-50 glass-effect border-border/50",
        "hover:bg-accent/10 hover:border-accent/30 hover:scale-105",
        "transition-all duration-300 ease-out",
        "backdrop-blur-sm shadow-elegant",
        isTransitioning && "scale-95"
      )}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-4 h-4">
        <Sun 
          className={cn(
            "absolute inset-0 transition-all duration-300 ease-out",
            isDark 
              ? "opacity-100 rotate-0 scale-100" 
              : "opacity-0 rotate-90 scale-75"
          )} 
        />
        <Moon 
          className={cn(
            "absolute inset-0 transition-all duration-300 ease-out",
            !isDark 
              ? "opacity-100 rotate-0 scale-100" 
              : "opacity-0 -rotate-90 scale-75"
          )} 
        />
      </div>
    </Button>
  );
}