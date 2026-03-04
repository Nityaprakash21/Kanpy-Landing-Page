
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const FooterCTA: React.FC = () => {
  return (
    <section id="strategy-call" className="relative py-48 px-6 bg-[#06120E] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[120%] bg-[#A3E635]/5 blur-[160px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] uppercase tracking-[0.6em] text-[#A3E635] font-bold mb-10 block">
            The Next Step
          </span>
          
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-16 leading-tight tracking-tight">
            Ready to define your category?
          </h2>
          
          <div className="flex flex-col items-center space-y-8">
            <a
              href="https://calendly.com/rashiarorabusiness"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#A3E635] text-[#06120E] px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all duration-500 flex items-center space-x-3 shadow-2xl shadow-[#A3E635]/20"
            >
              <span>Book a Strategy Call</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            
            <p className="text-gray-500 text-sm font-light tracking-wide">
              No pressure. Just a conversation about your vision and our execution.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FooterCTA;
