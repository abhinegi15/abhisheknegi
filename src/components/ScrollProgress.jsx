import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-400 via-sky-500 to-purple-500 origin-left shadow-[0_0_12px_rgba(56,189,248,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
}
