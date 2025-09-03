import React, { useEffect, useRef, ReactNode } from 'react';

interface ParallaxContainerProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export default function ParallaxContainer({ 
  children, 
  speed = 0.5, 
  direction = 'up',
  className = '' 
}: ParallaxContainerProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate if element is in view
      const elementVisible = scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight;
      
      if (elementVisible) {
        const scrollProgress = (scrolled - elementTop + windowHeight) / (windowHeight + elementHeight);
        const moveDistance = scrollProgress * 100 * speed;
        
        let transform = '';
        switch (direction) {
          case 'up':
            transform = `translateY(-${moveDistance}px)`;
            break;
          case 'down':
            transform = `translateY(${moveDistance}px)`;
            break;
          case 'left':
            transform = `translateX(-${moveDistance}px)`;
            break;
          case 'right':
            transform = `translateX(${moveDistance}px)`;
            break;
        }
        
        element.style.transform = transform;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, direction]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}