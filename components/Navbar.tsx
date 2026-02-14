import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import kanpyWordmark from '../src/assets/kanpy.png';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
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
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 py-4 ${
        scrolled ? 'bg-[#06120E]/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent'
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

        <div className="hidden md:flex items-center space-x-10 text-[11px] uppercase tracking-widest font-medium text-gray-400">
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

        <div>
          <button
            type="button"
            onClick={() => handleLinkClick('strategy-call')}
            className="group flex items-center space-x-2 text-[11px] font-bold uppercase tracking-widest text-white px-6 py-2.5 transition-all duration-500"
          >
            <span>Strategy Call</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
