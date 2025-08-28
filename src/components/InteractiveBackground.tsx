import { useEffect, useRef, useState } from 'react';

// Helper function to get resolved CSS color values
const getCanvasColors = () => {
  return {
    primary: '#4F9BFF',
    secondary: '#9F4FFF', 
    accent: '#21C55D',
    muted: '#2D3748'
  };
};

interface GeometricShape {
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  type: 'triangle' | 'square' | 'hexagon' | 'circle';
  color: string;
  opacity: number;
  scale: number;
}

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const shapesRef = useRef<GeometricShape[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Initialize shapes
    const initShapes = () => {
      shapesRef.current = [];
      const shapeCount = Math.min(50, Math.floor(dimensions.width * dimensions.height / 25000));
      const types: GeometricShape['type'][] = ['triangle', 'square', 'hexagon', 'circle'];
      const canvasColors = getCanvasColors();
      const colors = [
        canvasColors.primary,
        canvasColors.secondary,
        canvasColors.accent,
        canvasColors.muted
      ];
      
      for (let i = 0; i < shapeCount; i++) {
        shapesRef.current.push({
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          size: Math.random() * 40 + 20,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          type: types[Math.floor(Math.random() * types.length)],
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.3 + 0.1,
          scale: 1
        });
      }
    };

    initShapes();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const drawShape = (shape: GeometricShape) => {
      ctx.save();
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);
      ctx.scale(shape.scale, shape.scale);
      
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, shape.size);
      gradient.addColorStop(0, shape.color + Math.floor(shape.opacity * 255).toString(16).padStart(2, '0'));
      gradient.addColorStop(1, shape.color + '00');
      
      ctx.fillStyle = gradient;
      ctx.strokeStyle = shape.color + Math.floor((shape.opacity * 0.5) * 255).toString(16).padStart(2, '0');
      ctx.lineWidth = 2;

      ctx.beginPath();
      
      switch (shape.type) {
        case 'triangle':
          ctx.moveTo(0, -shape.size / 2);
          ctx.lineTo(-shape.size / 2, shape.size / 2);
          ctx.lineTo(shape.size / 2, shape.size / 2);
          ctx.closePath();
          break;
        case 'square':
          ctx.rect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
          break;
        case 'hexagon':
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const x = Math.cos(angle) * shape.size / 2;
            const y = Math.sin(angle) * shape.size / 2;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          break;
        case 'circle':
          ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
          break;
      }
      
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      shapesRef.current.forEach(shape => {
        // Mouse interaction
        const dx = mouseRef.current.x - shape.x;
        const dy = mouseRef.current.y - shape.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const force = (200 - distance) / 200;
          shape.scale = 1 + force * 0.5;
          shape.opacity = Math.min(shape.opacity + force * 0.01, 0.8);
          shape.rotationSpeed += force * 0.001;
        } else {
          shape.scale = Math.max(shape.scale * 0.98, 1);
          shape.opacity = Math.max(shape.opacity * 0.99, 0.1);
          shape.rotationSpeed *= 0.99;
        }

        // Update rotation
        shape.rotation += shape.rotationSpeed;

        // Draw shape
        drawShape(shape);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none -z-20 opacity-60"
      style={{ background: 'transparent' }}
    />
  );
};

export default InteractiveBackground;