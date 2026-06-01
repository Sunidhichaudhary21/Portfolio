import React, { useRef, useState, useEffect } from 'react';
import { FiCpu, FiServer, FiDatabase, FiLayers, FiChevronLeft, FiChevronRight, FiSliders } from 'react-icons/fi';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    id: 'frontend',
    title: 'FRONTEND_ENGINE',
    subtitle: 'UI RENDER SYSTEM',
    icon: <FiCpu className="w-5 h-5" />,
    accent: '#00f6ff',
    skills: [
      { name: 'React.js', rating: '95%' },
      { name: 'TypeScript', rating: '88%' },
      { name: 'Tailwind CSS', rating: '96%' },
      { name: 'GSAP Animation', rating: '85%' },
      { name: 'Next.js Framework', rating: '90%' },
      { name: 'Framer Motion', rating: '82%' }
    ],
    desc: 'Processing interactive state engines, compiling high-fps view layouts, and managing modular layouts.'
  },
  {
    id: 'backend',
    title: 'BACKEND_LOGIC',
    subtitle: 'CORE SERVICE HUB',
    icon: <FiServer className="w-5 h-5" />,
    accent: '#915eff',
    skills: [
      { name: 'Node.js', rating: '92%' },
      { name: 'Express.js', rating: '90%' },
      { name: 'Python', rating: '82%' },
      { name: 'REST APIs', rating: '94%' },
      { name: 'JWT Auth', rating: '88%' },
      { name: 'Middleware', rating: '85%' }
    ],
    desc: 'Routing request buses, organizing secure middleware handshakes, and compiling asynchronous servers.'
  },
  {
    id: 'database',
    title: 'DATA_REGISTRY',
    subtitle: 'PERSISTENCE CORE',
    icon: <FiDatabase className="w-5 h-5" />,
    accent: '#ff00ea',
    skills: [
      { name: 'PostgreSQL', rating: '86%' },
      { name: 'MongoDB', rating: '88%' },
      { name: 'Prisma ORM', rating: '90%' },
      { name: 'Query Index', rating: '80%' },
      { name: 'Redis Cache', rating: '75%' },
      { name: 'SQL Schemas', rating: '82%' }
    ],
    desc: 'Indexing dataset arrays, resolving key constraints, and tuning database transactional queries.'
  },
  {
    id: 'devops',
    title: 'INFRA_CONDUIT',
    subtitle: 'DEPLOYMENT REGISTRY',
    icon: <FiLayers className="w-5 h-5" />,
    accent: '#ffb700',
    skills: [
      { name: 'Git / GitHub', rating: '92%' },
      { name: 'Linux VPS', rating: '80%' },
      { name: 'Nginx Proxy', rating: '84%' },
      { name: 'CI/CD Pipelines', rating: '78%' },
      { name: 'AWS Cloud', rating: '82%' },
      { name: 'SSL / HTTPS', rating: '85%' }
    ],
    desc: 'Automating continuous build pipelines, managing remote cloud instances, and proxying incoming networks.'
  }
];

