import React, { useRef, useState } from 'react';
import { FiCode, FiDatabase, FiServer, FiCpu, FiLayers, FiCheckSquare, FiAward } from 'react-icons/fi';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Building Interactions',
    icon: <FiCode className="w-6 h-6" />,
    skills: ['React.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Next.js', 'Framer Motion', 'JavaScript (ES6+)'],
    border: 'border-[#00f6ff]/40 active-glow-[#00f6ff]',
    bg: 'bg-gradient-to-b from-[#00f6ff]/10 to-transparent',
    accent: 'text-[#00f6ff]',
    glowBg: 'rgba(0, 246, 255, 0.12)',
    mastery: '92%',
    desc: 'Crafting responsive, immersive user interfaces with modern client-state models and high-performance fluid rendering.'
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'System Architecture',
    icon: <FiServer className="w-6 h-6" />,
    skills: ['Node.js', 'Express.js', 'Python', 'Django', 'RESTful APIs', 'JWT Auth', 'Middleware'],
    border: 'border-[#915eff]/40 active-glow-[#915eff]',
    bg: 'bg-gradient-to-b from-[#915eff]/10 to-transparent',
    accent: 'text-[#915eff]',
    glowBg: 'rgba(145, 94, 255, 0.12)',
    mastery: '86%',
    desc: 'Engineering robust server-side routing, indexing collections, and building modular restful endpoints.'
  },
  {
    id: 'database',
    title: 'Database',
    subtitle: 'Data Integrity',
    icon: <FiDatabase className="w-6 h-6" />,
    skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'MySQL', 'Prisma ORM', 'Mongoose', 'Query Indexing'],
    border: 'border-[#ff00ea]/40 active-glow-[#ff00ea]',
    bg: 'bg-gradient-to-b from-[#ff00ea]/10 to-transparent',
    accent: 'text-[#ff00ea]',
    glowBg: 'rgba(255, 0, 234, 0.12)',
    mastery: '84%',
    desc: 'Designing structured relational schemas, setting key constraints, and scaling document storage models.'
  },
  {
    id: 'devops',
    title: 'Infrastructure',
    subtitle: 'VCS & Hosting',
    icon: <FiCpu className="w-6 h-6" />,
    skills: ['Git / GitHub', 'Linux VPS', 'Reverse Proxy', 'Nginx Config', 'CI/CD Pipelines', 'AWS S3'],
    border: 'border-[#00f6ff]/40 active-glow-[#00f6ff]',
    bg: 'bg-gradient-to-b from-[#00f6ff]/10 to-transparent',
    accent: 'text-[#00f6ff]',
    glowBg: 'rgba(0, 246, 255, 0.12)',
    mastery: '80%',
    desc: 'Automating deployment pipelines, managing cloud hosting instances, and configuring web server reverse proxies.'
  }
];

