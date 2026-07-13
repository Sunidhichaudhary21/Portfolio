import React from 'react';
import { FiMonitor, FiSmile, FiLayers, FiCode, FiAward } from 'react-icons/fi';
import { SiFigma, SiGit, SiPostman, SiMongodb, SiPostgresql } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import winkingAvatar from '../assets/winking_developer_avatar.png';

const ProfileDetails = () => {
  return (
    <section className="py-24 bg-[#FDF8F3] relative overflow-hidden" id="about">
      
      {/* Background doodles */}
      <div className="absolute top-[30%] left-[2%] text-[#EE9372] text-4xl opacity-20 pointer-events-none">👑</div>
      <div className="absolute top-[60%] left-[8%] text-[#EE9372] text-3xl opacity-20 pointer-events-none">☺</div>

      <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        
        {/* Title */}
        <div className="mb-16 flex items-center gap-3 text-left">
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#0B3331]">
            What I Do
          </h2>
          <span className="text-2xl text-[#EE9372] animate-pulse-slow">✦</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* LEFT COLUMN: Winking Avatar in Double Circle Frame */}
          <div className="lg:col-span-5 flex justify-center relative w-full" data-aos="zoom-in">
            {/* Styled Circle Frame */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#EAF3EB] flex items-center justify-center border-4 border-[#0B3331]/20">
              
              {/* Outer decorative dashed border */}
              <div className="absolute inset-[-12px] rounded-full border-2 border-dashed border-[#EE9372]/30 animate-spin-slow"></div>

              {/* Avatar image */}
              <img
                src={winkingAvatar}
                alt="Winking Developer Avatar"
                className="w-full h-full object-contain rounded-full shadow-lg"
              />
            </div>

            {/* Doodles absolute overlays */}
            <div className="absolute top-2 left-[15%] text-[#FBC879] text-3xl animate-float">✦</div>
            <div className="absolute bottom-6 right-[15%] text-[#EE9372] text-3xl animate-pulse-slow">✿</div>
          </div>

          {/* RIGHT COLUMN: 4-Grid of Services / Skill Areas */}
          <div className="lg:col-span-7 flex flex-col pt-4" data-aos="fade-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* Card 1: Web Development */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0B3331] text-[#FDF8F3] flex items-center justify-center flex-shrink-0 shadow-md">
                  <FiMonitor size={20} />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-serif font-black text-[#0B3331] mb-1">
                    Web Development
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0B3331]/75 leading-relaxed">
                    Beautiful, responsive web applications built with modern frameworks and robust CSS grid systems.
                  </p>
                </div>
              </div>

              {/* Card 2: Full-Stack Architecture */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0B3331] text-[#FDF8F3] flex items-center justify-center flex-shrink-0 shadow-md">
                  <FiLayers size={20} />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-serif font-black text-[#0B3331] mb-1">
                    Full-Stack Setup
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0B3331]/75 leading-relaxed">
                    Developing robust backend REST APIs, schema models, and secure database layers with Node.js and SQL/NoSQL.
                  </p>
                </div>
              </div>

              {/* Card 3: Algorithm Practice / DSA */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0B3331] text-[#FDF8F3] flex items-center justify-center flex-shrink-0 shadow-md">
                  <FiCode size={20} />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-serif font-black text-[#0B3331] mb-1">
                    Problem Solving
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0B3331]/75 leading-relaxed">
                    Writing clean, highly optimized logic for algorithms and data structures to solve complex coding challenges.
                  </p>
                </div>
              </div>

              {/* Card 4: UI/UX Implementation */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0B3331] text-[#FDF8F3] flex items-center justify-center flex-shrink-0 shadow-md">
                  <FiSmile size={20} />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-serif font-black text-[#0B3331] mb-1">
                    UI/UX Execution
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0B3331]/75 leading-relaxed">
                    Implementing interactive hover states, micro-animations, and fluid transitions that make apps feel premium.
                  </p>
                </div>
              </div>

            </div>

            {/* Softwares & Tools row */}
            <div className="mt-12 pt-8 border-t border-[#0B3331]/10 text-left flex flex-col sm:flex-row sm:items-center gap-4">
              <span className="font-sans font-black text-xs uppercase tracking-widest text-[#0B3331]/60">
                Tech Stack & Tools:
              </span>
              <div className="flex flex-wrap gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FF7262] text-white flex items-center justify-center hover:scale-108 transition-transform cursor-pointer shadow-sm" title="Figma">
                  <SiFigma size={16} />
                </div>
                <div className="w-9 h-9 rounded-xl bg-[#007ACC] text-white flex items-center justify-center hover:scale-108 transition-transform cursor-pointer shadow-sm" title="VS Code">
                  <VscCode size={16} />
                </div>
                <div className="w-9 h-9 rounded-xl bg-[#F05032] text-white flex items-center justify-center hover:scale-108 transition-transform cursor-pointer shadow-sm" title="Git">
                  <SiGit size={16} />
                </div>
                <div className="w-9 h-9 rounded-xl bg-[#FF6C37] text-white flex items-center justify-center hover:scale-108 transition-transform cursor-pointer shadow-sm" title="Postman">
                  <SiPostman size={16} />
                </div>
                <div className="w-9 h-9 rounded-xl bg-[#47A248] text-white flex items-center justify-center hover:scale-108 transition-transform cursor-pointer shadow-sm" title="MongoDB">
                  <SiMongodb size={16} />
                </div>
                <div className="w-9 h-9 rounded-xl bg-[#336791] text-white flex items-center justify-center hover:scale-108 transition-transform cursor-pointer shadow-sm" title="PostgreSQL">
                  <SiPostgresql size={16} />
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* TESTIMONIAL & STATS BANNER */}
        <div 
          className="w-full bg-[#FBC879] rounded-[2rem] border-4 border-[#0B3331] p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl relative z-10"
          data-aos="fade-up"
        >
          {/* Testimonial Quote */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-left">
            {/* Left border line representation */}
            <div className="hidden sm:block w-1.5 h-16 bg-[#0B3331] rounded-full self-stretch"></div>
            
            <div className="space-y-3">
              <p className="font-serif italic text-base sm:text-lg text-[#0B3331] font-semibold leading-relaxed">
                "Sunidhi brings a rare mix of coding rigor, structured analytical problem-solving, and a keen eye for implementation details. She is a true joy to collaborate with."
              </p>
              
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EE9372]"></span>
                <span className="font-sans font-black text-xs uppercase tracking-wider text-[#0B3331]">
                  RYM Grenergy Team • Web Development Intern
                </span>
              </div>
            </div>
          </div>

          {/* Vertical divider line */}
          <div className="hidden lg:block lg:col-span-1 justify-self-center w-[2px] h-16 bg-[#0B3331]/20"></div>

          {/* Statistics Grid */}
          <div className="lg:col-span-4 grid grid-cols-3 gap-4 text-center lg:text-left">
            {/* Stat 1 */}
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-serif font-black text-[#0B3331] leading-none">
                250+
              </span>
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#0B3331]/80 mt-1">
                LeetCode Solved
              </span>
            </div>
            
            {/* Stat 2 */}
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-serif font-black text-[#0B3331] leading-none">
                5+
              </span>
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#0B3331]/80 mt-1">
                Projects Completed
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-serif font-black text-[#0B3331] leading-none">
                1+
              </span>
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#0B3331]/80 mt-1">
                Years Experience
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProfileDetails;
