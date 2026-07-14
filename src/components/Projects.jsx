import React, { useState, useRef } from 'react';
import { FiExternalLink, FiGithub, FiCode } from 'react-icons/fi';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import archnovaMockup from '../assets/archnova_mockup.png';
import focusflowMockup from '../assets/focusflow.png';
import portfolioMockup from '../assets/portfoloi.png';

gsap.registerPlugin(ScrollTrigger);

const projectData = [
  {
    id: 1,
    index: '01',
    title: 'ArchNova',
    category: 'ai',
    desc: '• Developed a full-stack AI platform that converts architecture diagrams into structured graphs and Mermaid diagrams using vision-based parsing.\n• Building an AI review engine that evaluates system designs for scalability, security, reliability, performance, and cost, generating detailed recommendations and architecture scores.\n• Implemented AI-powered contextual chat (RAG), version history, collaborative workspaces, report generation (PDF/Markdown/JSON), and role-based access control.\n• Designed a modular backend with Prisma, PostgreSQL, secure authentication, and reusable APIs, supporting scalable architecture analysis workflows.',
    tags: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Clerk Auth', 'Gemini AI', 'Mermaid.js', 'React Flow', 'Vercel Blob'],
    bg: 'bg-[#E1EAF4]',
    github: 'https://github.com/Sunidhichaudhary21/ArchNova.git',
    live: 'https://archnova-one.vercel.app/',
    mockupImg: archnovaMockup,
    domain: 'archnova-one.vercel.app'
  },
  {
    id: 2,
    index: '02',
    title: 'FOCUSFLOW-AI',
    category: 'fullstack',
    desc: '• Designed and developed a scalable full-stack productivity platform supporting notes, task management, Kanban boards, and more.\n• Designed relational database schemas using PostgreSQL and Prisma ORM for efficient data management.\n• Developed REST APIs for task management and application workflows.\n• Improved application performance using React Query caching and optimized database queries.\n• Integrated Google Drive API for secure document management.',
    tags: ['React', 'TypeScript', 'MongoDB', 'Prisma', 'React Query', 'REST APIs', 'Google Drive API'],
    bg: 'bg-[#F2ECE4]',
    github: 'https://github.com/Sunidhichaudhary21/FocusFlow.git',
    live: 'https://github.com/Sunidhichaudhary21/FocusFlow.git',
    mockupImg: focusflowMockup,
    domain: 'focusflow-ai.vercel.app'
  },
  {
    id: 3,
    index: '03',
    title: 'PORTFOLIO',
    category: 'frontend',
    desc: '• Modern personal developer portfolio styled in a clean editorial light-theme with premium hover states and smooth animations.\n• Built using React, Tailwind CSS v4, and GSAP ScrollTrigger for parallax animations.\n• Optimized for fast load speeds, accessibility, and clean component structures.',
    tags: ['React', 'GSAP', 'Tailwind CSS v4', 'Vite', 'Framer Motion'],
    bg: 'bg-[#EAF3EB]',
    github: 'https://github.com/Sunidhichaudhary21/Portfolio.git',
    live: 'https://github.com/Sunidhichaudhary21/Portfolio.git',
    mockupImg: portfolioMockup,
    domain: 'portfolio.sunidhi.dev'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef(null);

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

  // GSAP Scroll Animation for split rows
  useGSAP(() => {
    gsap.utils.toArray('.project-row').forEach((row) => {
      const imgCol = row.querySelector('.project-img-col');
      const textCol = row.querySelector('.project-text-col');

      gsap.from(imgCol, {
        scrollTrigger: {
          trigger: row,
          start: 'top 75%',
        },
        x: row.classList.contains('flex-row-reverse') ? 80 : -80,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out'
      });

      gsap.from(textCol, {
        scrollTrigger: {
          trigger: row,
          start: 'top 75%',
        },
        x: row.classList.contains('flex-row-reverse') ? -80 : 80,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out'
      });
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-[#FDF8F3] relative overflow-hidden">
      <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        
        {/* SECTION TITLE HEADER */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6" data-aos="fade-right">
          <div className="text-left flex flex-col items-start">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#EE9372]/30 bg-[#EE9372]/5 px-4 py-1.5 text-xs font-sans font-black uppercase tracking-wider text-[#EE9372]">
              ✿ Selected Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#0B3331] leading-tight">
              Featured Projects
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2 rounded-full font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${filter === cat.id
                  ? 'bg-[#EE9372] text-[#0B3331] shadow-md scale-102 font-black'
                  : 'bg-white text-[#0B3331]/75 border border-[#0B3331]/10 hover:text-[#EE9372] hover:border-[#EE9372]/40 shadow-sm'
                  }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* ALTERNATING SPLIT-ROW CONTAINER */}
        <div className="space-y-24 mt-16">
          {filteredProjects.map((project, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={project.id}
                className={`project-row flex flex-col lg:flex-row gap-12 lg:gap-16 items-center py-8 border-b border-[#0B3331]/10 last:border-b-0 ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                
                {/* 1. MOCKUP COLUMN */}
                <div className="project-img-col w-full lg:w-1/2 flex justify-center z-10">
                  <div className={`w-full aspect-[4/3] rounded-[2rem] ${project.bg} p-6 sm:p-10 flex items-center justify-center border border-[#0B3331]/10 shadow-md relative overflow-hidden group`}>
                    
                    {/* Background grid */}
                    <div className="absolute inset-0 bg-[radial-gradient(#0B3331_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03] pointer-events-none"></div>

                    {/* Browser Mockup Frame */}
                    <div className="w-full bg-[#0B3331]/5 rounded-2xl overflow-hidden border border-[#0B3331]/15 shadow-xl flex flex-col transform group-hover:scale-102 group-hover:-translate-y-1 transition-all duration-500">
                      
                      {/* Browser Header Bar */}
                      <div className="w-full bg-[#0B3331]/5 px-3.5 py-2 flex items-center gap-1.5 border-b border-[#0B3331]/10">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        <div className="w-36 h-4.5 bg-white/70 rounded text-[7px] text-[#0B3331]/40 flex items-center justify-center font-sans tracking-wide truncate ml-4 border border-[#0B3331]/5 select-none">
                          {project.domain}
                        </div>
                      </div>

                      {/* Web View Screen */}
                      <div className="w-full aspect-[4/3] bg-white overflow-hidden relative">
                        <img 
                          src={project.mockupImg} 
                          alt={project.title} 
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-104" 
                        />
                      </div>

                    </div>
                  </div>
                </div>

                {/* 2. TEXT DETAILS COLUMN */}
                <div className="project-text-col w-full lg:w-1/2 flex flex-col items-start text-left z-20">
                  {/* Project Number */}
                  <span className="font-serif font-black text-5xl sm:text-6xl text-[#EE9372]/20 leading-none mb-3">
                    {project.index}
                  </span>

                  <h3 className="text-3xl sm:text-4xl font-serif font-black text-[#0B3331] mb-3 tracking-tight leading-none">
                    {project.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-[#0B3331]/5 text-[#0B3331] font-sans font-bold text-[10px] uppercase tracking-wider border border-[#0B3331]/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bulleted Description */}
                  <p className="text-[#0B3331]/75 font-sans text-sm sm:text-base leading-relaxed mb-8 whitespace-pre-line text-left">
                    {project.desc}
                  </p>

                  {/* Links / Action Buttons */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-2.5 rounded-full border border-[#0B3331]/10 bg-white hover:bg-[#EE9372] text-[#0B3331] hover:text-white font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all duration-300 shadow-sm cursor-pointer"
                    >
                      <FiGithub size={13} /> Code
                    </a>
                    
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-2.5 rounded-full bg-[#0B3331] hover:bg-[#EE9372] text-[#FDF8F3] hover:text-[#0B3331] font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all duration-300 shadow-md cursor-pointer"
                    >
                      View Live 
                      <span className="text-sm">↗</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
