import { useEffect, useRef, useState } from 'react';
import { Card } from './ui/card';

const stats = [
  { label: 'Projects Completed', value: 150, suffix: '+' },
  { label: 'Years Experience', value: 6, suffix: '+' },
  { label: 'Technologies Mastered', value: 25, suffix: '+' },
  { label: 'Happy Clients', value: 98, suffix: '%' },
];

function CountUp({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          
          const increment = end / (duration / 50);
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 50);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasStarted]);

  return (
    <div ref={countRef} className="text-3xl font-bold text-gradient">
      {count}{suffix}
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
          Achievements & Impact
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover-glow glass-effect">
              <CountUp end={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}