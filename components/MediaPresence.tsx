
import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeRowProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ items, direction = 'left', speed = 40 }) => {
  const duplicatedItems = [...items, ...items, ...items, ...items];
  
  return (
    <div className="flex overflow-hidden select-none py-6 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
      <motion.div
        animate={{
          x: direction === 'left' ? [-1000, 0] : [0, -1000],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-nowrap gap-16 whitespace-nowrap min-w-max px-8"
      >
        {duplicatedItems.map((item, idx) => (
          <div 
            key={`${item}-${idx}`} 
            className="flex items-center group cursor-default"
          >
            <span className="text-2xl md:text-3xl lg:text-4xl font-serif text-white/20 group-hover:text-[#A3E635] transition-all duration-700 tracking-tight">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const MediaPresence: React.FC = () => {
  const mediaData = {
    tier1: [
      "The Economic Times",
      "Hindustan Times",
      "India Today",
      "Business Today",
      "Times Now"
    ],
    tier2: [
      "Financial Express",
      "News18",
      "Dailyhunt",
      "MSN",
      "Inc42",
      "Bizz Buzz",
      "Startup Story"
    ],
    tier3: [
      "Humans of Bombay",
      "Ghar.tv",
      "The Morning Context",
      "YourStory",
      "Mint"
    ]
  };

  return (
    <section className="relative py-32 overflow-hidden bg-[#06120E]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#A3E635]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#A3E635] font-semibold mb-4 block">
            Visibility
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
            Our clients are consistently featured in <span className="italic">defining publications</span>.
          </h2>
        </motion.div>
      </div>

      <div className="relative z-10 space-y-4">
        <div className="group">
          <p className="px-6 max-w-7xl mx-auto text-[10px] uppercase tracking-[0.2em] text-gray-700 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            National & Global
          </p>
          <MarqueeRow items={mediaData.tier1} direction="left" speed={50} />
        </div>
        
        <div className="group">
          <p className="px-6 max-w-7xl mx-auto text-[10px] uppercase tracking-[0.2em] text-gray-700 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Digital + Startup Ecosystem
          </p>
          <MarqueeRow items={mediaData.tier2} direction="right" speed={60} />
        </div>

        <div className="group">
          <p className="px-6 max-w-7xl mx-auto text-[10px] uppercase tracking-[0.2em] text-gray-700 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Impact Platforms
          </p>
          <MarqueeRow items={mediaData.tier3} direction="left" speed={45} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-end"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default MediaPresence;
