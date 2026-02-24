import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Globe, Sparkles, Building2, Layers, Compass } from 'lucide-react';
import { caseStudiesData } from '../data/caseStudies';

const ImageWithCaption: React.FC<{ src: string; caption?: string; className?: string }> = ({ src, caption, className }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className={`relative group overflow-hidden rounded-[32px] ${className}`}
  >
    <img src={src} alt={caption || "Brand Asset"} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
    {caption && (
      <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-white text-[10px] uppercase tracking-widest font-bold">{caption}</p>
      </div>
    )}
  </motion.div>
);

const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams();
  const study = caseStudiesData.find(s => s.slug === slug);
  const [activeImpact, setActiveImpact] = useState(0);
  const impactLength = study?.impact.length || 0;

  useEffect(() => {
    if (impactLength <= 1) return;
    const interval = setInterval(() => {
      setActiveImpact((prev) => (prev + 1) % impactLength);
    }, 3000);
    return () => clearInterval(interval);
  }, [impactLength]);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#06120E] p-6 text-center">
        <div>
          <h1 className="text-4xl text-white font-serif mb-6">Case Study Not Found</h1>
          <Link to="/" className="text-[#A3E635] hover:underline uppercase tracking-widest text-xs font-bold">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#06120E] pb-24 selection:bg-[#A3E635] selection:text-[#06120E]">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        {/* Decorative Background Image */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <img src={study.thumbnail} className="w-full h-full object-cover blur-3xl scale-110" alt="" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-gray-500 hover:text-white transition-colors mb-16 text-xs uppercase tracking-widest font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Portfolio</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >            
            <h1 className="text-5xl md:text-8xl font-serif text-white mb-10 leading-[1] tracking-tight max-w-4xl">
              {(() => {
                // Split before 'Growth Launch' and extract parenthetical
                const match = study.title.match(/^(.*?)(Growth Launch)(\s*\(.*\))$/);
                if (match) {
                  return <>
                    {match[1].trim()}<br />
                    {match[2]}<br />
                    <span style={{ fontSize: '0.6em', display: 'block', marginTop: 8 }}>{match[3].trim()}</span>
                  </>;
                }
                return study.title;
              })()}
            </h1>
            
            <p className="text-xl md:text-3xl text-gray-400 font-light leading-relaxed max-w-4xl mb-20">
              {study.oneLineSummary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-12 border-t border-white/5">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gray-600 block mb-6">Capabilities</span>
                <div className="flex flex-wrap gap-2">
                  {study.services.map(s => (
                    <span key={s} className="text-[9px] text-white/60 uppercase tracking-widest px-3 py-1.5 border border-white/10 rounded-full bg-white/[0.02]">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gray-600 block mb-6">The Client</span>
                <div className="flex items-start space-x-3">
                  <Building2 className="w-4 h-4 text-[#A3E635] mt-1" />
                  <span className="text-white text-sm font-medium leading-relaxed">{study.clientInfo || study.company}</span>
                </div>
              </div>
              <div className="md:col-span-2 flex justify-end items-end">
                {study.website && (
                  <a href={study.website} target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-4 bg-white/[0.03] hover:bg-[#A3E635] px-8 py-4 rounded-full transition-all duration-500 border border-white/10 hover:border-transparent">
                    <span className="text-white group-hover:text-[#06120E] font-bold uppercase tracking-widest text-[10px]">Visit Live Brand</span>
                    <ArrowUpRight className="w-4 h-4 text-[#A3E635] group-hover:text-[#06120E]" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Thumbnail */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <ImageWithCaption src={study.thumbnail} className="h-[400px] md:h-[700px]" />
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Challenge Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-48">
            <div className="md:col-span-5">
              <div className="sticky top-32">
                <div className="flex items-center space-x-3 mb-6">
                  <Compass className="w-5 h-5 text-[#A3E635]" />
                  <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-white">The Challenge</h2>
                </div>
                <p className="text-white text-3xl font-serif leading-tight mb-12">
                  Navigating complexity to find <span className="italic text-gray-400">strategic resonance</span>.
                </p>
                <div className="space-y-6">
                  {study.problemPoints.map((p, i) => (
                    <div key={i} className="flex items-start space-x-4 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#A3E635] mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-400 font-light leading-relaxed">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="space-y-12">
                <p className="text-gray-400 text-xl font-light leading-relaxed">
                  {study.problem}
                </p>
                {study.problemImage && (
                  <ImageWithCaption src={study.problemImage} caption="Context Diagnostic" className="aspect-[4/3]" />
                )}
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          {study.brandGallery && study.brandGallery.length > 0 && (
            <div className="mb-48">
               <div className="flex flex-col items-center mb-16 text-center">
                  <Layers className="w-6 h-6 text-[#A3E635] mb-4" />
                  <h2 className="text-xs font-bold uppercase tracking-[0.6em] text-white mb-4">Visual Architecture</h2>
                  <p className="text-gray-500 max-w-lg text-sm font-light">
                    Every element is designed to serve the broader distribution narrative and establish immediate category authority.
                  </p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {study.brandGallery.map((img, i) => (
                   <ImageWithCaption key={i} src={img} className={i === 1 ? 'md:translate-y-12' : ''} />
                 ))}
               </div>
            </div>
          )}

          {/* Implementation Steps */}
          <div className="mb-48">
            <div className="flex items-center space-x-3 mb-24">
              <h2 className="text-4xl font-serif text-white tracking-tight">The <span className="text-[#A3E635]">Execution</span> Path</h2>
              <div className="h-[1px] flex-grow bg-white/5" />
            </div>
            
            <div className="space-y-48">
              {study.whatWeDid.map((step, i) => (
                <div key={i} className={`grid grid-cols-1 md:grid-cols-12 gap-16 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`md:col-span-5 ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                    <div className="text-[10px] uppercase tracking-[0.5em] text-[#A3E635] font-bold mb-6">Phase 0{i+1}</div>
                    <h3 className="text-white font-serif text-4xl mb-8 leading-tight">{step.title}</h3>
                    <p className="text-gray-400 font-light leading-relaxed mb-10 text-lg">{step.description}</p>
                    <div className="inline-flex items-center space-x-4 bg-[#A3E635]/10 border border-[#A3E635]/20 px-6 py-4 rounded-2xl">
                      <CheckCircle2 className="w-5 h-5 text-[#A3E635]" />
                      <span className="text-[#A3E635] text-sm font-bold tracking-wide uppercase">{step.result}</span>
                    </div>
                  </div>
                  <div className={`md:col-span-7 ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                    {step.image ? (
                      <ImageWithCaption src={step.image} className="aspect-video" />
                    ) : (
                      <div className="aspect-video bg-white/[0.02] border border-white/5 rounded-[32px] flex items-center justify-center italic text-gray-700">
                        Asset in Production
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results Block */}
          <div className="mb-48">
            <div className="p-8 md:p-16 rounded-[64px] bg-gradient-to-br from-[#A3E635]/5 via-white/[0.02] to-transparent border border-white/5 relative overflow-hidden flex flex-col items-center justify-center">
              <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-16">
                    <Sparkles className="w-6 h-6 text-[#A3E635]" />
                    <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-white">Impact Delivered</h2>
                  </div>
                {/* Carousel for all screens, stretched to outer card */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {study.impact.map((stat, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group"
                      >
                        <span className="text-[14px] uppercase tracking-widest text-gray-500 block mb-4 group-hover:text-[#A3E635] transition-colors">{stat.label}</span>
                        <p className="text-white font-serif text-4xl md:text-4xl">{stat.stats}</p>
                      </motion.div>
                    ))}
                  </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Block */}
          <div className="text-center py-32 bg-white/[0.01] rounded-[64px] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#A3E635]/5 blur-[120px] rounded-full -z-10" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#A3E635] font-bold mb-10 block">Partner with us</span>
            <h3 className="text-4xl md:text-6xl font-serif text-white mb-16 leading-tight max-w-3xl mx-auto">
              Ready to drive <span className="italic text-gray-400">exponential</span> visibility for your vision?
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a
                href="https://calendly.com/rashiarorabusiness"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#A3E635] text-[#06120E] px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all duration-500 flex items-center space-x-3"
              >
                <span>Book a Strategy Call</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <Link to="/" className="text-white/60 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest border-b border-white/10 pb-1">Back to Portfolio</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetailPage;
