import React, { useState } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projectData = [
  {
    id: 1,
    title: 'UGC-AI ADS',
    category: 'ai',
    desc: 'Full-stack AI promotional video generator. Automates script generation via Gemini Vision and stores logs in PostgreSQL.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Gemini API'],
    bg: 'bg-[#E1EAF4]',
    github: 'https://github.com/Sunidhichaudhary21/UGC-ADS.git',
    live: 'https://github.com/Sunidhichaudhary21/UGC-ADS.git',
    mockupType: 'phone',
    mockupBg: 'bg-blue-500/10'
  },
  {
    id: 2,
    title: 'FOCUSFLOW-AI',
    category: 'fullstack',
    desc: 'Student productivity dashboard integrating task management, notes, and NLP deadline parsing from natural language.',
    tags: ['React', 'TypeScript', 'MongoDB', 'Prisma'],
    bg: 'bg-[#F2ECE4]',
    github: 'https://github.com/Sunidhichaudhary21/FocusFlow.git',
    live: 'https://github.com/Sunidhichaudhary21/FocusFlow.git',
    mockupType: 'tablet',
    mockupBg: 'bg-orange-500/5'
  },
  {
    id: 3,
    title: 'PORTFOLIO',
    category: 'frontend',
    desc: 'Modern personal developer portfolio styled in a clean editorial light-theme with premium hover states and smooth animations.',
    tags: ['React', 'GSAP', 'Tailwind v4', 'Vite'],
    bg: 'bg-[#EAF3EB]',
    github: 'https://github.com/Sunidhichaudhary21/Portfolio.git',
    live: 'https://github.com/Sunidhichaudhary21/Portfolio.git',
    mockupType: 'phone',
    mockupBg: 'bg-emerald-500/10'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projectData 
    : projectData.filter(project => {
        if (filter === 'fullstack') return project.category === 'fullstack' || project.category === 'ai';
        if (filter === 'frontend') return project.category === 'frontend';
        if (filter === 'ai') return project.category === 'ai';
        return true;
      });

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'fullstack', name: 'Full-Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'ai', name: 'AI Apps' }
  ];

  return (
    <section id="projects" className="py-24 bg-[#FDF8F3] relative overflow-hidden">
      <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        
        {/* FOREST GREEN CONTAINER BLOCK */}
        <div className="bg-[#0B3331] rounded-[2.5rem] p-8 sm:p-12 md:p-16 border-4 border-[#0B3331] shadow-2xl relative overflow-hidden">
          
          {/* Subtle graphic backing pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#FBC879_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none"></div>

          {/* Header Area inside Container */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 relative z-10">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#FDF8F3]">
                Selected Works
              </h2>
              <span className="text-2xl text-[#FBC879] animate-pulse-slow">✦</span>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-5 py-2 rounded-full font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    filter === cat.id
                      ? 'bg-[#EE9372] text-[#0B3331] shadow-sm scale-102'
                      : 'bg-transparent text-[#FDF8F3]/75 border border-[#FDF8F3]/25 hover:text-[#FDF8F3] hover:border-[#FDF8F3]/60'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#0B3331]/10 flex flex-col group h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Visual Canvas / Mockup Area */}
                <div 
                  className={`h-56 ${project.bg} p-6 flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:brightness-98`}
                >
                  {/* Background graphic elements inside card */}
                  <div className="absolute inset-0 bg-[radial-gradient(#0B3331_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03] pointer-events-none"></div>

                  {/* PHONE MOCKUP */}
                  {project.mockupType === 'phone' && (
                    <div className="w-24 h-40 bg-neutral-900 rounded-[20px] border-[4px] border-neutral-800 p-1 relative shadow-lg transform group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-500">
                      {/* Notch */}
                      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-2 bg-neutral-800 rounded-full"></div>
                      {/* Screen content */}
                      <div className={`w-full h-full ${project.mockupBg} rounded-[14px] overflow-hidden p-2 flex flex-col justify-between border border-neutral-700/20`}>
                        <div className="w-5 h-2 bg-neutral-400/40 rounded-full"></div>
                        <div className="space-y-1 my-auto">
                          <div className="w-12 h-1 bg-neutral-400/30 rounded"></div>
                          <div className="w-10 h-1 bg-neutral-400/30 rounded"></div>
                          <div className="w-14 h-1 bg-neutral-400/30 rounded"></div>
                        </div>
                        <div className="w-full h-6 bg-[#0B3331]/20 rounded flex items-center justify-center text-[6px] text-[#0B3331] font-bold uppercase tracking-wider">APP</div>
                      </div>
                    </div>
                  )}

                  {/* TABLET MOCKUP */}
                  {project.mockupType === 'tablet' && (
                    <div className="w-36 h-28 bg-neutral-900 rounded-xl border-[4px] border-neutral-800 p-1 relative shadow-lg transform group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-500">
                      {/* Home bar representation */}
                      <div className="absolute left-1.5 top-1/2 -translate-y-1/2 w-1 h-3 bg-neutral-800 rounded-full"></div>
                      {/* Screen content */}
                      <div className={`w-full h-full ${project.mockupBg} rounded-md overflow-hidden p-2 flex flex-col justify-between border border-neutral-700/20`}>
                        <div className="flex justify-between items-center">
                          <div className="w-8 h-2 bg-neutral-400/30 rounded-full"></div>
                          <div className="w-3 h-3 bg-neutral-400/40 rounded-full"></div>
                        </div>
                        <div className="space-y-1.5 my-auto">
                          <div className="w-20 h-1 bg-neutral-400/30 rounded"></div>
                          <div className="w-16 h-1 bg-neutral-400/30 rounded"></div>
                        </div>
                        <div className="flex gap-1 justify-end">
                          <div className="w-6 h-2.5 bg-[#EE9372] rounded"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Metadata & Footer */}
                <div className="p-6 flex flex-col flex-grow bg-white">
                  <div className="flex-grow">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2.5 py-1 rounded bg-[#0B3331]/5 text-[#0B3331] font-sans font-bold text-[9px] uppercase tracking-wider border border-[#0B3331]/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-serif font-black text-[#0B3331] mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-[#0B3331]/70 font-sans text-xs sm:text-sm leading-relaxed mb-6">
                      {project.desc}
                    </p>
                  </div>

                  {/* Actions & Links block */}
                  <div className="flex justify-between items-center pt-4 border-t border-[#0B3331]/5">
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-sans font-bold text-[#0B3331]/70 hover:text-[#EE9372] transition-colors uppercase tracking-wider"
                      >
                        <FiGithub size={13} /> Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-sans font-bold text-[#0B3331]/70 hover:text-[#EE9372] transition-colors uppercase tracking-wider"
                      >
                        <FiExternalLink size={13} /> Live
                      </a>
                    </div>

                    {/* Styled diagonal arrow circle button */}
                    <button
                      onClick={() => window.open(project.live, '_blank')}
                      className="w-10 h-10 rounded-full bg-[#FDECE5] hover:bg-[#EE9372] text-[#0B3331] hover:text-[#FDF8F3] flex items-center justify-center transition-all duration-300 transform group-hover:rotate-45 shadow-sm cursor-pointer"
                    >
                      <span className="text-lg font-bold">↗</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
