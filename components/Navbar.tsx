import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import kanpyWordmark from '../src/assets/kanpy.png';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [menuOpen]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Small timeout to allow the homepage to mount before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 py-4 ${scrolled ? 'bg-[#06120E]/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <img
              src={kanpyWordmark}
              alt="Kanpy"
              className="h-10 w-auto group-hover:scale-105 transition-transform duration-500 mt-4"
              loading="lazy"
            />
            <span className="sr-only">Kanpy</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10 text-[11px] md:text-[15px] uppercase tracking-widest font-medium text-gray-400">
            <button onClick={() => handleLinkClick('foundations')} className="hover:text-white transition-colors">Foundations</button>
            <button onClick={() => handleLinkClick('services')} className="hover:text-white transition-colors">Services</button>
            <button onClick={() => handleLinkClick('ai-lab')} className="hover:text-white transition-colors">AI Lab</button>
            <button
              onClick={() => handleLinkClick('case-studies')}
              className="hover:text-[#A3E635] transition-colors border-l border-white/10 pl-10 font-bold"
            >
              Case Studies
            </button>
          </div>

          {/* Desktop Strategy Call */}
          <div className="hidden md:block">
            <button
              type="button"
              onClick={() => handleLinkClick('strategy-call')}
              className="group flex items-center space-x-2 text-[11px] md:text-[15px] font-bold uppercase tracking-widest text-white px-6 py-2.5 transition-all duration-500"
            >
              <span>Strategy Call</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Hamburger for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 rounded-full text-white focus:outline-none"
              aria-label="Open menu"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex justify-end"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-[85%] sm:w-80 h-full bg-[#06120E] shadow-2xl flex flex-col p-8 items-start relative border-l border-white/5"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 p-2 text-white hover:scale-110 transition-transform"
                aria-label="Close menu"
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="mt-16 w-full space-y-8">
                <button
                  onClick={() => { handleLinkClick('foundations'); setMenuOpen(false); }}
                  className="text-[13px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-white transition-colors text-left w-full"
                >
                  Foundations
                </button>
                <button
                  onClick={() => { handleLinkClick('services'); setMenuOpen(false); }}
                  className="text-[13px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-white transition-colors text-left w-full"
                >
                  Services
                </button>
                <button
                  onClick={() => { handleLinkClick('ai-lab'); setMenuOpen(false); }}
                  className="text-[13px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-white transition-colors text-left w-full"
                >
                  AI Lab
                </button>

                <div className="h-[1px] w-full bg-white/10 my-4" />

                <button
                  onClick={() => { handleLinkClick('case-studies'); setMenuOpen(false); }}
                  className="text-[13px] uppercase tracking-[0.2em] font-bold text-[#A3E635] hover:opacity-80 transition-opacity text-left w-full"
                >
                  Case Studies
                </button>

                <button
                  type="button"
                  onClick={() => { handleLinkClick('strategy-call'); setMenuOpen(false); }}
                  className="pt-8 group flex items-center space-x-2 text-[13px] font-bold uppercase tracking-[0.2em] text-white hover:opacity-80 transition-opacity text-left w-full"
                >
                  <span>Strategy Call</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
