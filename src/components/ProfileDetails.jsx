import React from 'react';
import { FiMail, FiLinkedin, FiGithub, FiExternalLink } from 'react-icons/fi';
import { SiFigma, SiGit, SiPostman, SiMongodb, SiPostgresql } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import userPhoto from '../assets/developer_photo.png';

const ProfileDetails = () => {
  return (
    <section className="py-24 bg-[#FFFDF9] relative overflow-hidden" id="about">
      <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* LEFT COLUMN: 3D ID BADGE & LANYARD */}
          <div className="lg:col-span-5 flex flex-col items-center relative w-full pt-16">
            {/* Lanyard Strap looping up */}
            <div className="absolute top-0 w-12 h-20 flex justify-center z-0">
              {/* Left loop side */}
              <div className="w-[3px] bg-neutral-300 h-20 absolute left-4 origin-top rotate-[-10deg] opacity-75"></div>
              {/* Right loop side */}
              <div className="w-[3px] bg-neutral-300 h-20 absolute right-4 origin-top rotate-[10deg] opacity-75"></div>
              {/* Strap connection ring/clip */}
              <div className="badge-clip w-6 h-6 rounded-full absolute bottom-0 flex items-center justify-center border border-white z-10">
                <div className="w-2.5 h-2.5 bg-neutral-500 rounded-full"></div>
              </div>
            </div>

            {/* Badge plastic attachment card */}
            <div className="w-40 absolute top-20 h-10 bg-transparent flex justify-center z-10">
              <div className="w-8 h-10 bg-white/40 border border-neutral-300 rounded-b-md flex justify-center items-end pb-1 shadow-sm">
                <div className="w-4 h-2 bg-neutral-400 rounded-full"></div>
              </div>
            </div>

            {/* ID Badge Container */}
            <div className="id-badge-container relative w-72 sm:w-80 bg-white rounded-2xl border border-neutral-200 p-5 mt-24 overflow-hidden z-20">
              {/* Plastic card surface reflection shine */}
              <div className="plastic-overlay absolute inset-0 z-10"></div>
              
              {/* Inside Badge Card Structure */}
              <div className="relative flex flex-col items-center">
                {/* Holder Clip Cutout representation */}
                <div className="w-12 h-3 bg-neutral-100 rounded-full border border-neutral-200 mb-6"></div>
                
                {/* Photo frame */}
                <div className="w-56 h-72 rounded-lg overflow-hidden border border-neutral-200 shadow-sm relative group bg-neutral-50">
                  <img
                    src={userPhoto}
                    alt="Sunidhi Chaudhary"
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-2 left-2 bg-white/80 backdrop-blur-md px-2 py-0.5 rounded text-[8px] font-bold text-neutral-600 tracking-wider">
                    SYS.REF // 2026
                  </div>
                </div>

                {/* Subtitle / Barcode Area */}
                <div className="w-full flex items-center justify-between mt-6 px-1">
                  <div className="text-left">
                    <h3 className="font-display font-extrabold text-neutral-800 text-sm tracking-tight">SUNIDHI C.</h3>
                    <p className="text-[9px] font-bold text-neutral-400 font-sans uppercase tracking-widest mt-0.5">Full-Stack Dev</p>
                  </div>
                  {/* Styled barcode mockup */}
                  <div className="flex gap-[2px] items-center h-6 opacity-60">
                    <div className="w-[1px] h-full bg-black"></div>
                    <div className="w-[3px] h-full bg-black"></div>
                    <div className="w-[1px] h-full bg-black"></div>
                    <div className="w-[2px] h-full bg-black"></div>
                    <div className="w-[1px] h-full bg-black"></div>
                    <div className="w-[4px] h-full bg-black"></div>
                    <div className="w-[1px] h-full bg-black"></div>
                    <div className="w-[2px] h-full bg-black"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: TEXT CONTENT & COLUMNS */}
          <div className="lg:col-span-7 flex flex-col pt-4">
            
            {/* Header Title */}
            <div className="mb-6">
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-400 leading-none">
                HI, I'm <span className="text-[#B39274]">Sunidhi</span>
              </h2>
            </div>

            {/* Intro paragraph */}
            <div className="mb-12">
              <p className="text-neutral-500 font-sans text-base sm:text-lg leading-relaxed max-w-xl">
                I am a Full-Stack Web Developer and I build because I love solving problems, writing clean code, and making things work seamlessly. Development isn't just about syntax, it's about architecture, performance, and the tiny details that make a product robust. It's not just about making it run; it's about feeling effortless. If the architecture runs optimally without overthinking, I've done my job.
              </p>
            </div>

            {/* Grid Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-neutral-100">
              
              {/* COLUMN 1: EXPERIENCE */}
              <div>
                <h4 className="font-display font-extrabold text-neutral-800 text-[13px] sm:text-sm tracking-[0.15em] uppercase mb-6">
                  Experience
                </h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="text-sm sm:text-base font-extrabold text-neutral-700 leading-snug">
                      Web Developer Intern
                    </h5>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-1">RYM Grenergy | Feb 2026 - Present</p>
                  </div>
                  <div>
                    <h5 className="text-sm sm:text-base font-extrabold text-neutral-700 leading-snug">
                      Freelance Web Developer
                    </h5>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-1">Self-employed | 2024 - Present</p>
                  </div>

                </div>
              </div>

              {/* COLUMN 2: CODING ACTIVITIES */}
              <div>
                <h4 className="font-display font-extrabold text-neutral-800 text-[13px] sm:text-sm tracking-[0.15em] uppercase mb-6">
                  Coding Profile
                </h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="text-sm sm:text-base font-extrabold text-neutral-700 leading-snug">
                      LeetCode DSA Solver
                    </h5>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-1">250+ Solved | Active Practice</p>
                  </div>
                  <div>
                    <h5 className="text-sm sm:text-base font-extrabold text-neutral-700 leading-snug">
                      HackerRank Certified
                    </h5>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-1">Java & Problem Solving</p>
                  </div>
                  <div>
                    <h5 className="text-sm sm:text-base font-extrabold text-neutral-700 leading-snug">
                      Codeforces & CodeChef
                    </h5>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-1">Competitive Contestant</p>
                  </div>
                </div>
              </div>

              {/* COLUMN 3: CONTACT */}
              <div>
                <h4 className="font-display font-extrabold text-neutral-800 text-[13px] sm:text-sm tracking-[0.15em] uppercase mb-6">
                  Contact
                </h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="https://github.com/Sunidhichaudhary21"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2.5 group text-xs sm:text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      <div className="w-5 h-5 rounded bg-neutral-900 text-white flex items-center justify-center flex-shrink-0">
                        <FiGithub size={12} />
                      </div>
                      <span className="font-sans font-medium truncate">github.com/Sunidhichaudhary21</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/sunidhi-chaudhary-b9a188304/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2.5 group text-xs sm:text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      <div className="w-5 h-5 rounded bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                        <FiLinkedin size={12} />
                      </div>
                      <span className="font-sans font-medium truncate">linkedin.com/in/sunidhi...</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:csunidhi22@gmail.com"
                      className="flex items-center gap-2.5 group text-xs sm:text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      <div className="w-5 h-5 rounded bg-red-500 text-white flex items-center justify-center flex-shrink-0">
                        <FiMail size={12} />
                      </div>
                      <span className="font-sans font-medium truncate">csunidhi22@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>

            </div>

            {/* SOFTWARES AND TOOLS */}
            <div className="mt-8 flex flex-col md:flex-row md:items-center gap-6">
              <span className="font-display font-extrabold text-neutral-800 text-[13px] sm:text-sm tracking-[0.15em] uppercase">
                Softwares
              </span>
              
              <div className="flex flex-wrap gap-2.5">
                {/* Figma */}
                <div className="w-10 h-10 rounded bg-[#FF7262] text-white flex items-center justify-center hover:scale-105 transition-transform cursor-pointer shadow-sm relative group" title="Figma">
                  <SiFigma size={18} />
                </div>
                {/* VS Code */}
                <div className="w-10 h-10 rounded bg-[#007ACC] text-white flex items-center justify-center hover:scale-105 transition-transform cursor-pointer shadow-sm relative group" title="VS Code">
                  <VscCode size={18} />
                </div>
                {/* Git */}
                <div className="w-10 h-10 rounded bg-[#F05032] text-white flex items-center justify-center hover:scale-105 transition-transform cursor-pointer shadow-sm relative group" title="Git">
                  <SiGit size={18} />
                </div>
                {/* Postman */}
                <div className="w-10 h-10 rounded bg-[#FF6C37] text-white flex items-center justify-center hover:scale-105 transition-transform cursor-pointer shadow-sm relative group" title="Postman">
                  <SiPostman size={18} />
                </div>
                {/* MongoDB */}
                <div className="w-10 h-10 rounded bg-[#47A248] text-white flex items-center justify-center hover:scale-105 transition-transform cursor-pointer shadow-sm relative group" title="MongoDB">
                  <SiMongodb size={18} />
                </div>
                {/* PostgreSQL */}
                <div className="w-10 h-10 rounded bg-[#336791] text-white flex items-center justify-center hover:scale-105 transition-transform cursor-pointer shadow-sm relative group" title="PostgreSQL">
                  <SiPostgresql size={18} />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProfileDetails;