const Skills = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % skillCategories.length);
    setRotationAngle((prev) => prev - 90);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
    setRotationAngle((prev) => prev + 90);
  };

  const handleCardClick = (index) => {
    if (isMobile) {
      setActiveIndex(index);
      return;
    }
    // Calculate rotation offset
    const diff = index - activeIndex;
    if (diff === 0) return;
    
    // Find shortest path in 4-card layout
    let steps = diff;
    if (diff > 2) steps = diff - 4;
    if (diff < -2) steps = diff + 4;

    setActiveIndex(index);
    setRotationAngle((prev) => prev - (steps * 90));
  };

  useGSAP(() => {
    // Title intro
    gsap.from(".skills-title-block", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 35,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-[#0a071d] relative overflow-hidden" id="skills">
      {/* Dynamic atmospheric backdrops */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.008)_1px,transparent_1px)] [background-size:30px_30px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#915eff]/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#00f6ff]/5 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 xl:px-24 relative z-10 flex flex-col items-center">
        
        {/* Title Header */}
        <div className="mb-20 text-center skills-title-block flex flex-col items-center">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#915eff] shadow-[0_0_12px_rgba(145,94,255,0.1)]">
            <FiSliders size={12} className="animate-pulse" /> Holographic Skill Deck
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
            Technical Arsenal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#915eff] to-[#00f6ff] rounded-full opacity-80 mt-6 shadow-[0_0_12px_#00f6ff]"></div>
        </div>

        {/* 3D Carousel container (Desktop) */}
        {!isMobile ? (
          <div className="relative w-full max-w-4xl h-[550px] flex flex-col items-center justify-center select-none">
            
            {/* 3D Ring stage wrapper */}
            <div 
              className="relative w-80 h-[480px]"
              style={{
                perspective: '1200px',
                transformStyle: 'preserve-3d'
              }}
            >
              
              {/* Inner rotatable ring */}
              <div
                className="w-full h-full relative transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${rotationAngle}deg)`
                }}
              >
                {skillCategories.map((category, index) => {
                  const isCurrent = activeIndex === index;
                  return (
                    <div
                      key={category.id}
                      onClick={() => handleCardClick(index)}
                      className="absolute inset-0 w-full h-full rounded-2xl bg-[#090b14]/90 border backdrop-blur-xl p-6 md:p-8 flex flex-col justify-between transition-all duration-700 ease-out cursor-pointer hover:border-white/20"
                      style={{
                        transform: `rotateY(${index * 90}deg) translateZ(320px)`,
                        backfaceVisibility: 'hidden',
                        borderColor: isCurrent ? category.accent : 'rgba(255,255,255,0.04)',
                        opacity: isCurrent ? 1 : 0.25,
                        filter: isCurrent ? 'none' : 'blur(2px)',
                        boxShadow: isCurrent 
                          ? `0 0 35px ${category.accent}15, inset 0 0 20px ${category.accent}05` 
                          : 'none'
                      }}
                    >
                      {/* Corner marks */}
                      <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t border-l border-white/10" />
                      <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t border-r border-white/10" />
                      <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b border-l border-white/10" />
                      <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b border-r border-white/10" />

                      {/* Header block */}
                      <div className="flex items-start justify-between border-b border-white/5 pb-4">
                        <div>
                          <h3 
                            className="text-lg font-black font-mono tracking-wider transition-colors duration-300"
                            style={{ color: isCurrent ? category.accent : '#ffffff' }}
                          >
                            {category.title}
                          </h3>
                          <p className="text-[9px] font-mono text-white/30 uppercase mt-1 tracking-widest">
                            {category.subtitle}
                          </p>
                        </div>
                        <div 
                          className="p-2.5 rounded-xl border transition-all duration-300"
                          style={{
                            borderColor: isCurrent ? category.accent : 'rgba(255,255,255,0.05)',
                            color: isCurrent ? category.accent : 'rgba(255,255,255,0.4)',
                            backgroundColor: isCurrent ? `${category.accent}08` : 'transparent'
                          }}
                        >
                          {category.icon}
                        </div>
                      </div>

                      {/* Diagnostic skill bars */}
                      <div className="space-y-4 my-6">
                        {category.skills.map((skill, sIdx) => (
                          <div key={sIdx} className="flex flex-col gap-1">
                            <div className="flex justify-between font-mono text-[10px]">
                              <span className="text-white/70 font-semibold">{skill.name}</span>
                              <span style={{ color: isCurrent ? category.accent : 'inherit' }} className="font-bold">{skill.rating}</span>
                            </div>
                            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden relative">
                              <div 
                                className="h-full rounded-full transition-all duration-1000 ease-out"
                                style={{ 
                                  width: isCurrent ? skill.rating : '0%',
                                  backgroundColor: category.accent,
                                  boxShadow: `0 0 8px ${category.accent}`
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Footer block */}
                      <div className="border-t border-white/5 pt-4">
                        <p className="text-[10px] font-mono leading-relaxed text-white/45">
                          {category.desc}
                        </p>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>

            {/* Central Glow Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-7 w-20 h-20 rounded-full border border-dashed border-[#915eff]/10 flex items-center justify-center z-0 animate-[spin-slow_25s_linear_infinite]">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#915eff] to-[#00f6ff] opacity-15 blur-md" />
            </div>

            {/* Terminal Interface Navigation Keys */}
            <div className="absolute bottom-[-15px] flex items-center gap-4 z-20">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-transparent hover:bg-white/5 border border-white/5 hover:border-white/15 flex items-center justify-center text-white/50 hover:text-white transition-all cursor-pointer"
              >
                <FiChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Category indicator dots */}
              <div className="flex gap-2">
                {skillCategories.map((cat, idx) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCardClick(idx)}
                    className="w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer"
                    style={{
                      backgroundColor: activeIndex === idx ? cat.accent : 'rgba(255,255,255,0.1)',
                      boxShadow: activeIndex === idx ? `0 0 10px ${cat.accent}` : 'none'
                    }}
                  />
                ))}
              </div>

              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-transparent hover:bg-white/5 border border-white/5 hover:border-white/15 flex items-center justify-center text-white/50 hover:text-white transition-all cursor-pointer"
              >
                <FiChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        ) : (
          /* Mobile / Flat swipeable tab interface layout */
          <div className="w-full space-y-6 select-none">
            
            {/* Horizontal tab scroll header */}
            <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-none font-mono">
              {skillCategories.map((category, index) => {
                const isSelected = activeIndex === index;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveIndex(index)}
                    className="px-4 py-2.5 rounded-xl border flex items-center gap-2 text-xs font-bold whitespace-nowrap cursor-pointer transition-all duration-300"
                    style={{
                      borderColor: isSelected ? category.accent : 'rgba(255,255,255,0.05)',
                      backgroundColor: isSelected ? `${category.accent}10` : 'transparent',
                      color: isSelected ? '#ffffff' : 'rgba(255,255,255,0.4)',
                    }}
                  >
                    {category.icon}
                    {category.title.split('_')[0]}
                  </button>
                );
              })}
            </div>

            {/* Flat active card container */}
            <div 
              className="w-full rounded-2xl bg-[#090b14]/75 border p-6 flex flex-col justify-between transition-all duration-500 min-h-[380px]"
              style={{
                borderColor: skillCategories[activeIndex].accent,
                boxShadow: `0 10px 25px rgba(0,0,0,0.3), inset 0 0 15px ${skillCategories[activeIndex].accent}05`
              }}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div>
                    <h3 className="text-base font-black text-white font-mono tracking-wider">
                      {skillCategories[activeIndex].title}
                    </h3>
                    <p className="text-[8px] font-mono text-white/30 uppercase mt-0.5 tracking-widest">
                      {skillCategories[activeIndex].subtitle}
                    </p>
                  </div>
                  <div style={{ color: skillCategories[activeIndex].accent }}>
                    {skillCategories[activeIndex].icon}
                  </div>
                </div>

                {/* Sub-skills list */}
                <div className="space-y-4 my-6">
                  {skillCategories[activeIndex].skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex flex-col gap-1">
                      <div className="flex justify-between font-mono text-[10px]">
                        <span className="text-white/70 font-semibold">{skill.name}</span>
                        <span style={{ color: skillCategories[activeIndex].accent }} className="font-bold">{skill.rating}</span>
                      </div>
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden relative">
                        <div 
                          className="h-full rounded-full"
                          style={{ 
                            width: skill.rating,
                            backgroundColor: skillCategories[activeIndex].accent,
                            boxShadow: `0 0 8px ${skillCategories[activeIndex].accent}`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="border-t border-white/5 pt-4 font-mono text-[9px] text-white/40 leading-normal">
                {skillCategories[activeIndex].desc}
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default Skills;
