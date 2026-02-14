import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        text: "Kanpy help us build our LinkedIn and Instagram presence from scratch. Their content and engagement strategies were thoughtfully aligned with our brand and led to consistent growth in followers and engagement. A skilled, reliable team we’d highly recommend for social media and personal branding.",
        author: "Sachin Yadav",
        role: "Brand Partner"
    },
    {
        text: "Kanpy is a powerhouse of ideas and execution. Over the past year, they helped us cross 2M+ impressions and grow our community by 5,000+ followers. Resourceful, fast, and highly dependable, Kanpy delivers both creative ideas and measurable impact.",
        author: "Ekhlaque Bari",
        role: "Growth Partner"
    },
    {
        text: "Kanpy has been an exceptional LinkedIn growth and personal branding partner. In just one year, their strategy helped generate 9M+ views on my profile. From revamping my headline and ‘About’ section to building a high-performing content and engagement strategy, Kanpy played a key role in shaping a strong, differentiated personal brand.",
        author: "Prakhar Srivastava",
        role: "Strategic Partner"
    }
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(1); // Middle one by default

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };
    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };
    const handleNext = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="py-24 px-6 relative overflow-hidden bg-[#06120E]">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A3E635]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <Quote className="w-4 h-4 text-[#A3E635]" />
                        <span className="text-[10px] uppercase tracking-[0.3em] text-[#A3E635] font-bold">Success Stories</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif text-white tracking-tight"
                    >
                        Trusted by <span className="italic text-gray-400">Visionaries</span>
                    </motion.h2>
                </div>

                                <div className="relative h-[450px] md:h-[400px] flex items-center justify-center">
                                    {/* Left Arrow */}
                                    <button
                                        className="absolute left-0 z-20 bg-black/30 hover:bg-[#A3E635]/20 text-[#A3E635] rounded-full w-12 h-12 flex items-center justify-center text-2xl transition-colors duration-200"
                                        style={{ top: '50%', transform: 'translateY(-50%)' }}
                                        onClick={handlePrev}
                                        aria-label="Previous testimonial"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                        </svg>
                                    </button>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentIndex}
                                            initial={{ opacity: 0, scale: 0.9, x: 20 }}
                                            animate={{ opacity: 1, scale: 1, x: 0 }}
                                            exit={{ opacity: 0, scale: 0.9, x: -20 }}
                                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                            className="w-full max-w-5xl"
                                        >
                                            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[48px] relative group hover:border-[#A3E635]/30 transition-colors duration-500">
                                                <Quote className="absolute top-8 right-12 w-12 h-12 text-[#A3E635]/10 group-hover:text-[#A3E635]/20 transition-colors" />
                                                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-12 italic">
                                                    {testimonials[currentIndex].text}
                                                </p>
                                                <div className="flex flex-col items-center text-center space-y-4">
                                                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#A3E635] to-[#A3E635]/50 flex items-center justify-center text-[#06120E] font-bold text-xl">
                                                        {testimonials[currentIndex].author.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <h4 className="text-white font-bold tracking-wide uppercase text-sm">
                                                            {testimonials[currentIndex].author}
                                                        </h4>
                                                        <p className="text-[#A3E635] text-[10px] uppercase tracking-widest font-medium">
                                                            {testimonials[currentIndex].role}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                    {/* Right Arrow */}
                                    <button
                                        className="absolute right-0 z-20 bg-black/30 hover:bg-[#A3E635]/20 text-[#A3E635] rounded-full w-12 h-12 flex items-center justify-center text-2xl transition-colors duration-200"
                                        style={{ top: '50%', transform: 'translateY(-50%)' }}
                                        onClick={handleNext}
                                        aria-label="Next testimonial"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </button>
                                </div>

                {/* Removed Dot Navigation */}
            </div>
        </section>
    );
};

export default Testimonials;
