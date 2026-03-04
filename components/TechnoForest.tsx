
import React from 'react';
import { motion } from 'framer-motion';

const TechnoTree: React.FC<{ className?: string; delay?: number; flip?: boolean }> = ({ className, delay = 0, flip = false }) => {
  const brandLime = "#A3E635";
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay }}
      viewBox="0 0 400 800"
      fill="none"
      className={`${className} pointer-events-none select-none`}
      style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
    >
      {/* Main Trunk */}
      <motion.path
        d="M200 800 V400"
        stroke={brandLime}
        strokeWidth="1"
        strokeOpacity="0.15"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: delay + 0.2 }}
      />
      
      {/* Branch Layer 1 */}
      <motion.path
        d="M200 600 L120 520 V420 M200 550 L280 470 V370"
        stroke={brandLime}
        strokeWidth="0.8"
        strokeOpacity="0.1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: delay + 0.5 }}
      />

      {/* Branch Layer 2 - Techno Details */}
      <motion.path
        d="M120 450 L80 410 V350 M280 420 L320 380 V320 M120 520 L150 490"
        stroke={brandLime}
        strokeWidth="0.5"
        strokeOpacity="0.08"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: delay + 0.8 }}
      />

      {/* Floating Data Nodes */}
      <motion.rect
        x="197" y="390" width="6" height="6"
        fill={brandLime}
        fillOpacity="0.3"
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.rect
        x="77" y="347" width="6" height="6"
        fill={brandLime}
        fillOpacity="0.2"
        animate={{ opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
      <motion.circle
        cx="320" cy="317" r="3"
        fill={brandLime}
        fillOpacity="0.4"
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />

      {/* Flowing Data Lines (The "Techno" Pulse) */}
      <motion.path
        d="M200 800 V400 L280 320"
        stroke={brandLime}
        strokeWidth="1.5"
        strokeOpacity="0.4"
        strokeDasharray="10 100"
        animate={{ strokeDashoffset: [0, -220] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </motion.svg>
  );
};

const TechnoForest: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Left Tree Base */}
      <TechnoTree 
        className="absolute -left-20 bottom-0 w-[500px] h-[1000px] opacity-60" 
        delay={0} 
      />
      
      {/* Right Tree Base */}
      <TechnoTree 
        className="absolute -right-40 bottom-20 w-[600px] h-[1200px] opacity-40" 
        delay={0.5} 
        flip={true} 
      />

      {/* Small Distant Stems */}
      <div className="absolute bottom-0 left-1/3 w-[200px] h-[400px] opacity-20 hidden md:block">
        <TechnoTree className="w-full h-full" delay={1} />
      </div>
    </div>
  );
};

export default TechnoForest;
