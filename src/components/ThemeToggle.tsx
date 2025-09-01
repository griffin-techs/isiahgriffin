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
  }, []);

  const toggleTheme = () => {
    setIsTransitioning(true);
    const newTheme = !isDark;
    
    // Add transition to body for smooth theme switching
    document.body.style.transition = 'background-color 0.4s ease, color 0.4s ease';
    
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('light', !newTheme);
    
    // Remove transition after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
      document.body.style.transition = '';
    }, 400);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      disabled={isTransitioning}
      className={cn(
        "fixed top-6 right-6 z-[9999] glass-effect border-border/30",
        "hover:bg-accent/20 hover:border-accent/50 hover:scale-110",
        "transition-all duration-300 ease-out shadow-elegant",
        "backdrop-blur-md border-2",
        isTransitioning && "scale-95 opacity-80"
      )}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-4 h-4">
        <Sun 
          className={cn(
            "absolute inset-0 transition-all duration-500 ease-out text-amber-500",
            isDark 
              ? "opacity-100 rotate-0 scale-100" 
              : "opacity-0 rotate-180 scale-50"
          )} 
        />
        <Moon 
          className={cn(
            "absolute inset-0 transition-all duration-500 ease-out text-blue-400",
            !isDark 
              ? "opacity-100 rotate-0 scale-100" 
              : "opacity-0 -rotate-180 scale-50"
          )} 
        />
      </div>
    </Button>
  );
}