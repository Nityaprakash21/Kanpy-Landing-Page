
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap } from 'lucide-react';

const FoundationalBrand: React.FC = () => {
  const includes = [
    { title: "Brand Identity System", desc: "Cohesive visual architecture that scales." },
    { title: "Visual Language & Brand Kit", desc: "The aesthetics of your unique category." },
    { title: "Core Messaging Framework", desc: "Articulating your 'why' with precision." },
    { title: "Positioning & Differentiation", desc: "Finding the gap and owning it." },
    { title: "Voice & Tone Guidelines", desc: "How you speak to the world." }
  ];

  return (
    <section id="foundations" className="relative py-24 px-6 overflow-hidden">
      {/* Subtle Glow Backdrop */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#A3E635]/5 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent rounded-[32px] p-8 md:p-16 relative z-10 overflow-hidden group">
        {/* Animated Accent Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-right from-transparent via-[#A3E635]/30 to-transparent group-hover:via-[#A3E635]/60 transition-all duration-1000" />
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Column: Strategy */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-[#A3E635]/10 rounded-lg text-[#A3E635]">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#A3E635] font-bold">
                  Core Offering
                </span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
                Foundational <br />
                <span className="text-[#A3E635]">Brand Setup</span>
              </h2>
              
              <p className="text-xl text-gray-400 max-w-lg leading-relaxed mb-8">
                Before growth comes clarity. Marketing dollars are wasted on a shaky foundation. 
                We build the <span className="text-white italic">strategic bedrock</span> that every strong brand scales from.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Checklist */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid gap-6"
            >
              {includes.map((item, idx) => (
                <div 
                  key={idx}
                  className="group/item flex items-start space-x-6 p-4 rounded-2xl hover:bg-white/[0.03] transition-all duration-300 border border-transparent hover:border-white/5"
                >
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-[#A3E635] opacity-40 group-hover/item:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
              
              <div className="mt-8 p-6 rounded-2xl bg-[#A3E635]/5 border border-[#A3E635]/10 flex items-center justify-between">
                <span className="text-sm text-[#A3E635] font-semibold tracking-wide">Ready for a scalable identity?</span>
                <a
                  href="https://calendly.com/rashiarorabusiness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold uppercase tracking-widest text-[#06120E] bg-[#A3E635] px-6 py-2 rounded-full hover:scale-105 transition-transform"
                >
                  Book a call
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationalBrand;
