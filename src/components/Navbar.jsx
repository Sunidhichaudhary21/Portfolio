import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Close menu when scrolling
    if (isOpen) {
      const handleScroll = () => {
        setIsOpen(false);
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Only track active section on home page
      if (location.pathname === '/') {
        const sectionIds = ['home', 'about', 'projects', 'skills', 'certifications', 'contact'];
        const scrollPos = window.scrollY + 100;

        let current = 'home';
        sectionIds.forEach((id) => {
          const el = document.getElementById(id);
          if (el && scrollPos >= el.offsetTop) {
            current = id;
          }
        });
        setActiveSection(current);
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initially

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavigation = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    } else {
      scrollToSection(id);
    }
    setIsOpen(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const isMobile = window.innerWidth < 768;
      const yOffset = isMobile ? -70 : -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${scrolled ? 'bg-[#050816]/95 shadow-lg backdrop-blur-md border-b border-white/5' : 'bg-[#050816]/80 backdrop-blur-sm shadow-sm'}`} style={{ paddingTop: 'max(env(safe-area-inset-top, 0), 0.75rem)', paddingLeft: 'max(env(safe-area-inset-left, 0), 0)', paddingRight: 'max(env(safe-area-inset-right, 0), 0)' }}>
      <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-12 flex justify-between items-center py-3 md:py-4">
        {/* Logo */}
        <div className="cursor-pointer z-50 flex items-center gap-2 md:gap-3 group" onClick={() => handleNavigation('home')}>
          {/* SC Monogram Icon */}
          <div className="relative w-8 md:w-10 h-8 md:h-10 flex items-center justify-center bg-white/5 text-white font-black text-sm md:text-lg tracking-tighter rounded-lg overflow-hidden transition-all duration-300 group-hover:bg-[#915eff] group-hover:rotate-3 shadow-md border border-white/10 group-hover:shadow-[0_0_15px_#915eff55]">
            <span className="relative z-10">SC</span>
          </div>

          {/* Text Logo */}
          <div className="flex flex-col leading-none">
            <span className="text-lg md:text-xl font-black text-white tracking-tight group-hover:text-[#915eff] transition-colors duration-300">
              Sunidhi
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 relative group flex items-center ${activeSection === item.id ? 'text-[#915eff]' : 'text-white/70 hover:text-white'
                }`}
            >
              {item.name}
              <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#915eff] shadow-[0_0_8px_#915eff] opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${activeSection === item.id ? 'opacity-100' : ''}`}></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 text-white hover:text-[#915eff] transition-colors p-2 h-12 w-12 flex items-center justify-center active:scale-95 relative"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Blur Backdrop */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[998] md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-[#050816] z-[999] flex flex-col items-center justify-start gap-0 md:hidden animate-fadeIn"
            style={{ paddingTop: 'max(env(safe-area-inset-top, 0), 5rem)' }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
          >
            <div className="flex flex-col items-center gap-0 w-full">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    handleNavigation(item.id);
                    setIsOpen(false);
                  }}
                  className="w-full py-5 px-6 text-2xl font-bold text-white hover:text-[#915eff] hover:bg-white/5 active:bg-white/10 transition-all duration-150 border-b border-white/5 last:border-b-0"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </button>
              ))}
            </div>
            
            {/* Close button area at bottom */}
            <div className="absolute top-4 right-4 z-50">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-[#915eff] p-2 transition-colors"
              >
                <FiX size={28} />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
