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

      if (location.pathname === '/') {
        const sectionIds = ['home', 'about', 'projects', 'certifications', 'contact'];
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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavigation = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
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
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${scrolled ? 'bg-[#FFFDF9]/95 shadow-sm backdrop-blur-md border-b border-neutral-200/50' : 'bg-transparent'}`} style={{ paddingTop: 'max(env(safe-area-inset-top, 0), 0.75rem)', paddingLeft: 'max(env(safe-area-inset-left, 0), 0)', paddingRight: 'max(env(safe-area-inset-right, 0), 0)' }}>
      <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 xl:px-16 flex justify-between items-center py-3">
        {/* Logo */}
        <div className="cursor-pointer z-50 flex items-center gap-2 group" onClick={() => handleNavigation('home')}>
          {/* Monogram Icon */}
          <div className="relative w-8 h-8 flex items-center justify-center bg-neutral-900 text-white font-display font-extrabold text-xs tracking-tighter rounded transition-all duration-300 group-hover:bg-[#B39274]">
            <span>SC</span>
          </div>

          {/* Text Logo */}
          <span className="text-base font-display font-extrabold text-neutral-800 tracking-tight transition-colors duration-300">
            Sunidhi.
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`text-xs font-display font-extrabold uppercase tracking-widest transition-all duration-300 relative group flex items-center ${activeSection === item.id ? 'text-[#B39274]' : 'text-neutral-500 hover:text-neutral-900'
                }`}
            >
              {item.name}
              <span className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#B39274] opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${activeSection === item.id ? 'opacity-100' : ''}`}></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 text-neutral-800 hover:text-[#B39274] transition-colors p-2 flex items-center justify-center active:scale-95 relative"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>

        {/* Blur Backdrop */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-neutral-900/10 backdrop-blur-md z-[998] md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-y-0 right-0 w-[240px] bg-[#FFFDF9] border-l border-neutral-250 z-[999] flex flex-col items-center justify-start py-20 md:hidden shadow-xl"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
          >
            <div className="flex flex-col items-stretch w-full">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    handleNavigation(item.id);
                    setIsOpen(false);
                  }}
                  className="w-full py-4 px-8 text-left text-sm font-display font-extrabold uppercase tracking-widest text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors border-b border-neutral-100"
                >
                  {item.name}
                </button>
              ))}
            </div>
            
            <div className="absolute top-4 right-4 z-50">
              <button
                onClick={() => setIsOpen(false)}
                className="text-neutral-800 hover:text-[#B39274] p-2 transition-colors"
              >
                <FiX size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
