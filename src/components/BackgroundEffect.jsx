import React, { useEffect, useState } from 'react';

export default function BackgroundEffect() {
  const [mousePosition, setMousePosition] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Cursor Spotlight Glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 transition-all duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)',
          left: `${mousePosition.x - 300}px`,
          top: `${mousePosition.y - 300}px`,
          transform: 'translate3d(0,0,0)',
        }}
      />

      {/* Ambient Animated Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-[120px] animate-blob" />
      <div className="absolute top-[30%] right-[-10%] w-[550px] h-[550px] rounded-full bg-purple-600/10 blur-[130px] animate-blob [animation-delay:4s]" />
      <div className="absolute bottom-[10%] left-[20%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[140px] animate-blob [animation-delay:8s]" />

      {/* Grid Pattern with Vignette */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-transparent to-dark-950 opacity-90" />
    </div>
  );
}