const Skills = () => {
  const containerRef = useRef(null);
  const [activeId, setActiveId] = useState('frontend');

  useGSAP(() => {
    // Title Animation
    gsap.from(".skills-title", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 82%",
      },
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out"
    });

    // Mobile Cards Animation
    gsap.utils.toArray('.mobile-skill-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
        },
        y: 30,
        opacity: 0,
        delay: i * 0.1,
        duration: 0.8
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-[#0a071d] relative overflow-hidden" id="skills">
      {/* Background ambient orbs */}
      <div className="absolute top-1/4 left-1/3 w-[350px] h-[350px] bg-[#915eff]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] bg-[#00f6ff]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 xl:px-24 relative z-10">
        
        {/* Title Header */}
        <div className="mb-16 md:mb-20 text-center skills-title flex flex-col items-center">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#ff00ea]/30 bg-[#ff00ea]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#ff00ea] shadow-[0_0_10px_rgba(255,0,234,0.15)]">
            <FiCheckSquare size={12} className="animate-pulse" /> Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
            Technical Arsenal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#915eff] to-[#00f6ff] rounded-full opacity-80 mt-6 shadow-[0_0_12px_#00f6ff]"></div>
        </div>

        {/* Desktop: Premium Horizontal Glass Accordion */}
        <div className="hidden lg:flex w-full h-[550px] gap-3 rounded-3xl overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.5)] border border-white/5 bg-[#090b14]/50 backdrop-blur-md">
          {skillCategories.map((category) => {
            const isActive = activeId === category.id;
            return (
              <div
                key={category.id}
                className={`relative transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-end overflow-hidden group cursor-pointer ${
                  isActive 
                    ? 'flex-[3.2] bg-white/[0.02] border-l-2' 
                    : 'flex-[0.6] hover:flex-[0.8] bg-transparent hover:bg-white/[0.01]'
                } ${isActive ? category.border : 'border-white/5'}`}
                onMouseEnter={() => setActiveId(category.id)}
                style={{ 
                  boxShadow: isActive ? `inset 0 0 30px ${category.glowBg}` : 'none'
                }}
              >
                {/* Visual HUD background marks */}
                <div className="absolute top-0 right-0 p-8 opacity-[0.02] transform translate-x-1/4 -translate-y-1/4 pointer-events-none">
                  <FiLayers className="w-64 h-64 text-white" />
                </div>

                {/* Vertical Column Text (Collapsed State) */}
                <div className={`absolute top-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 transition-opacity duration-300 pointer-events-none ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                  <div className={`whitespace-nowrap transform -rotate-90 origin-center font-bold tracking-[0.25em] uppercase text-sm text-white/50 group-hover:text-white/80 transition-colors`}>
                    {category.title}
                  </div>
                  <div className={`mt-8 ${category.accent} opacity-60 group-hover:opacity-100 transition-opacity`}>
                    {category.icon}
                  </div>
                </div>

                {/* Expanded State details */}
                <div className={`p-10 min-w-[500px] transition-all duration-500 transform ${isActive ? 'opacity-100 translate-y-0 delay-150' : 'opacity-0 translate-y-10 absolute bottom-0 left-0 pointer-events-none'}`}>
                  
                  {/* Grid Layout inside expanded slice */}
                  <div className="grid grid-cols-12 gap-8 items-center">
                    
                    {/* Left: Score Dial Gauge Indicator */}
                    <div className="col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-white/[0.01] border border-white/5">
                      <div 
                        className="relative w-24 h-24 flex items-center justify-center rounded-full border-4 border-dashed animate-spin-slow mb-3"
                        style={{ borderColor: `${category.accent.includes('#') ? category.accent : '#00f6ff'}30` }}
                      >
                        <span className="text-2xl font-black text-white font-mono">{category.mastery}</span>
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-white/40 flex items-center gap-1">
                        <FiAward size={10} style={{ color: category.accent }} /> CORE RATING
                      </span>
                    </div>

                    {/* Right: Specific details & Tag clouds */}
                    <div className="col-span-8 space-y-5">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${category.accent}`}>
                          {category.icon}
                        </div>
                        <div>
                          <h3 className="text-3xl font-black text-white">
                            {category.title}
                          </h3>
                          <p className={`text-xs font-bold uppercase tracking-wider mt-0.5 ${category.accent}`}>
                            {category.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-xl">
                        {category.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {category.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3.5 py-2 bg-white/5 rounded-lg text-white/80 font-mono font-bold text-xs border border-white/5 hover:border-white/15 hover:text-white transition-all cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: Vertical Grid */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category) => (
            <div 
              key={category.id} 
              className={`mobile-skill-card rounded-3xl p-6 bg-[#090b14]/75 shadow-lg relative overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300`}
            >
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] text-white">
                {category.icon}
              </div>

              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 bg-white/5 rounded-xl border border-white/10 ${category.accent}`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-none">{category.title}</h3>
                  <p className={`text-xs font-bold uppercase tracking-wider mt-1.5 ${category.accent}`}>{category.subtitle}</p>
                </div>
                
                {/* Mini Score indicator */}
                <div className="ml-auto px-2.5 py-1 rounded bg-white/5 border border-white/5 font-mono text-xs font-bold text-white/70">
                  {category.mastery}
                </div>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-2.5 py-1.5 bg-white/5 rounded-lg text-[10px] font-bold font-mono tracking-wide text-white/70 border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
