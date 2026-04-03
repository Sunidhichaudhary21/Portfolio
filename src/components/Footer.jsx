import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050816] text-[#aaa6c3] py-10 border-t border-white/5 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-1">Sunidhi Chaudhary</h3>
            <p className="text-[#aaa6c3]/60 text-sm">
              &copy; {currentYear}. All Rights Reserved.
            </p>
          </div>

          {/* Quick Links (Horizontal) */}
          <div className="flex gap-6 md:gap-8 flex-wrap justify-center">
            <Link to="/" className="text-sm font-medium hover:text-[#00f6ff] hover:drop-shadow-[0_0_8px_rgba(0,246,255,0.5)] transition-all">Home</Link>
            <a href="/#about" className="text-sm font-medium hover:text-[#00f6ff] hover:drop-shadow-[0_0_8px_rgba(0,246,255,0.5)] transition-all">About</a>
            <a href="/#projects" className="text-sm font-medium hover:text-[#00f6ff] hover:drop-shadow-[0_0_8px_rgba(0,246,255,0.5)] transition-all">Projects</a>
            <a href="/#skills" className="text-sm font-medium hover:text-[#00f6ff] hover:drop-shadow-[0_0_8px_rgba(0,246,255,0.5)] transition-all">Skills</a>
            <a href="/#contact" className="text-sm font-medium hover:text-[#00f6ff] hover:drop-shadow-[0_0_8px_rgba(0,246,255,0.5)] transition-all">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Sunidhichaudhary21"
              target="_blank"
              rel="noreferrer"
              className="text-[#aaa6c3] hover:text-[#915eff] hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(145,94,255,0.6)] transition-all duration-300"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sunidhi-chaudhary-b9a188304/"
              target="_blank"
              rel="noreferrer"
              className="text-[#aaa6c3] hover:text-[#00f6ff] hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(0,246,255,0.6)] transition-all duration-300"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:csunidhi22@gmail.com"
              className="text-[#aaa6c3] hover:text-[#ff00ea] hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,0,234,0.6)] transition-all duration-300"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
