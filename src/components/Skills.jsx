import React, { useRef, useState } from 'react';
import { FiCode, FiDatabase, FiServer, FiTool, FiCpu, FiLayers } from 'react-icons/fi';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Building Interactions',
    icon: <FiCode className="w-8 h-8" />,
    skills: ['React', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
    bg: 'bg-[#151030]',
    border: 'border-[#00f6ff]/30',
    text: 'text-white',
    accent: 'text-[#00f6ff]'
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'System Architecture',
    icon: <FiServer className="w-8 h-8" />,
    skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs'],
    bg: 'bg-[#100d25]',
    border: 'border-[#915eff]/30',
    text: 'text-white',
    accent: 'text-[#915eff]'
  },
  {
    id: 'database',
    title: 'Database',
    subtitle: 'Data Management',
    icon: <FiDatabase className="w-8 h-8" />,
    skills: ['PostgreSQL', 'MongoDB',  'Prisma', 'Firebase'],
    bg: 'bg-[#050816]',
    border: 'border-[#ff00ea]/30',
    text: 'text-white',
    accent: 'text-[#ff00ea]'
  },
  {
    id: 'devops',
    title: 'DevOps',
    subtitle: 'Infrastructure',
    icon: <FiCpu className="w-8 h-8" />,
    skills: [ 'AWS', 'Git / GitHub', 'Linux'],
    bg: 'bg-[#151030]',
    border: 'border-[#00f6ff]/30',
    text: 'text-white',
    accent: 'text-[#00f6ff]'
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
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Mobile Cards Animation
    gsap.utils.toArray('.mobile-skill-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        delay: i * 0.1,
        duration: 0.8
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-[#100d25] relative overflow-hidden" id="skills">
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 text-center skills-title">
          <span className="text-[#ff00ea] font-bold tracking-widest uppercase text-sm mb-3 block glow-text">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Technical Arsenal
          </h2>
        </div>

        {/* Desktop: Horizontal Accordion */}
        <div className="hidden lg:flex w-full h-[600px] gap-2 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(145,94,255,0.1)] border border-white/5">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className={`relative transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-end overflow-hidden group cursor-pointer ${activeId === category.id ? 'flex-[3] border-l-2' : 'flex-[0.5] hover:flex-[0.7]'} ${category.bg} ${activeId === category.id ? category.border : 'border-white/5'}`}
              onMouseEnter={() => setActiveId(category.id)}
            >
              {/* Abstract Background Decoration */}
              <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-1/2 -translate-y-1/2">
                <FiLayers className="w-64 h-64 text-white" />
              </div>

              {/* Vertical Title (Collapsed State) */}
              <div className={`absolute top-10 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${activeId === category.id ? 'opacity-0' : 'opacity-100'}`}>
                <div className={`${category.text} whitespace-nowrap transform -rotate-90 origin-center font-bold tracking-widest uppercase text-lg mix-blend-overlay`}>
                  {category.title}
                </div>
                <div className={`mt-8 ${category.accent} opacity-70 flex justify-center`}>
                  {category.icon}
                </div>
              </div>

              {/* Expanded Content */}
              <div className={`p-10 min-w-[400px] transition-all duration-500 transform ${activeId === category.id ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-10 absolute bottom-0 left-0'}`}>
                <div className={`mb-6 p-3 rounded-xl inline-block bg-[#050816] shadow-inner ${category.accent}`}>
                  {category.icon}
                </div>
                <h3 className={`text-4xl font-black mb-2 ${category.text}`}>
                  {category.title}
                </h3>
                <p className={`text-lg font-medium mb-8 ${category.accent} opacity-90`}>
                  {category.subtitle}
                </p>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-[#050816]/50 rounded-lg text-white font-medium border border-white/5 hover:border-white/20 transition-colors cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Vertical Grid */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div key={category.id} className={`mobile-skill-card rounded-2xl p-8 ${category.bg} shadow-lg relative overflow-hidden border ${category.border}`}>
              <div className={`absolute top-0 right-0 p-4 opacity-5 text-white`}>
                {category.icon}
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 bg-[#050816] rounded-lg ${category.accent}`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${category.text}`}>{category.title}</h3>
                  <p className={`text-sm opacity-80 ${category.accent}`}>{category.subtitle}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className={`px-3 py-1 bg-[#050816]/50 rounded-md text-sm font-medium border border-white/5 ${category.text}`}>
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
