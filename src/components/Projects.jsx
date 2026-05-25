import React, { useLayoutEffect, useRef } from 'react';
import { FiExternalLink, FiGithub, FiTerminal, FiCpu } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const componentRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'UGC-AI Short Video Ads Generator',
      description:
        'Developed a full-stack AI-powered application to generate UGC-style short promotional videos using product and model images. Implemented secure user authentication and account management using Clerk Auth. Integrated Gemini API to automate ad script generation and streamline video content creation. Managed PostgreSQL database for storing user profiles, generated projects, and application data securely.',
      tags: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Gemini API', 'Clerk Auth', 'REST APIs', 'VPS Deployment'],
      github: 'https://github.com/Sunidhichaudhary21/UGC-ADS.git',
      color: '#00f6ff',
      glowShadow: 'group-hover:shadow-[0_15px_40px_rgba(0,246,255,0.15)] group-hover:border-[#00f6ff]/40',
      terminalLines: [
        'SYSTEM > RUNNING: GEMINI_VISION_API',
        'PROMPT > UGC-STYLE SCRIPT GENERATED',
        'DB     > WRITE: POSTGRESQL... OK (200)'
      ]
    },
    {
      id: 2,
      title: 'Personal Portfolio Website',
      description:
        'Developed a modern and responsive personal portfolio website using React.js and Tailwind CSS to effectively showcase my projects, technical skills, and professional experience. The application features a clean and intuitive user interface with smooth navigation, optimized performance, and mobile-first design principles. Implemented reusable components, dynamic content rendering, and responsive layouts to ensure compatibility across various devices and screen sizes.',
      tags: ['React', 'GSAP', 'Tailwind CSS', 'Framer Motion', 'JavaScript', 'Vite'],
      github: 'https://github.com/Sunidhichaudhary21/Portfolio.git',
      color: '#915eff',
      glowShadow: 'group-hover:shadow-[0_15px_40px_rgba(145,94,255,0.15)] group-hover:border-[#915eff]/40',
      terminalLines: [
        'RENDER > GSAP PARALLAX ACTIVE',
        'AOS    > SLIDE PIPELINE INITIALIZED',
        'STYLE  > GLASSMORPHIC OVERLAYS: ON'
      ]
    },
    {
      id: 3,
      title: 'FocusFlow-AI Student Productivity',
      description:
        'Built a full-stack productivity platform for students integrating notes, task management, and syllabus organization. Used React Query for server state management and built NLP-based task parsing to extract deadlines from natural language. Deployed custom schema patterns for optimized relational search capabilities.',
      tags: ['React.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Express.js', 'Prisma', 'React Query'],
      github: 'https://github.com/Sunidhichaudhary21/FocusFlow.git',
      color: '#ff00ea',
      glowShadow: 'group-hover:shadow-[0_15px_40px_rgba(255,0,234,0.15)] group-hover:border-[#ff00ea]/40',
      terminalLines: [
        'FLOW   > QUERYING SYLLABUS DOCS...',
        'PARSER > NLP DEADLINE EXTRACTED: 05/25',
        'SERVER > EXPRESS SYSTEM HEALTH: 100%'
      ]
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.projects-heading',
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-heading',
            start: 'top 86%',
          },
        }
      );

      gsap.fromTo(
        '.project-card',
        { opacity: 0, y: 56 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.16,
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 82%',
          },
        }
      );
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={componentRef}
      id="projects"
      className="relative overflow-hidden bg-[#0a071d] py-24 md:py-28"
    >
      {/* Subtle Atmospheric Glowing Orbs */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[350px] w-[350px] rounded-full bg-[#915eff]/10 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-36 -right-32 h-[350px] w-[350px] rounded-full bg-[#00f6ff]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-screen-2xl px-6 md:px-12 xl:px-24 z-10">
        
        {/* Section Heading */}
        <div className="projects-heading mb-16 md:mb-20">
          <span className="mb-3 inline-flex items-center rounded-full border border-[#00f6ff]/30 bg-[#00f6ff]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#00f6ff] shadow-[0_0_10px_rgba(0,246,255,0.15)]">
            Selected Work
          </span>
          <h2 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] text-white tracking-tight pt-2">
            Projects Built With
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] to-[#00f6ff] drop-shadow-[0_2px_15px_rgba(0,246,255,0.2)]">
              Performance And Purpose
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-[#aaa6c3]">
            Every project balances pixel-perfect usability, high-performance rendering pipelines, and clean modular code architectures. Explore the highlights below.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`project-card group relative overflow-hidden rounded-3xl border border-white/5 bg-[#090b14]/75 backdrop-blur-md shadow-xl transition-all duration-500 hover:-translate-y-2 ${project.glowShadow}`}
            >
              {/* Technical Code Console Header Mockup */}
              <div
                className="relative h-44 overflow-hidden p-5 border-b border-white/5 flex flex-col justify-between font-mono"
                style={{ background: `linear-gradient(135deg, ${project.color}15, transparent)` }}
              >
                {/* Index number overlay */}
                <div className="absolute right-4 top-2 text-7xl font-black text-white/[0.03] select-none tracking-tighter">
                  0{index + 1}
                </div>

                {/* Console tabs bar */}
                <div className="flex items-center gap-1.5 text-[9px] text-white/40 border-b border-white/5 pb-2">
                  <FiTerminal size={10} style={{ color: project.color }} />
                  <span className="font-bold">terminal.log</span>
                  <span className="ml-auto w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: project.color }} />
                </div>

                {/* Code Terminal Output Lines */}
                <div className="flex flex-col gap-1 text-[9px] sm:text-[10px] text-white/50 pl-1 leading-normal pt-2">
                  {project.terminalLines.map((line, lIdx) => (
                    <div key={lIdx} className="flex gap-1">
                      <span style={{ color: project.color }}>&gt;</span>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>

                {/* Status Indicator */}
                <div className="flex items-center gap-1 text-[8px] font-bold tracking-widest text-white/30 uppercase mt-auto pt-2">
                  <FiCpu size={10} /> Active Framework: {project.tags[0]}
                </div>
              </div>

              {/* Card Body content */}
              <div className="space-y-6 p-6">
                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-xs sm:text-sm leading-relaxed text-[#aaa6c3] line-clamp-4 h-[80px]">
                  {project.description}
                </p>

                {/* Deployed capsule tags */}
                <div className="flex flex-wrap gap-1.5 pt-1 h-[68px] overflow-hidden">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="rounded-lg border border-white/5 bg-white/5 px-2.5 py-1 text-[9px] font-bold font-mono tracking-wide text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project links actions */}
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#100d25] border border-white/10 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 hover:bg-[#915eff] hover:text-white hover:border-[#915eff] hover:shadow-[0_0_15px_rgba(145,94,255,0.35)] cursor-pointer"
                  >
                    <FiGithub size={14} />
                    View Code
                  </a>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Launch live deployment preview"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#100d25] text-white/70 transition-all duration-300 hover:scale-105 hover:border-[#00f6ff]/40 hover:text-[#00f6ff] hover:bg-[#00f6ff]/10 hover:shadow-[0_0_15px_rgba(0,246,255,0.25)] cursor-pointer ml-auto"
                  >
                    <FiExternalLink size={15} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
