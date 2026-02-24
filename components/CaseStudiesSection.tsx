
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { caseStudiesData } from '../data/caseStudies';

const CaseStudiesSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="case-studies" className="py-32 px-6 bg-[#06120E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#A3E635] font-bold mb-4 block">
            Proven Results
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
            Case <span className="italic text-gray-400">Studies.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((study, idx) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => navigate(`/case-studies/${study.slug}`)}
              className="group cursor-pointer bg-white/[0.02] border border-white/5 rounded-[32px] overflow-hidden hover:bg-white/[0.05] hover:border-[#A3E635]/30 transition-all duration-500 flex flex-col h-full"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={study.thumbnail} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06120E] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6">
                   <span className="text-[10px] uppercase tracking-widest text-white/50 mb-1 block">Project</span>
                   <span className="text-white font-medium">{study.company}</span>
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-xl font-serif text-white mb-3 group-hover:text-[#A3E635] transition-colors leading-snug">
                    {(() => {
                      // Split before 'Growth Launch' and extract parenthetical
                      const match = study.title.match(/^(.*?)(Growth Launch)(\s*\(.*\))$/);
                      if (match) {
                        return <>
                          {match[1].trim()}<br />
                          {match[2]}<br />
                          <span style={{ fontSize: '0.7em', display: 'block', marginTop: 2 }}>{match[3].trim()}</span>
                        </>;
                      }
                      return study.title;
                    })()}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 font-light leading-relaxed">
                    {study.oneLineSummary}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {study.services.slice(0, 3).map(service => (
                      <span key={service} className="text-[9px] uppercase tracking-widest text-gray-400 border border-white/10 px-3 py-1.5 rounded-full bg-white/[0.01]">
                        {service}
                      </span>
                    ))}
                    {study.services.length > 3 && (
                      <span className="text-[9px] uppercase tracking-widest text-gray-500 px-2 py-1.5">...</span>
                    )}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-end justify-between">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#A3E635] font-bold mb-1">Outcome</span>
                    <span className="text-white text-2xl font-bold tracking-tighter">{study.metricHighlight}</span>
                  </div>
                  <button className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors font-bold pb-1 border-b border-transparent group-hover:border-[#A3E635]">
                    <span>View Full Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
