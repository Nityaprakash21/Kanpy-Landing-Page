import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Globe, Mail } from 'lucide-react';

const TermsOfService: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <div className="min-h-screen bg-[#06120E] pb-24 selection:bg-[#A3E635] selection:text-[#06120E]">
            <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#A3E635] blur-[150px] rounded-full" />
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <Link
                        to="/"
                        className="inline-flex items-center space-x-2 text-gray-500 hover:text-[#A3E635] transition-all duration-300 mb-16 text-xs uppercase tracking-widest font-bold group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span>Return Home</span>
                    </Link>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants} className="mb-20">
                            <div className="flex items-center space-x-3 mb-6">
                                <FileText className="w-5 h-5 text-[#A3E635]" />
                                <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-white">Legal Agreement</h2>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[1.1] tracking-tight">
                                Terms of <span className="italic text-gray-400">Service</span>
                            </h1>
                            <p className="text-gray-500 text-sm uppercase tracking-widest font-medium">Last updated: January 2026</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="prose prose-invert max-w-none space-y-16">
                            <div className="space-y-6">
                                <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                                    Thank you for choosing KANPY (“we”, “us”, “our”). These Terms of Service (“Terms”) govern your access to and use of our website <span className="text-white font-medium">www.kanpy.in</span> (the “Site”), our services (collectively, the “Services”), and all associated features, content, and applications offered by KANPY.
                                </p>
                                <p className="text-gray-400 font-light leading-relaxed text-lg">
                                    By accessing or using the Site or Services, you agree to be bound by these Terms and all terms incorporated by reference. If you do not agree, please do not use or access the Site or Services.
                                </p>
                            </div>

                            {/* Sections */}
                            {[
                                {
                                    title: "1. Acceptance of Terms",
                                    text: "You acknowledge and agree that you are legally capable of entering into binding contracts, and your use of the Site and Services is subject to these Terms. We may modify these Terms at any time, and changes will be effective upon posting."
                                },
                                {
                                    title: "2. Definitions",
                                    content: [
                                        { label: "Services", text: "Any professional services offered by KANPY, including branding, marketing, strategy, consulting, content, or AI-based solutions." },
                                        { label: "User / You", text: "Any person accessing the Site or using the Services." },
                                        { label: "Content", text: "Text, images, videos, audio, software, or other materials provided through the Site." }
                                    ]
                                },
                                {
                                    title: "3. Eligibility",
                                    text: "You must be at least 18 years old to access or use the Site or Services. By agreeing to these Terms, you represent that you meet this requirement."
                                },
                                {
                                    title: "4. Use of the Site",
                                    list: [
                                        "Interfere with the Site's operation",
                                        "Reverse engineer, decompile, or attempt unauthorized access",
                                        "Use automated tools (bots, scrapers) without permission",
                                        "Use the Site and Services only for lawful purposes"
                                    ]
                                },
                                {
                                    title: "5. Registration & Accounts",
                                    text: "Some parts of the Site or certain Services may require registration. You are responsible for keeping your login credentials secure and notifying us of any unauthorized use."
                                },
                                {
                                    title: "6. Intellectual Property Rights",
                                    text: "All content on the Site — including design, text, graphics, logos, icons, images — is the sole property of KANPY or its licensors. You may not copy, reproduce, or distribute content without written consent."
                                },
                                {
                                    title: "7. Fees and Payment Terms",
                                    text: "Services will be provided under a separate agreement. Fees are due as stated in the invoice. Late payments may incur interest or suspension of Services. Fees are generally non-refundable."
                                },
                                {
                                    title: "8. Termination",
                                    text: "We may suspend or terminate access to the Site or Services if you violate these Terms, pose legal risks, or if we discontinue the Services."
                                },
                                {
                                    title: "9. Disclaimer of Warranties",
                                    text: "The Site and Services are provided “as is” without any warranty of any kind, including fitness for a particular purpose or error-free operation."
                                },
                                {
                                    title: "10. Limitation of Liability",
                                    text: "KANPY and its affiliates will not be liable for direct, indirect, incidental, or consequential damages, including loss of data or profits."
                                },
                                {
                                    title: "11. Indemnification",
                                    text: "You agree to indemnify KANPY from any claims arising from your misuse of the Site, violation of these Terms, or violation of any applicable law."
                                },
                                {
                                    title: "12. Third-Party Services",
                                    text: "The Site may contain links to external websites. We are not responsible for the content, policies, or practices of those third parties."
                                },
                                {
                                    title: "13. Governing Law and Dispute Resolution",
                                    text: "These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts located within India."
                                },
                                {
                                    title: "14. Changes to These Terms",
                                    text: "We may revise these Terms at any time. Your continued use of the Site constitutes acceptance of any changes."
                                }
                            ].map((section, idx) => (
                                <motion.div key={idx} variants={itemVariants} className="space-y-8 border-t border-white/5 pt-12">
                                    <h3 className="text-2xl md:text-3xl font-serif text-white">{section.title}</h3>
                                    {section.text && (
                                        <p className="text-gray-400 font-light leading-relaxed text-lg">{section.text}</p>
                                    )}
                                    {section.content && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {section.content.map((item, i) => (
                                                <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-[#A3E635]/20 transition-colors">
                                                    <p className="text-[10px] uppercase tracking-widest text-[#A3E635] font-bold mb-2">{item.label}</p>
                                                    <p className="text-gray-300 text-sm font-light leading-relaxed">{item.text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {section.list && (
                                        <ul className="space-y-4">
                                            {section.list.map((item, i) => (
                                                <li key={i} className="flex items-center space-x-3 text-gray-400 font-light">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#A3E635]" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </motion.div>
                            ))}

                            {/* Contact Section */}
                            <motion.div variants={itemVariants} className="pt-24 text-center">
                                <div className="p-12 md:p-16 rounded-[48px] bg-gradient-to-br from-[#A3E635]/10 via-white/[0.02] to-transparent border border-white/5">
                                    <h3 className="text-3xl font-serif text-white mb-12">Contact Information</h3>
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                                        <a href="mailto:info@kanpy.in" className="flex items-center space-x-3 text-white hover:text-[#A3E635] transition-colors group">
                                            <div className="p-4 rounded-full bg-white/5 group-hover:bg-[#A3E635]/20 transition-colors">
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <span className="font-bold tracking-widest uppercase text-xs">info@kanpy.in</span>
                                        </a>
                                        <a href="https://www.kanpy.in" className="flex items-center space-x-3 text-white hover:text-[#A3E635] transition-colors group">
                                            <div className="p-4 rounded-full bg-white/5 group-hover:bg-[#A3E635]/20 transition-colors">
                                                <Globe className="w-5 h-5" />
                                            </div>
                                            <span className="font-bold tracking-widest uppercase text-xs">www.kanpy.in</span>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default TermsOfService;
