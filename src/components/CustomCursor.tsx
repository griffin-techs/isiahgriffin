import React, { useEffect, useState, useRef } from 'react';

interface CursorState {
  x: number;
  y: number;
  isHovering: boolean;
  isClicking: boolean;
  cursorType: 'default' | 'link' | 'button' | 'text';
}

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>({
    x: 0,
    y: 0,
    isHovering: false,
    isClicking: false,
    cursorType: 'default'
  });
  
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setCursorState(prev => ({
        ...prev,
        x: e.clientX,
        y: e.clientY
      }));
    };

    const handleMouseDown = () => {
      setCursorState(prev => ({ ...prev, isClicking: true }));
    };

    const handleMouseUp = () => {
      setCursorState(prev => ({ ...prev, isClicking: false }));
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      let cursorType: CursorState['cursorType'] = 'default';
      
      if (target.tagName === 'A' || target.closest('a')) {
        cursorType = 'link';
      } else if (target.tagName === 'BUTTON' || target.closest('button') || target.getAttribute('role') === 'button') {
        cursorType = 'button';
      } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.contentEditable === 'true') {
        cursorType = 'text';
      }

      setCursorState(prev => ({
        ...prev,
        isHovering: true,
        cursorType
      }));
    };

    const handleMouseLeave = () => {
      setCursorState(prev => ({
        ...prev,
        isHovering: false,
        cursorType: 'default'
      }));
    };

    // Add event listeners
    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"], [data-cursor="hover"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  const getCursorClasses = () => {
    let baseClasses = 'fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-200 ease-out';
    
    if (cursorState.isClicking) {
      baseClasses += ' scale-75';
    } else if (cursorState.isHovering) {
      switch (cursorState.cursorType) {
        case 'link':
          baseClasses += ' scale-150';
          break;
        case 'button':
          baseClasses += ' scale-125';
          break;
        case 'text':
          baseClasses += ' scale-90';
          break;
        default:
          baseClasses += ' scale-110';
      }
    }
    
    return baseClasses;
  };

  const getCursorColor = () => {
    switch (cursorState.cursorType) {
      case 'link':
        return 'bg-primary';
      case 'button':
        return 'bg-accent';
      case 'text':
        return 'bg-secondary';
      default:
        return 'bg-foreground';
    }
  };

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={getCursorClasses()}
        style={{
          transform: `translate(${cursorState.x - 10}px, ${cursorState.y - 10}px)`
        }}
      >
        <div className={`w-5 h-5 rounded-full mix-blend-difference ${getCursorColor()} opacity-80`} />
      </div>
      
      {/* Cursor trail */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] transition-all duration-500 ease-out"
        style={{
          transform: `translate(${cursorState.x - 20}px, ${cursorState.y - 20}px)`
        }}
      >
        <div className="w-10 h-10 rounded-full border-2 border-primary/30 opacity-50" />
      </div>
    </>
  );
}