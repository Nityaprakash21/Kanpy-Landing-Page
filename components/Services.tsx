
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Rocket, UserCheck, Cpu, ArrowUpRight } from 'lucide-react';

const ServiceCard: React.FC<{ 
  title: string; 
  icon: React.ReactNode; 
  items: string[]; 
  index: number 
}> = ({ title, icon, items, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative p-8 rounded-[24px] bg-white/[0.02] border border-white/5 hover:border-[#A3E635]/20 transition-all duration-500 flex flex-col h-full"
    >
      {/* <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowUpRight className="w-5 h-5 text-[#A3E635]" />
      </div> */}
      
      <div className="mb-6 p-3 w-fit rounded-xl bg-[#A3E635]/5 text-[#A3E635]">
        {icon}
      </div>
      
      <h3 className="text-2xl font-serif text-white mb-6 tracking-tight">
        {title}
      </h3>
      
      <ul className="space-y-4 flex-grow">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors text-sm font-light">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635]/20 mr-3 group-hover:bg-[#A3E635]/50 transition-colors" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const pillars = [
    {
      title: "Brand & Positioning",
      icon: <Target className="w-6 h-6" />,
      items: [
        "Brand Positioning & Messaging",
        "Company Branding & Marketing",
        "Rebranding",
        "Experiential Marketing"
      ]
    },
    {
      title: "GTM, Launch & Growth",
      icon: <Rocket className="w-6 h-6" />,
      items: [
        "GTM Strategy",
        "Campaign Management (Pre, Launch, Post)",
        "Product Marketing",
        "Website / Landing Page Management",
        // "Performance Marketing"
      ]
    },
    {
      title: "Founder & Content Led Growth",
      icon: <UserCheck className="w-6 h-6" />,
      items: [
        "Personal Branding for Founders & CXOs",
        "Social Media Marketing",
        "Content Marketing"
      ]
    },
    {
      title: "AI, Systems & Consulting",
      icon: <Cpu className="w-6 h-6" />,
      items: [
        "AI + Automation Growth Systems",
        "Strategic Consultancy",
        "Workflow Optimization"
      ]
    }
  ];

  return (
    <section id="services" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#A3E635] font-bold mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white max-w-2xl leading-tight">
              Full-Stack Growth <br />
              <span className="italic text-gray-400">for the Modern Founder.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <ServiceCard 
              key={index} 
              index={index}
              title={pillar.title} 
              icon={pillar.icon} 
              items={pillar.items} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
