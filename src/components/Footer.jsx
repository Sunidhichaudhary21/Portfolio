import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFFDF9] text-neutral-400 py-12 border-t border-neutral-200/50 shadow-sm">
      <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 xl:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-base font-display font-extrabold text-neutral-800 mb-1">Sunidhi Chaudhary</h3>
            <p className="text-neutral-400 text-xs font-sans">
              &copy; {currentYear}. All Rights Reserved.
            </p>
          </div>

          {/* Quick Links (Horizontal) */}
          <div className="flex gap-6 md:gap-8 flex-wrap justify-center font-display font-extrabold text-[10px] tracking-widest uppercase">
            <Link to="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <a href="/#about" className="hover:text-neutral-900 transition-colors">About</a>
            <a href="/#projects" className="hover:text-neutral-900 transition-colors">Projects</a>
            <a href="/#certifications" className="hover:text-neutral-900 transition-colors">Certifications</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Sunidhichaudhary21"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-neutral-900 hover:scale-105 transition-all duration-300"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/sunidhi-chaudhary-b9a188304/"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-neutral-900 hover:scale-105 transition-all duration-300"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="mailto:csunidhi22@gmail.com"
              className="text-neutral-400 hover:text-neutral-900 hover:scale-105 transition-all duration-300"
            >
              <FiMail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
