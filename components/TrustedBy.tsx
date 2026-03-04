
import React from 'react';
import { motion } from 'framer-motion';

const TrustedBy: React.FC = () => {
  const partners = ['Vertex AI', 'Pulse Labs', 'Ethera', 'SaaS Flow', 'Omnia'];

  return (
    <div className="px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="pt-12 border-t border-white/5"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-10 text-center md:text-left">
            Trusted by founders at high-growth startups
          </p>
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {partners.map((partner) => (
              <span 
                key={partner} 
                className="text-xl md:text-2xl font-bold tracking-tighter text-white font-serif"
              >
                {partner}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TrustedBy;
