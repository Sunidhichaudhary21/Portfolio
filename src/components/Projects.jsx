import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projectData = [
  {
    id: 1,
    title: 'UGC-AI ADS',
    desc: 'Full-stack AI promotional video generator. Automates script generation via Gemini Vision and stores profile logs securely in PostgreSQL.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Gemini API', 'Clerk Auth'],
    bg: 'bg-[#4A69BB]',
    number: '1',
    github: 'https://github.com/Sunidhichaudhary21/UGC-ADS.git',
    live: 'https://github.com/Sunidhichaudhary21/UGC-ADS.git',
    mockupType: 'phone',
    mockupBg: 'bg-blue-500/10'
  },
  {
    id: 2,
    title: 'FOCUSFLOW-AI',
    desc: 'Student productivity dashboard integrating task management, notes, and NLP deadline parsing from natural language.',
    tags: ['React', 'TypeScript', 'MongoDB', 'Prisma', 'React Query'],
    bg: 'bg-[#D4CDC5]',
    number: '2',
    github: 'https://github.com/Sunidhichaudhary21/FocusFlow.git',
    live: 'https://github.com/Sunidhichaudhary21/FocusFlow.git',
    mockupType: 'tablet',
    mockupBg: 'bg-[#FFFDF9]'
  },
  {
    id: 3,
    title: 'PORTFOLIO',
    desc: 'Modern personal developer portfolio styled in a clean editorial light-theme with premium hover states and smooth animations.',
    tags: ['React', 'GSAP', 'Tailwind v4', 'Framer Motion', 'Vite'],
    bg: 'bg-[#597BC6]',
    number: '3',
    github: 'https://github.com/Sunidhichaudhary21/Portfolio.git',
    live: 'https://github.com/Sunidhichaudhary21/Portfolio.git',
    mockupType: 'phone',
    mockupBg: 'bg-indigo-500/10'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#FFFDF9] relative overflow-hidden">
      <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        
        {/* Background "CONTENT" and numbers header */}
        <div className="relative w-full flex flex-col items-center mb-16 select-none justify-center h-32">
          {/* CONTENT big outline text */}
          <div className="absolute text-[12vw] font-display font-extrabold tracking-[0.1em] text-neutral-200/50 uppercase pointer-events-none text-center select-none" style={{ WebkitTextStroke: '1px #E5E5E5', fill: 'transparent', color: 'transparent' }}>
            CONTENT
          </div>
          
          {/* Overlapping filled beige numbers */}
          <div className="absolute flex justify-center items-center gap-8 sm:gap-16 md:gap-20 z-10">
            <span className="text-xl sm:text-2xl font-display font-extrabold text-[#B39274]/55 translate-y-[-10px] translate-x-[-10px]">01</span>
            <span className="text-xl sm:text-2xl font-display font-extrabold text-[#B39274]/55 translate-y-[15px] translate-x-[0px]">02</span>
            <span className="text-xl sm:text-2xl font-display font-extrabold text-[#B39274]/55 translate-y-[-15px] translate-x-[10px]">03</span>
          </div>
        </div>

        {/* 3 vertical project strips layout (flex row on desktop, stack on mobile) */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-6 items-stretch w-full min-h-[500px]">
          {projectData.map((project) => (
            <div 
              key={project.id} 
              className="flex-grow flex flex-col md:w-0 md:min-w-[24%] project-strip group"
            >
              {/* Colored Card Area */}
              <div 
                className={`relative h-[380px] w-full ${project.bg} rounded-2xl flex flex-col justify-between p-6 overflow-hidden shadow-sm transition-all duration-300 group-hover:shadow-md cursor-pointer`}
                onClick={() => window.open(project.live, '_blank')}
              >
                
                {/* Stylized Mockup Render */}
                <div className="w-full flex-grow flex items-center justify-center pt-4 relative">
                  
                  {/* PHONE MOCKUP */}
                  {project.mockupType === 'phone' && (
                    <div className="w-24 h-44 bg-neutral-900 rounded-[20px] border-[4px] border-neutral-800 p-1 relative shadow-lg transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500">
                      {/* Notch */}
                      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-2 bg-neutral-800 rounded-full"></div>
                      {/* Screen content */}
                      <div className={`w-full h-full ${project.mockupBg} rounded-[14px] overflow-hidden p-2 flex flex-col justify-between border border-neutral-700/50`}>
                        <div className="w-5 h-2 bg-neutral-400/40 rounded-full"></div>
                        <div className="space-y-1 my-auto">
                          <div className="w-12 h-1 bg-neutral-400/30 rounded"></div>
                          <div className="w-10 h-1 bg-neutral-400/30 rounded"></div>
                          <div className="w-14 h-1 bg-neutral-400/30 rounded"></div>
                        </div>
                        <div className="w-full h-8 bg-neutral-400/20 rounded flex items-center justify-center text-[7px] text-white/50 font-bold uppercase">APP</div>
                      </div>
                    </div>
                  )}

                  {/* TABLET MOCKUP */}
                  {project.mockupType === 'tablet' && (
                    <div className="w-36 h-28 bg-neutral-900 rounded-xl border-[4px] border-neutral-800 p-1 relative shadow-lg transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500">
                      {/* Home bar representation */}
                      <div className="absolute left-1.5 top-1/2 -translate-y-1/2 w-1 h-3 bg-neutral-800 rounded-full"></div>
                      {/* Screen content */}
                      <div className={`w-full h-full ${project.mockupBg} rounded-md overflow-hidden p-2 flex flex-col justify-between border border-neutral-700/30`}>
                        <div className="flex justify-between items-center">
                          <div className="w-8 h-2 bg-neutral-400/30 rounded-full"></div>
                          <div className="w-3 h-3 bg-neutral-400/40 rounded-full"></div>
                        </div>
                        <div className="space-y-1.5 my-auto">
                          <div className="w-20 h-1 bg-neutral-400/30 rounded"></div>
                          <div className="w-16 h-1 bg-neutral-400/30 rounded"></div>
                          <div className="w-24 h-1 bg-neutral-400/30 rounded"></div>
                        </div>
                        <div className="flex gap-1 justify-end">
                          <div className="w-6 h-3 bg-[#B39274] rounded"></div>
                          <div className="w-6 h-3 bg-neutral-400/20 rounded"></div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>

                {/* Big White Number */}
                <div className="font-display font-extrabold text-7xl sm:text-8xl text-white/90 leading-none">
                  {project.number}
                </div>

                {/* Hover Reveal Launch Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FiExternalLink size={14} />
                </div>

              </div>

              {/* Text Label Area */}
              <div className="mt-4 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-extrabold text-neutral-800 text-sm tracking-wider uppercase">
                    {project.title}
                  </h4>
                  
                  {/* Detailed Description */}
                  <p className="text-xs sm:text-sm text-neutral-500 mt-1.5 leading-relaxed">
                    {project.desc}
                  </p>
                  
                  {/* Tech stack capsules */}
                  <div className="flex flex-wrap gap-1.5 mt-3.5">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2.5 py-1 rounded bg-neutral-100 text-neutral-500 font-mono text-[9px] sm:text-[10px] font-bold border border-neutral-200/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Links */}
                <div className="flex gap-4 mt-5 pt-4 border-t border-neutral-100/50">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-display font-extrabold text-neutral-500 hover:text-neutral-900 transition-colors uppercase tracking-wider relative group/link"
                  >
                    <FiGithub size={11} /> Code
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-neutral-900 transition-all duration-300 group-hover/link:w-full"></span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-display font-extrabold text-[#B39274] hover:text-neutral-900 transition-colors uppercase tracking-wider relative group/link2"
                  >
                    <FiExternalLink size={11} /> Live
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-neutral-900 transition-all duration-300 group-hover/link2:w-full"></span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
