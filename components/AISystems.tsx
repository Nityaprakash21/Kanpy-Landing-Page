
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Cpu, Sparkles, Workflow, Zap, MessageSquare, Share2, Search } from 'lucide-react';

type Tab = 'gpts' | 'agents';

const AISystems: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('gpts');

  const gpts = [
    {
      title: "Storyteller GPT",
      description: "Transforms raw ideas into compelling narratives designed for founders, brands, and leaders.",
      icon: <MessageSquare className="w-5 h-5" />,
      tag: "Consistency"
    },
    {
      title: "Viral GPT",
      description: "Analyzes content patterns and predicts virality signals to create high-impact posts in seconds.",
      icon: <Search className="w-5 h-5" />,
      tag: "Strategy"
    },
    {
      title: "TrendIdentifier GPT",
      description: "Finds emerging trends in your niche before anyone else does giving you first-mover advantage.",
      icon: <Share2 className="w-5 h-5" />,
      tag: "Distribution"
    }
  ];

  const agents = [
    {
      title: "Autonomous Lead Gen",
      description: "Scours digital ecosystems to identify, qualify, and initiate contact with high-intent prospects.",
      icon: <Workflow className="w-5 h-5" />,
      tag: "Autonomous"
    },
    {
      title: "Sentiment Monitor",
      description: "Active 24/7. Listens to industry discourse and triggers real-time strategic response alerts.",
      icon: <Cpu className="w-5 h-5" />,
      tag: "Real-time"
    },
    {
      title: "Campaign Automator",
      description: "Connects your stack (CRM, Ads, Social) to execute complex marketing funnels without manual touch.",
      icon: <Zap className="w-5 h-5" />,
      tag: "Integration"
    }
  ];

  return (
    <section id="ai-lab" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-4 h-4 text-[#A3E635]" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#A3E635] font-bold">
                The Innovation Lab
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              Intelligence <br />
              <span className="italic text-gray-500">as a Service.</span>
            </h2>
          </motion.div>

          {/* Tab Switcher */}
          <div className="flex p-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10 w-fit">
            <button
              onClick={() => setActiveTab('gpts')}
              className={`px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                activeTab === 'gpts' ? 'bg-[#A3E635] text-[#06120E]' : 'text-gray-400 hover:text-white'
              }`}
            >
              Custom GPTs
            </button>
            <button
              onClick={() => setActiveTab('agents')}
              className={`px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                activeTab === 'agents' ? 'bg-[#A3E635] text-[#06120E]' : 'text-gray-400 hover:text-white'
              }`}
            >
              AI Agents
            </button>
          </div>
        </div>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {(activeTab === 'gpts' ? gpts : agents).map((item, idx) => (
                <div 
                  key={idx}
                  className="group relative p-8 rounded-[32px] bg-white/[0.03] border border-white/5 hover:border-[#A3E635]/20 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-6">
                     <span className="text-[9px] uppercase tracking-widest text-[#A3E635]/60 group-hover:text-[#A3E635] transition-colors font-bold px-2 py-1 rounded-md border border-[#A3E635]/10">
                      {item.tag}
                     </span>
                  </div>
                  
                  <div className="mb-8 p-4 w-fit rounded-2xl bg-[#A3E635]/5 text-[#A3E635] group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-2xl font-serif text-white mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                    {item.description}
                  </p>

                  <div className="mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <button className="text-[10px] uppercase tracking-widest text-[#A3E635] font-bold flex items-center space-x-2">
                        <span>{activeTab === 'agents' ? 'In Progress' : 'View Capability'}</span>
                        <div className="w-1 h-1 rounded-full bg-[#A3E635]" />
                      </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AISystems;
