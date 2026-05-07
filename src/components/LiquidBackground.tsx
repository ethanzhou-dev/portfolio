import React, { useEffect, useRef } from 'react';

export const LiquidBackground: React.FC = () => {
  const blobGroupRef = useRef<HTMLDivElement>(null);

  // Subtle mouse interactive parallax effect
  useEffect(() => {
    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse coordinates (-1 to 1)
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      
      // Target offset in pixels
      targetX = x * 30; 
      targetY = y * 30;
    };
    
    const animate = () => {
      // Lerp for smooth easing
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      
      if (blobGroupRef.current) {
        blobGroupRef.current.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="liquid-bg-container">
      <div 
        ref={blobGroupRef} 
        style={{ width: '100%', height: '100%', willChange: 'transform' }}
      >
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
    </div>
  );
};
