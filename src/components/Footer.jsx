import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B3331] text-[#FDF8F3]/80 py-16 border-t border-[#0B3331] shadow-2xl">
      <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 xl:px-16">
        
        {/* TOP PANEL: Editorial Redesign */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#FDF8F3]/15 text-left items-start">
          
          {/* Big Header */}
          <div className="md:col-span-6 flex flex-col items-start gap-4">
            <h2 className="text-4xl sm:text-5xl font-serif font-black text-[#FDF8F3] leading-tight tracking-tight">
              Let’s create <br />
              something <span className="underline decoration-[#EE9372] decoration-wavy underline-offset-4">amazing</span>! ✦
            </h2>
            <p className="text-[#FDF8F3]/60 font-sans text-sm max-w-xs leading-relaxed mt-2">
              Always seeking exciting new projects, collaborations, and opportunities. Reach out and let's construct the future together.
            </p>
          </div>

          {/* Get In Touch */}
          <div className="md:col-span-3 flex flex-col items-start">
            <h3 className="font-sans font-black text-xs uppercase tracking-widest text-[#FBC879] mb-6">
              Get in touch
            </h3>
            <ul className="space-y-4 font-sans text-sm font-semibold">
              <li>
                <a href="mailto:csunidhi22@gmail.com" className="flex items-center gap-2 hover:text-[#EE9372] transition-colors">
                  <FiMail size={14} className="text-[#EE9372]" /> csunidhi22@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918000114849" className="flex items-center gap-2 hover:text-[#EE9372] transition-colors">
                  <FiPhone size={14} className="text-[#EE9372]" /> +91 8000114849
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-[#FDF8F3]/60">
                  <FiMapPin size={14} className="text-[#EE9372]/60" /> Vadodara, Gujarat
                </span>
              </li>
            </ul>
          </div>

          {/* Follow Along */}
          <div className="md:col-span-3 flex flex-col items-start">
            <h3 className="font-sans font-black text-xs uppercase tracking-widest text-[#FBC879] mb-6">
              Follow along
            </h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/Sunidhichaudhary21"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full border border-[#FDF8F3]/20 flex items-center justify-center text-[#FDF8F3] hover:text-[#0B3331] hover:bg-[#FDF8F3] hover:border-[#FDF8F3] transition-all duration-300 shadow-sm"
              >
                <FiGithub size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/sunidhi-chaudhary-b9a188304/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-[#FDF8F3]/20 flex items-center justify-center text-[#FDF8F3] hover:text-[#0B3331] hover:bg-[#FDF8F3] hover:border-[#FDF8F3] transition-all duration-300 shadow-sm"
              >
                <FiLinkedin size={16} />
              </a>
            </div>

            {/* Quick navigations */}
            <div className="mt-8 flex flex-wrap gap-4 font-sans font-black text-[10px] tracking-widest uppercase">
              <button onClick={() => scrollToSection('home')} className="hover:text-[#EE9372] transition-colors cursor-pointer">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-[#EE9372] transition-colors cursor-pointer">About</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-[#EE9372] transition-colors cursor-pointer">Projects</button>
              <button onClick={() => scrollToSection('certifications')} className="hover:text-[#EE9372] transition-colors cursor-pointer">Certifications</button>
            </div>
          </div>

        </div>

        {/* BOTTOM PANEL: copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans text-[#FDF8F3]/40">
          <div>
            <h4 className="font-serif font-black text-sm text-[#FDF8F3]">Sunidhi Chaudhary</h4>
          </div>
          <div>
            <p>&copy; {currentYear}. Crafted with love. All Rights Reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
