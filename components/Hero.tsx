
import React from 'react';
import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import TechnoForest from './TechnoForest';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 md:pt-48 md:pb-32 overflow-hidden">
      {/* Dynamic Background Elements */}
      <TechnoForest />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl">
          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] text-white mb-8 tracking-tight"
          >
            Your High-Impact <span className="text-[#A3E635]">Branding</span>, GTM & Launch Partner.
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
          >
            We help visionary founders build category-defining tech brands. 
            By bridging the gap between <span className="text-white italic">strategic clarity</span> and 
            <span className="text-white italic"> flawless execution</span>, we ensure your launch isn't just a moment, it's a movement.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a
              href="https://calendly.com/rashiarorabusiness"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white text-[#06120E] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#A3E635] transition-all duration-300 flex items-center space-x-3 overflow-hidden shadow-2xl shadow-[#A3E635]/10"
            >
              <span className="relative z-10">Book a Strategy Call</span>
              <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </a>
            <button
              type="button"
              onClick={() => {
                const target = document.getElementById('services');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-white hover:text-gray-300 transition-colors font-medium border-b border-white/20 pb-1 flex items-center space-x-2"
            >
              <span>View our Services</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
